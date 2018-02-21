import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import {RichText, Date} from 'prismic-reactjs';
// Declare your component
export default class Interview extends React.Component {

  state = {
    doc: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('interview', props.uid, {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    // We will fill in this section in Step 3...
    if (this.state.doc) {

      this.state.doc.data.questions.map(
        function(item){
          console.log(item.question[0].text);
          console.log(item.answer[0].text);
        }

      )


   return (
     <div>
       {/* This is how to get an image into your template */}

       <h1>_______</h1>
       <h1>{RichText.asText(this.state.doc.data.interview_title)}</h1>
       <h1>{RichText.asText(this.state.doc.data.organizational_name)}</h1>
       <h1>{RichText.asText(this.state.doc.data.staff_title)}</h1>
       <img alt="cover" src={this.state.doc.data.photo_staff.url} />


       {
       this.state.doc.data.questions.map(
         item => (
           <div>
             <strong>
                 {item.question[0].text}
                </strong>
                 <p>
                     {item.answer[0].text}
                     </p>
                     </div>
               ))



       }


     </div>
   );
 } else if (this.state.notFound) {
   return <NotFound />;
 }
 return <h1>Loading</h1>;
  }
}
