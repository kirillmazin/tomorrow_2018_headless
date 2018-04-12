import React, { Component } from 'react';
import styles from '../../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
class ImageGridTwoImagesVertical extends Component {



  render() {
      const right = {alignSelf: "flex-end"};
      const imageHorizontal = {backgroundImage: "url(" + this.props.images[1] + ")"}
      const imageVertical = {backgroundImage: "url(" + this.props.images[0] + ")"}
      const animation = "slideInUp";
      const animateOnce = "true";

      const style = {

          backgroundImage: "url(" + this.props.image + ")",




      }
    return (






      <div className="image-grid component-margin ">

          <div className="row no-gutters col-lg-10 offset-lg-2">


            <div className="image-horizontal">
                <div className="image-source" style={imageHorizontal}>
                    <img src="this.props.images[1]" />
                </div>
            </div>



        </div>


          <div className="row no-gutters col-lg-6">


            <div className="image-vertical">
                <div className="image-source" style={imageVertical}>
                      <img src="this.props.images[0]" />
                </div>
            </div>


        </div>

      </div>



    );
  }
}

export default ImageGridTwoImagesVertical;
