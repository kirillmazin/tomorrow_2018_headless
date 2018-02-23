import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import {RichText, Date} from 'prismic-reactjs';
import LargeParagraph from './components/casestudies/LargeParagraph';
import Quote from './components/casestudies/Quote';
import Header from './components/casestudies/Header';
import LargeImage from './components/casestudies/LargeImage';
import Whatwedid from './components/casestudies/Whatwedid';
import Window from './components/casestudies/Window';
import Footer from './components/_globals/Footer';
import Interview from './components/casestudies/Interview';
import Menu from './components/_globals/Menu.js';
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

      return props.prismicCtx.api.getByUID('casestudy', props.match.params.uid, {}, (err, doc) => {
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
      // process the object
    
      let cs_modules = [];
      const subtitle = this.state.doc.data.subtitle[0].text;
      const title = this.state.doc.data.title[0].text;
      const hero_image = this.state.doc.data.hero_image.url;

      //console.log(this.state.doc.data)
    //  console.log(this.state.doc.data.hero_image)




      for(var i=0; i<this.state.doc.data.body.length;i++){
      //  console.log(this.state.doc.data.body[i])
        let slice_type = this.state.doc.data.body[i].slice_type;
        let o = {};

        o.slice_type = slice_type;
        console.log("----- " + o.slice_type)
        if(o.slice_type == "what_we_did"){
          o.scope = [];
            console.log(this.state.doc.data.body[i].items);
            for(var l=0;l<this.state.doc.data.body[i].items.length;l++){
              //  console.log("---"+ this.state.doc.data.body[i].items[l].work_item);
                o.scope.push(this.state.doc.data.body[i].items[l].work_item);
            }

        }
        if(  o.slice_type == "large_paragraph"){


          o.copy = this.state.doc.data.body[i].primary.paragraph[0].text;
        }

          if( o.slice_type == "quote"){
              //o.copy = this.state.doc.data.body[i].primary.paragraph[0].text;

                o.copy = this.state.doc.data.body[i].primary.paragraph[0].text;
          }


            if( o.slice_type == "large_image"){


              o.image_width =  this.state.doc.data.body[i].primary.image.dimensions.width;
              o.image_height = this.state.doc.data.body[i].primary.image.dimensions.height;
              o.aspect_ratio = o.image_width / o.image_height ;


              o.image = this.state.doc.data.body[i].primary.image.url;

            }
            
            
            if( o.slice_type == "interview"){
              console.log(" we have an interview");
              console.log(this.state.doc.data.body[i].primary);
              //console.log(this.state.doc.data.primary[0]);
              
              o.interview_title = this.state.doc.data.body[i].primary.interview_title[0].text;
              o.staff_photo = this.state.doc.data.body[i].primary.staff_photo.url;
              o.work_sample = this.state.doc.data.body[i].primary.work_sample.url;
              console.log(o.staff_photo);
                //o.copy = this.state.doc.data.body[i].primary.paragraph[0].text;

                  //o.copy = this.state.doc.data.body[i].primary.paragraph[0].text;
            }
            
            

        cs_modules.push(o);
      }


    let to_render = [];
    for(var i=0;i<cs_modules.length;i++){
        if(cs_modules[i].slice_type  == "large_paragraph"){
          to_render.push(<LargeParagraph copy={cs_modules[i].copy}/>)



        }

          if(cs_modules[i].slice_type  == "quote"){
            to_render.push(<Quote copy={cs_modules[i].copy}/>)

          }

          if(cs_modules[i].slice_type == "large_image"){

            to_render.push(<LargeImage image={cs_modules[i].image} image_width={cs_modules[i].image_width} image_height={cs_modules[i].image_height} aspect_ratio={cs_modules[i].aspect_ratio}/>)

          }

          if(cs_modules[i].slice_type == "what_we_did"){
              to_render.push(<Whatwedid scope={cs_modules[i].scope}/>);
          }
          
          if(cs_modules[i].slice_type == "interview"){
              to_render.push(<Interview image={cs_modules[i].work_sample} staff_photo={cs_modules[i].staff_photo} interview_title={cs_modules[i].interview_title}/>);
          }
        
          
          
    }


    return(
      <div>
          <Menu/>
      <div className="case-study">

      <Window image={hero_image} title={title} subtitle={subtitle}/>
          <div className="container" >

            {to_render}
              <Footer/>
        </div>
      </div>
      </div>
    );



// end if




 } else if (this.state.notFound) {
   return <NotFound />;
 }
 return <h1>Loading</h1>;

  }
}
