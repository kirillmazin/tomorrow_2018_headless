import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import LargeParagraph from './components/casestudies/LargeParagraph';
import Quote from './components/casestudies/Quote';
import LargeTitle from './components/contact/LargeTitle';
import Header from './components/casestudies/Header';
import Map from './components/contact/Map';
import Whatwedid from './components/casestudies/Whatwedid';
import Window from './components/casestudies/Window';

import IntroParagraph from './components/contact/IntroParagraph';
import Footer from './components/_globals/Footer';
import Interview from './components/casestudies/Interview';
import ImageGrid from './components/casestudies/ImageGrid';
import Menu from './components/_globals/Menu.js';
import Research from './components/casestudies/Research';
import Website from './components/casestudies/Website';
import Video from './components/home/Video';
import Highlight from './components/home/Highlight';
import Government from './components/home/Government';
import $ from 'jquery';

// Declare your component
export default class Home extends React.Component {



  constructor(props){
    super(props);


    this.state = {
        visibility: this.props.visibility,
        doc: null,
        notFound: false,

        header_style:{
          backgroundColor:'rgba(0,0,0,0)',

        },
        contact_band_color:{

        }




    }
  }
  componentWillMount() {
    this.fetchPage(this.props);
    window.scrollTo(0, 0);
  }

  componentDidMount(){

    this.$header_color = $(this.header_color );







  }
  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    //this.props.prismicCtx.toolbar();
    window.scrollTo(0, 0);
  }

  fetchPage(props) {
      if (props.prismicCtx) {
      // We are using the function to get a document by its uid

      return props.prismicCtx.api.query(


          Prismic.Predicates.any('document.type', ['homepage'])


).then((doc) =>

  {

    this.setState({ doc });



}
    // response is the response object, response.results holds the documents



      );
    }
    return null;
  }


  render() {
    // We will fill in this section in Step 3...
    if (this.state.doc) {
      // process the object





      let cs_modules = [];
      let root = this.state.doc.results[0].data;



      let video_overlay_copy = [];
      let video_overlay_still = root.video_still.url;



      for(let i=0;i<root.video_overlay_copy.length;i++){

          video_overlay_copy.push(root.video_overlay_copy[i].phrase[0].text);
      }






      for(var i=0; i<root.body.length;i++){

        let slice_type = root.body[i].slice_type;
        let o = {};

        o.slice_type = slice_type;


        console.log(" slice type " + o.slice_type)




        if(o.slice_type == "case_study_highlight"){

            o.copy = PrismicReact.RichText.render(root.body[i].primary.copy, this.props.prismicCtx.linkResolver);
            o.alignment = root.body[i].primary.alignment;

        }

        if(o.slice_type == "government"){

            o.copy = PrismicReact.RichText.render(root.body[i].primary.copy, this.props.prismicCtx.linkResolver);
            o.alignment = root.body[i].primary.alignment;

            console.log(root.body[i].items[0]);
            o.images = []
                console.log("--------");
            for(let l=0;l<root.body[i].items.length;l++){
                //  console.log("+++");
                //  console.log(root.body[i].items[l].image.url)
                  o.images.push(root.body[i].items[l].image.url)

            }

        }


        if(o.slice_type == "grid_of_images"){
            o.grid_type = root.body[i].primary.grid_type;
            o.images = [];

            for(let l=0;l<root.body[i].items.length;l++){

                let img_obj = {};



                //o.images.push(this.state.doc.data.body[i].items[l].image.url)

                o.image_width =  root.body[i].items[l].image.dimensions.width;
                o.image_height = root.body[i].items[l].image.dimensions.height;


                img_obj.url  =  root.body[i].items[l].image.url;
                img_obj.aspect_ratio = o.image_width / o.image_height;

                o.images.push(img_obj);


            }
        }
        if(  o.slice_type == "large_paragraph"){

          o.copy  = PrismicReact.RichText.render(root.body[i].primary.paragraph, this.props.prismicCtx.linkResolver);
        //  o.copy = root.body[i].primary.paragraph[0].text;
        }

          if( o.slice_type == "large_title"){
                //o.copy = root.body[i].primary.paragraph[0].text;
                //console.log(root.body[i].primary.title[0].text);
                o.copy = root.body[i].primary.title[0].text;
          }









        cs_modules.push(o);
      }


    let to_render = [];
    for(var i=0;i<cs_modules.length;i++){
        if(cs_modules[i].slice_type  == "case_study_highlight"){
          to_render.push(<Highlight copy={cs_modules[i].copy} alignment={cs_modules[i].alignment}/>)



        }

        if(cs_modules[i].slice_type  == "government"){
          to_render.push(<Government copy={cs_modules[i].copy} alignment={cs_modules[i].alignment} images={cs_modules[i].images}/>)



        }











    }






    return(
      <div>
          <Menu/>

          <div>
            <Video intro_font_color={'black'} video_overlay_copy={video_overlay_copy} video_overlay_still={video_overlay_still}/>
            {to_render}

          </div>
          <div className="container">

          <Footer/>
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
