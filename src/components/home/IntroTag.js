import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';


import Arrow from '../../imgs/ui/arrow-white.svg';
/**
 * This is a quote component used on the case study page
 */


class Tag extends Component {





  render() {



    return (








      <div className="intro-categories col-lg-10 offset-lg-1" style={this.props.style} >


          <Reveal effect="fadeInUpCustom">
                    <div className="intro-category" style={this.props.line_style}>

                      <div className="row no-gutters">



                          <div className="categories-copy col-sm-6 col-md-7 col-lg-8 col-xl-8">
                              <p className="category">{this.props.copy}</p>
                              <p className="category-description" style={this.props.description_style}>{this.props.description}</p>
                              <p className="category-description-mobile">{this.props.description}</p>
                          </div>

                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-4">
                            <div className="category-image">
                                <img src={this.props.image.url} />
                            </div>
                        </div>


                      </div>

                  </div>


                  </Reveal>
    </div>



    );
  }
}
/** @component */
export default Tag;
