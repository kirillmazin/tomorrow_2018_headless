import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class ImageGridThreeImages extends Component {



  render() {
      const right = {alignSelf: "flex-end"};
      const animation = "slideInUp";
      const animateOnce = "true";
      const imageVertical_1 = {backgroundImage: "url(" + this.props.images[0] + ")"}
      const imageVertical_2 = {backgroundImage: "url(" + this.props.images[1] + ")"}
      const imageVertical_3 = {backgroundImage: "url(" + this.props.images[2] + ")"}

    return (






      <div className="image-grid component-margin">




          <div className="row no-gutters row_1">


                    <div className="image_tile_left col-6">
                        <ScrollAnimation animateIn={animation} animateOnce={animateOnce}>
                              <div className="image-vertical left-image">
                                  <div className="image-source" style={imageVertical_1}></div>
                              </div>
                            </ScrollAnimation>
                            </div>



                      <div className="image_tile col-6">
                        <ScrollAnimation animateIn={animation} animateOnce={animateOnce}>
                              <div className="image-vertical">
                                <div className="image-source" style={imageVertical_2}></div>
                            </div>
                          </ScrollAnimation>
                     </div>

              </div>

              <div className="row no-gutters">
                  <div className="image_tile col-6 offset-6">
                    <ScrollAnimation animateIn={animation} animateOnce={animateOnce}>
                      <div className="image-vertical">
                          <div className="image-source" style={imageVertical_3}></div>
                      </div>
                    </ScrollAnimation>
                    </div>
                </div>



      </div>


    );
  }
}

export default ImageGridThreeImages;
