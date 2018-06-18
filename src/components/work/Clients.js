import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import Slider from "react-slick";

/**
 * This is a quote component used on the case study page
 */



 function SampleNextArrow(props) {

   console.log(props)
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "block" }}
       onClick={onClick}
     />
   );
 }

 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;
   return (
     <div
       className={className}
       style={{ ...style, display: "block" }}
       onClick={onClick}
     />
   );
 }



class Clients extends Component {


  getImages(images){
    let all_images = [];
    let background_image = {};


    for(let i=0;i<images.length;i++){

      background_image = {
          backgroundImage: "url(" + images[i].client_logo + ")",



      }

    all_images.push(<div><div className="client-logo" style={background_image}></div></div>);
  }
  return all_images;
  }




  getImage(image){
    let all_images = [];
    let background_image = {};




      background_image = {
          backgroundImage: "url(" + image.client_logo + ")",



      }



  return <div>><div className="client-logo" style={background_image}></div></div>;
  }


  render() {


    const intro_font_color = {

      color: this.props.intro_font_color
    }
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,


      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,



          }
        }
      ]
    };
    return (




      <div className="work-clients component-margin-clients">
<Reveal effect="fadeInUpCustom">
  <h2><i>{this.props.title}</i></h2>
    <div className="white-block">
    <div className="block-margin">
      <Slider {...settings}>
          {this.getImages(this.props.images)}
        </Slider>
   </div>
   </div>


   </Reveal>
       </div>




    );
  }
}
/** @component */
export default Clients;
