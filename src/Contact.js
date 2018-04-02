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
import Intro from './components/work/Intro';
import IntroParagraph from './components/contact/IntroParagraph';
import Footer from './components/_globals/Footer';
import Interview from './components/casestudies/Interview';
import ImageGrid from './components/casestudies/ImageGrid';
import Menu from './components/_globals/Menu.js';
import Loading from './components/_globals/Loading.js';
import Research from './components/casestudies/Research';
import Website from './components/casestudies/Website';
import $ from 'jquery';

// Declare your component
export default class Contact extends React.Component {



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


      console.log(this.state.doc.results[0].data.hero_description);

      let hero_copy = PrismicReact.RichText.render(this.state.doc.results[0].data.hero_description, this.props.prismicCtx.linkResolver);
      //PrismicReact.RichText.render(this.state.doc.data.your_description_field_id, this.props.prismicCtx.linkResolver)



      //let desc =
      this.state.background_color = hero_color;
      console.log(root);
      console.log(hero_color);


        this.state.header_style = {
          backgroundColor:hero_color}

          this.state.contact_band_color={background: `linear-gradient(${hero_color}, ${hero_color})`,
          "backgroundSize":"1px 100px",
          "backgroundRepeat":"repeat-x"
        }

    //  const subtitle = this.state.doc.data.subtitle[0].text;
    //  const title = this.state.doc.data.title[0].text;
    //  const hero_image = this.state.doc.data.hero_image.url;






      for(var i=0; i<root.body.length;i++){

        let slice_type = root.body[i].slice_type;
        let o = {};

        o.slice_type = slice_type;


        console.log(" slice type " + o.slice_type)




        if(o.slice_type == "map"){
            console.log(root.body[i].primary.image.url)
            o.image = root.body[i].primary.image.url
            o.image_width =  root.body[i].primary.image.dimensions.width;
            o.image_height = root.body[i].primary.image.dimensions.height;
            o.aspect_ratio = o.image_width / o.image_height ;
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
        if(cs_modules[i].slice_type  == "large_paragraph"){
          to_render.push(<LargeParagraph copy={cs_modules[i].copy}/>)



        }

          if(cs_modules[i].slice_type  == "large_title"){
            to_render.push(<LargeTitle copy={cs_modules[i].copy}/>)

          }

          if(cs_modules[i].slice_type  == "grid_of_images"){
            to_render.push(<ImageGrid images={cs_modules[i].images} grid_type={cs_modules[i].grid_type}/>)


          }

          if(cs_modules[i].slice_type == "map"){

            to_render.push(<Map image={cs_modules[i].image} image_width={cs_modules[i].image_width} image_height={cs_modules[i].image_height} aspect_ratio={cs_modules[i].aspect_ratio}/>)

          }











    }






    return(
      <div>
          <Menu/>

          <div className="workheader" ref={el => this.el = el}>

          <div className="container-fluid no-gutters header-color" ref={el => this.header_color = el} style={this.state.header_style}>

            <div className="col-md-12 col-lg-10 offset-lg-1 ">

                <Intro className="intro" introtext={my_text} intro_font_color={this.props.intro_font_color} />
                  <IntroParagraph className="intro" introtext={hero_copy} intro_font_color={this.props.intro_font_color} />
            </div>
          </div>


      <div className="contact-band" style={this.state.contact_band_color}>


          <div className="container-fluid no-gutters" >
            <div className="col-sm-12 col-md-10 offset-md-1">
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
 return (    <Loading />)

  }
}
