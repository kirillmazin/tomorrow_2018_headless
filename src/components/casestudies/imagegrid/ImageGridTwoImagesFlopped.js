import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class ImageGridTwoImagesFlopped extends Component {



  render() {
      const aspect_ratio = .9;
      const imageVertical_1 = {backgroundImage: "url(" + this.props.images[0].url + ")"}
      const imageVertical_2 = {backgroundImage: "url(" + this.props.images[1].url + ")"}
/*
      const image_height_1 = {

        'paddingTop': 100/this.props.images[0].aspect_ratio+'%',
         display:'block'
      }


      const image_height_2 = {

        'paddingTop': 100/this.props.images[1].aspect_ratio+'%',
         display:'block'
      }
*/
      const image_height_1 = {

        'paddingTop': 100/aspect_ratio+'%',
         display:'block'
      }


      const image_height_2 = {

        'paddingTop': 100/aspect_ratio+'%',
         display:'block'
      }






    return (






      <div className="image-grid component-margin row no-gutters">


    <Fade bottom>





              <div className="col-sm-12 col-md-6">


                <div className="image-tile" style={image_height_1}>
                    <div className="image" style={imageVertical_1}> ></div>
                </div>


            </div>



              <div className="col-sm-12 col-md-6 shift-bottom-200">


                <div className="image-tile" style={image_height_2}>
                    <div className="image" style={imageVertical_2} ></div>
                </div>


            </div>
        
</Fade>
      </div>


    );
  }
}

export default ImageGridTwoImagesFlopped;
