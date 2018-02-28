import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class ImageGridThreeImages extends Component {



  render() {
      const aspect_ratio = .9;
      const imageVertical_1 = {backgroundImage: "url(" + this.props.images[0].url + ")"}
      const imageVertical_2 = {backgroundImage: "url(" + this.props.images[1].url + ")"}
  /*    const imageVertical_3 = {backgroundImage: "url(" + this.props.images[2].url + ")"}

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












    <div class="image-grid component-margin">


  <Fade bottom>


        <div className="row no-gutters">


            <div className="col-sm-12 col-md-6  shift-bottom-200">


              <div className="image-tile" style={image_height_1}>
                  <div className="image" style={imageVertical_1}> </div>
              </div>


          </div>



            <div className="col-sm-12 col-md-6">


              <div className="image-tile" style={image_height_2}>
                  <div className="image" style={imageVertical_2} ></div>
              </div>


              </div>
          </div>
          <div className="row no-gutters  justify-content-end">
          <div className="col-sm-12 col-md-6">


            <div className="image-tile" style={image_height_2}>
                <div className="image" style={imageVertical_2} ></div>
            </div>


            </div>
          </div>




</Fade>




    </div>


    );
  }
}

export default ImageGridThreeImages;
