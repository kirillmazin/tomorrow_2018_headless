import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
class ImageGridTwoImages extends Component {



  render() {
      const aspect_ratio = .9;
      const imageVertical_1 = {backgroundImage: "url(" + this.props.images[0].url + ")"}
      const imageVertical_2 = {backgroundImage: "url(" + this.props.images[1].url + ")"}

      const image_height_1 = {

        'paddingTop': 100/this.props.images[0].aspect_ratio+'%',
         display:'block'
      }


      const image_height_2 = {

        'paddingTop': 100/this.props.images[1].aspect_ratio+'%',
         display:'block'
      }
/*
      const image_height_1 = {

        'paddingTop': 100/aspect_ratio+'%',
         display:'block'
      }


      const image_height_2 = {

        'paddingTop': 100/aspect_ratio+'%',
         display:'block'
      }

    */

    return (












    <div class="image-grid component-margin row no-gutters">


  <Reveal effect="fadeInUpCustom">





            <div className="col-sm-12 col-md-6  shift-bottom-200">


              <div className="image-tile" style={image_height_1}>
                  <div className="image" style={imageVertical_1}>
                        <img src={this.props.images[0].url} />
                  </div>
              </div>


          </div>



            <div className="col-sm-12 col-md-6">

              <div className="image-tile" style={image_height_2}>
                  <div className="image" style={imageVertical_2} >
                          <img src={this.props.images[1].url} />
                  </div>
              </div>

          
          </div>
</Reveal>

    </div>




    );
  }
}

export default ImageGridTwoImages;
