import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';

import Slider from 'react-slick';
import RecognitionBlock from './RecognitionBlock';






class Recognition extends Component {


  getImages(images){
    let all_images = [];




    for(let i=0;i<images.length;i++){



    all_images.push(

      <RecognitionBlock background_image={images[i].award_logo} description={images[i].award_description} link={images[i].link}/>
    );
  }
  return all_images;
  }









  render() {



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




      <div className="work-clients component-margin-recognition">


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
export default Recognition;
