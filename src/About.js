import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import LargeParagraphTitle from './components/text/LargeParagraphTitle';

import LargeTitle from './components/contact/LargeTitle';
import Header from './components/casestudies/Header';
import Map from './components/casestudies/LargeImage';



import IntroParagraph from './components/contact/IntroParagraph';
import Footer from './components/_globals/Footer';

import ImageGrid from './components/casestudies/ImageGrid';
import Menu from './components/_globals/Menu.js';



import HeroPhoto from './components/_globals/HeroPhoto';
import People from './components/about/People';
import Instagram from './components/about/Instagram';


import Intro from './components/home/Intro';
import ProjectGridIntro from './components/home/ProjectGridIntro';
import $ from 'jquery';

// Declare your component
export default class About extends React.Component {



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

    //this.$header_color = $(this.header_color );
    document.title = "Tomorrow Partners | About";






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


          Prismic.Predicates.any('document.type', ['about']),{ pageSize : 100}


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

        let video_overlay_copy = [];
        let all_case_studies = [];
        let video_overlay_still;
        let root;
        let slice_type;
        let hero_video;
        let ui_color;

      for(let i=0;i<this.state.doc.results.length;i++){




        if(this.state.doc.results[i].type == "about"){

          root = this.state.doc.results[i].data;


        }






      }



      let hero_copy = root.hero_copy[0].text;
      let hero_image = root.hero_image.url


      let hero_width  =  root.hero_image.dimensions.width;
      let hero_height = root.hero_image.dimensions.height;

      ui_color = root.tomorrow_logo_color != null ? root.tomorrow_logo_color : "#ffffff";


      let hero_aspect_ratio = hero_width / hero_height;










      for(var i=0; i<root.body.length;i++){

        slice_type = root.body[i].slice_type;
        let o = {};
        o.images = []
        o.slice_type = slice_type;



        if(o.slice_type == "intro"){


            o.copy = PrismicReact.RichText.render(root.body[i].primary.copy, this.props.prismicCtx.linkResolver);
            o.links = [];
              for(let l=0;l<root.body[i].items.length;l++){
                o.links.push(root.body[i].items[l].sections.uid);

                  //console.log(root.body[i].items[l].sections);
              }

        }
        if(o.slice_type == "case_study_grid"){


          o.uids = [];

          let grid_type = root.body[i].primary.grid_type;

            o.type = grid_type;

                      for(let l=0;l<root.body[i].items.length;l++){

            o.uids.push(root.body[i].items[l].casestudy.uid);

          }




    }






        if(  o.slice_type == "large_paragraph"){

          o.copy  = PrismicReact.RichText.render(root.body[i].primary.paragraph, this.props.prismicCtx.linkResolver);

        }

          if( o.slice_type == "large_title"){
                //o.copy = root.body[i].primary.paragraph[0].text;
                //console.log(root.body[i].primary.title[0].text);
                o.copy = root.body[i].primary.title[0].text;
                o.title = root.body[i].primary.section_title[0].text;
          }

            if( o.slice_type == "our_process"){
              o.image =root.body[i].primary.image.url;


              o.image_width =  root.body[i].primary.image.dimensions.width;
              o.image_height = root.body[i].primary.image.dimensions.height;
              o.aspect_ratio = o.image_width / o.image_height ;

            }

            if( o.slice_type == "instagram"){
                o.title = root.body[i].primary.title[0].text;



                o.image =root.body[i].primary.image.url;


                o.image_width =  root.body[i].primary.image.dimensions.width;
                o.image_height = root.body[i].primary.image.dimensions.height;
                o.aspect_ratio = o.image_width / o.image_height ;



            }


            if( o.slice_type == "people"){






                o.people = []



                for(let k=0;k<root.body[i].items.length;k++){
                  let person = {}
                    console.log(root.body[i].items[k]);
                    person.name = root.body[i].items[k].name[0].text;
                    person.title = root.body[i].items[k].title[0].text;

                    person.img = root.body[i].items[k].staff;

                      o.people.push(person);

                }






            }


          if( o.slice_type == "content_section"){


              o.copy  = PrismicReact.RichText.render(root.body[i].primary.copy, this.props.prismicCtx.linkResolver);
              o.title = root.body[i].primary.section_title[0].text;

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






        cs_modules.push(o);

      }


    let to_render = [];
    for(var i=0;i<cs_modules.length;i++){


        if(cs_modules[i].slice_type  == "our_process"){

        to_render.push(<Map image={cs_modules[i].image} image_width={cs_modules[i].image_width} image_height={cs_modules[i].image_height} aspect_ratio={cs_modules[i].aspect_ratio}/>)


        }

        if(cs_modules[i].slice_type  == "people"){

        to_render.push(<div className="container-fluid no-gutters">
        <div className="col-md-10 offset-md-1">
        <People people={cs_modules[i].people}  />
        </div>

        </div>
      )


        }

        if(cs_modules[i].slice_type  == "instagram"){

        to_render.push(<Instagram title={cs_modules[i].title} image={cs_modules[i].image} image_width={cs_modules[i].image_width} image_height={cs_modules[i].image_height} aspect_ratio={cs_modules[i].aspect_ratio}/>)


        }

        if(cs_modules[i].slice_type  == "grid_of_images"){
          to_render.push(
            <div className="container-fluid no-gutters">
              <div className="col-md-10 offset-md-1">
              <ImageGrid images={cs_modules[i].images} grid_type={cs_modules[i].grid_type}/>
            </div>
              </div>

      )


        }


        if(cs_modules[i].slice_type  == "content_section"){


            to_render.push(

              <div className="container-fluid">


              <LargeParagraphTitle copy={cs_modules[i].copy} title={cs_modules[i].title}/>


                </div>



    )




        }









    }






    return(
      <div>
          <Menu ui_color={ui_color}/>

          <div>

            <HeroPhoto intro_font_color={'black'} copy={hero_copy} aspect_ratio={hero_aspect_ratio} image={hero_image}/>

            {to_render}

          </div>
          <div className="container-fluid no-gutters">
            <div className="col-md-10 offset-md-1">
              <Footer/>
              </div>
          </div>
      </div>
    );



// end if




 } else if (this.state.notFound) {
   return <NotFound />;
 }
 return   (    <div/>)

  }
}
