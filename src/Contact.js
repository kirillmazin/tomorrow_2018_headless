import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import {RichText, Date} from 'prismic-reactjs';
import LargeParagraphTitle from './components/text/LargeParagraphTitle';
import Address from './components/contact/Address';
import Quote from './components/casestudies/Quote';
import LargeTitle from './components/contact/LargeTitle';
import JobPostings from './components/contact/JobPostings';
import Header from './components/casestudies/Header';
import Whatwedid from './components/casestudies/Whatwedid';

import Intro from './components/work/Intro';
import IntroParagraph from './components/contact/IntroParagraph';
import Footer from './components/_globals/Footer';
import Interview from './components/casestudies/Interview';
import ImageGrid from './components/casestudies/ImageGrid';
import Menu from './components/_globals/Menu.js';
import Loading from './components/_globals/Loading.js';
import Research from './components/casestudies/Research';
import Website from './components/casestudies/Website';
import HeroPhotoContact from './components/contact/HeroPhotoContact';
import MapSimple from './components/contact/MapSimpleClick';
import Reveal from 'react-reveal/Reveal'
import $ from 'jquery';
import {Helmet} from "react-helmet";
// Declare your component
export default class Contact extends React.Component {



  constructor(props){
    super(props);


    this.state = {
        visibility: this.props.visibility,
        doc: null,
        notFound: false,


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



      //document.title = "Tomorrow Partners | Contact";



  }
handleMarkerClick(){


    window.open( "https://www.google.com/maps?q=2332+5th+Street,+Berkeley,+CA+94710&hnear=2332+5th+St,+Berkeley,+California+94710&gl=us&t=m&z=16")
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


          Prismic.Predicates.any('document.type', ['contact'])


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
      let my_text = root.hero_title[0].text;
      let hero_color = root.hero_color;

      let hero_image = root.hero_image.url


      let hero_width  =  root.hero_image.dimensions.width;
      let hero_height = root.hero_image.dimensions.height;
      let hero_aspect_ratio = hero_width / hero_height;






      let hero_copy = PrismicReact.RichText.render(this.state.doc.results[0].data.hero_description, this.props.prismicCtx.linkResolver);
      //PrismicReact.RichText.render(this.state.doc.data.your_description_field_id, this.props.prismicCtx.linkResolver)



      //let desc =
      this.state.background_color = hero_color;



        this.state.header_style = {
          backgroundColor:hero_color}

          this.state.contact_band_color={
        }

    //  const subtitle = this.state.doc.data.subtitle[0].text;
    //  const title = this.state.doc.data.title[0].text;
    //  const hero_image = this.state.doc.data.hero_image.url;






      for(var i=0; i<root.body.length;i++){

        let slice_type = root.body[i].slice_type;
        let o = {};

        o.slice_type = slice_type;


              console.log(o.slice_type);




        if(o.slice_type == "map"){

            o.image = root.body[i].primary.image.url
            o.image_width =  root.body[i].primary.image.dimensions.width;
            o.image_height = root.body[i].primary.image.dimensions.height;
            o.aspect_ratio = o.image_width / o.image_height ;
        }

        if(o.slice_type == "open_positions"){



                o.open_positions = [];


                for(let l=0;l<root.body[i].items.length;l++){
                  let job = {};

                    job.title = root.body[i].items[l].job_title[0].text;
                    job.slug = root.body[i].items[l].job.slug;

                    o.open_positions.push(job);

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
          o.title = root.body[i].primary.title[0].text;



        }

        if(  o.slice_type == "address_"){



          o.copy  = PrismicReact.RichText.render(root.body[i].primary.paragraph, this.props.prismicCtx.linkResolver);
          o.title = root.body[i].primary.title[0].text;
          o.button_text = root.body[i].primary.buttontext[0].text;
          o.button_link = root.body[i].primary.button_link[0].text;



        }



          if( o.slice_type == "large_title"){

                o.copy = root.body[i].primary.title[0].text;
          }









        cs_modules.push(o);
      }


    let to_render = [];
    for(var i=0;i<cs_modules.length;i++){
        if(cs_modules[i].slice_type  == "large_paragraph"){
          to_render.push(<LargeParagraphTitle copy={cs_modules[i].copy} title={cs_modules[i].title}/>)



        }

        if(cs_modules[i].slice_type == "open_positions"){
      
          to_render.push(<JobPostings open_positions={cs_modules[i].open_positions}/>)
        }


          if(cs_modules[i].slice_type  == "address_"){
            to_render.push(<Address copy={cs_modules[i].copy} title={cs_modules[i].title}/>)

          }



          if(cs_modules[i].slice_type  == "grid_of_images"){
            to_render.push(<ImageGrid images={cs_modules[i].images} grid_type={cs_modules[i].grid_type}/>)


          }

          if(cs_modules[i].slice_type == "map"){


          

          }











    }






    return(
      <div>
        <Helmet>
            <title>Tomorrow Partners | Contact</title>
            <meta name="description" content="Let’s start a conversation about what we can do with you today." />
        </Helmet>
          <Menu/>
          <HeroPhotoContact intro_font_color={'black'} copy={my_text} introcopy={hero_copy} aspect_ratio={hero_aspect_ratio} image={hero_image} introtext={hero_copy}/>
          <div className="workheader" ref={el => this.el = el}>

          <div className="container-fluid" ref={el => this.header_color = el}>

            <div className="col-md-12 col-lg-10 offset-lg-1  no-gutters">





                {/**  <IntroParagraph className="intro" introtext={hero_copy} intro_font_color={this.props.intro_font_color} />*/}
            </div>
          </div>


      <div className="contact-band">


          <div className="container-fluid" >
            <div className="col-sm-12 col-md-10 offset-md-1 no-gutters">
            <div className="case-study-margin-wrapper">




              {to_render}
            <Footer/>
            </div>
            </div>
        </div>
      </div>
      </div>
      </div>
    );



// end if




 } else if (this.state.notFound) {
   return <NotFound />;
 }
 return (     <div/>   )

  }
}
