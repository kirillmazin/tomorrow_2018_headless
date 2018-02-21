import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import {RichText, Date} from 'prismic-reactjs';
import Interview from './Interview';
// Declare your component
export default class Page extends React.Component {

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

      return props.prismicCtx.api.getByUID('case_study_segmentation', props.match.params.uid, {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          console.log(doc)
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
   return (
     <div >
       {/* This is how to get an image into your template */}
        <h1>Hello</h1>
       <h1>{RichText.asText(this.state.doc.data.subhead)}</h1>
       <h1>{RichText.asText(this.state.doc.data.page_title)}</h1>
       {console.log(this.state.doc.data.interview.slug)}


       <Interview uid={this.state.doc.data.interview.slug} prismicCtx={this.props.prismicCtx}/>
     </div>
   );
 } else if (this.state.notFound) {
   return <NotFound />;
 }
 return <h1>Loading</h1>;
  }
}
