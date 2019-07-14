import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';









import Footer from './components/_globals/Footer';
import ImageGrid from './components/casestudies/ImageGrid';
import Menu from './components/_globals/Menu.js';




import Video from './components/home/Video';
import Highlight from './components/home/Highlight';
import HighlightGovernment from './components/home/HighlightGovernment';

import Intro from './components/home/Intro';
import HomeLargeProjectTiles from './components/home/HomeLargeProjectTiles';


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

  //  this.$header_color = $(this.header_color );
      document.title = "Tomorrow Partners | Welcome to Tomorrow";






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


          Prismic.Predicates.any('document.type', ['homepage','casestudy']),{ pageSize : 25}


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
        let video_file;
        let video_overlay_height;
        let video_overlay_width;
        let video_overlay_a_r;
        let video_embed;
        let video_hero_mp4;
        let video_hero_webm;
      for(let i=0;i<this.state.doc.results.length;i++){


        if(this.state.doc.results[i].type == "casestudy"){
          let o = {};
          o.slice_type = "casestudy";
          o.thumbnail_image = this.state.doc.results[i].data.thumbnail_image.url;
          o.uid =this.state.doc.results[i].uid;
          o.data = this.state.doc.results[i].data;



          o.title = this.state.doc.results[i].data.title[0].text;

          o.subtitle =  this.state.doc.results[i].data.subtitle[0] != undefined ? this.state.doc.results[i].data.subtitle[0].text : '';






          all_case_studies.push(o);
        }

        if(this.state.doc.results[i].type == "homepage"){

          root = this.state.doc.results[i].data;


          ui_color = root.tomorrow_logo_color != null ? root.tomorrow_logo_color : "#ffffff";




          hero_video = root.hero_video;

          video_embed = root.video_embed;

         

          video_overlay_still = root.video_still.url;
          video_overlay_height = root.video_still.dimensions.height;
          video_overlay_width = root.video_still.dimensions.width;
          video_overlay_a_r =  root.video_still.dimensions.width/root.video_still.dimensions.height;
          video_hero_mp4 = root.hero_video_mp4.url;
          video_hero_webm = root.hero_video_webm.url;

     


          for(let i=0;i<root.video_overlay_copy.length;i++){

              video_overlay_copy.push(root.video_overlay_copy[i].phrase[0].text);
          }

        }






      }






      for(var i=0; i<root.body.length;i++){

        slice_type = root.body[i].slice_type;
        let o = {};
        o.images = []
        o.slice_type = slice_type;



        if(o.slice_type == "intro"){


            o.copy = PrismicReact.RichText.render(root.body[i].primary.copy, this.props.prismicCtx.linkResolver);



            o.links = [];
            o.images = [];
            o.descriptions = [];




              for(let l=0;l<root.body[i].items.length;l++){
                let img = {};





                o.links.push(root.body[i].items[l].sections.uid);
                o.descriptions.push(root.body[i].items[l].description[0].text);

                img.url = root.body[i].items[l].section_image.url;
                img.height = root.body[i].items[l].section_image.dimensions.height;
                img.width = root.body[i].items[l].section_image.dimensions.width;
                img.a_r = img.width/img.height;


                o.images.push(img);

              }

        }
        if(o.slice_type == "case_study_grid"){


          o.uids = [];
          o.key_service = [];
          o.feature_images = [];

          let grid_type = root.body[i].primary.grid_type;



          for(let l=0;l<root.body[i].items.length;l++){








            o.feature_images.push(root.body[i].items[l].feature_image.url);
            o.uids.push(root.body[i].items[l].casestudy.uid);
            o.key_service.push(root.body[i].items[l].key_service[0].text);


          }




    }

        if(o.slice_type == "case_study_highlight"){



            o.copy = PrismicReact.RichText.render(root.body[i].primary.copy, this.props.prismicCtx.linkResolver);
            o.alignment = root.body[i].primary.alignment;
            o.section_label = root.body[i].primary.section_link_label[0].text;

            o.section_link = root.body[i].primary.section_link;





            o.images = []
        for(let l=0;l<root.body[i].items.length;l++){

                let img_obj = {};




              o.image_width =  root.body[i].items[l].image.dimensions.width;
              o.image_height = root.body[i].items[l].image.dimensions.height;


              img_obj.url  =  root.body[i].items[l].image.url;
              img_obj.aspect_ratio = o.image_width / o.image_height;



              o.images.push(img_obj);

        }

        }

        if(o.slice_type == "government"){

            o.copy = PrismicReact.RichText.render(root.body[i].primary.copy, this.props.prismicCtx.linkResolver);
            o.alignment = root.body[i].primary.alignment;
            o.section_link = root.body[i].primary.section_link;

            o.section_label = root.body[i].primary.section_link_label[0].text;



                o.uids = []
            for(let l=0;l<root.body[i].items.length;l++){


              o.uids.push(root.body[i].items[l].casestudy.uid);

            }


        }



        if(  o.slice_type == "large_paragraph"){

          o.copy  = PrismicReact.RichText.render(root.body[i].primary.paragraph, this.props.prismicCtx.linkResolver);
       
        }

          if( o.slice_type == "large_title"){
              
                o.copy = root.body[i].primary.title[0].text;
          }









        cs_modules.push(o);

      }


    let to_render = [];
    for(var i=0;i<cs_modules.length;i++){
      if(cs_modules[i].slice_type  == "intro"){
       
        to_render.push(<Intro descriptions={cs_modules[i].descriptions} copy={cs_modules[i].copy} images={cs_modules[i].images} links={cs_modules[i].links}/>)



      }

      if(cs_modules[i].slice_type  == "case_study_grid"){




        to_render.push(<HomeLargeProjectTiles img={cs_modules[i].feature_images} key_service={cs_modules[i].key_service} projects={all_case_studies} to_display={cs_modules[i].uids}/>);



      }

        if(cs_modules[i].slice_type  == "case_study_highlight"){
       
          to_render.push(<Highlight section_link={cs_modules[i].section_link} section_label={cs_modules[i].section_label} copy={cs_modules[i].copy} alignment={cs_modules[i].alignment} images={cs_modules[i].images}/>)


         
        }



        if(cs_modules[i].slice_type  == "government"){
          
          to_render.push(<HighlightGovernment section_label={cs_modules[i].section_label} to_display={cs_modules[i].uids} projects={all_case_studies} section_link={cs_modules[i].section_link} copy={cs_modules[i].copy} alignment={cs_modules[i].alignment} images={cs_modules[i].images}/>)



        }









    }






    return(
      <div>
          <Menu ui_color={ui_color}/>

          <div>
            <Video video_hero_webm={video_hero_webm} video_hero_mp4={video_hero_mp4} video_file={video_file} video_embed={video_embed} still_image={video_overlay_still} intro_font_color={'black'} video_overlay_copy={video_overlay_copy} video_overlay_still={video_overlay_still} video={hero_video}/>
            {to_render}

          </div>
          <div className="container-fluid">
            <div className="col-lg-10 offset-lg-1 no-gutters">
              <Footer/>
              </div>
          </div>
      </div>
    );



// end if




 } else if (this.state.notFound) {
   return <NotFound />;
 }
 return   (

        <div/>
 )

  }
}
