import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class ImageGridTwoImagesHorizontal extends Component {



  render() {





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

    return (






      <div class="image-grid component-margin no-gutters">
        <Fade bottom>


      <div className="row">
            <div className="col-sm-12 col-md-10">
              <div className="image-tile"  style={image_height_1}>
                <div className="image" style={imageVertical_1}></div>
            </div>
            </div>
      </div>

          <div className="row justify-content-end">
              <div className="col-sm-12 col-md-10">
                <div className="image-tile" style={image_height_2}>
                  <div className="image" style={imageVertical_2}></div>
                </div>
             </div>
        </div>




        </Fade>


      </div>



    );
  }
}

export default ImageGridTwoImagesHorizontal;
