import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';


import Arrow from '../../imgs/ui/arrow-white.svg';
/**
 * This is a quote component used on the case study page
 */

const red = "#FC7164";

class Tag extends Component {


  constructor(props) {
    super(props);

    this.state = {
        tile_size:{},
        line_style:{

            borderTop:"1px solid #CECFCA",
            color:"#CECFCA"
        },
        description_style: {
          opacity:0,
          transform: "translateY(30px)"
        },

    };
  }

  onMouseEnter(){

    this.setState({
      tile_size : {border:"0px solid red", transform: 'scale(1.05)', transition: 'all 500ms'},
      line_style:{

        borderTop:"1px solid " + red,
        color:red
      },
      description_style: {
          opacity:1,
          transform: "translateY(0)"
      },
      description_style_mobile: {
          color:red

      }

    })
  }

  onMouseLeave(){

    this.setState({
      tile_size : {border:"0px solid red", transform: 'scale(1)', transition: 'all 500ms'},
      line_style:{

          borderTop:"1px solid #CECFCA",
          color:"#CECFCA"
      },
      description_style: {
          opacity:0,
          transform: "translateY(30px)"
      },
      description_style_mobile: {
          color:"#CECFCA"

      }

    })
  }

  render() {



    return (








      <div className="intro-categories col-lg-10 offset-lg-1 "  onMouseEnter={()=> this.onMouseEnter()} onMouseLeave={()=> this.onMouseLeave()}>


          <Reveal effect="fadeInUpCustom">
                    <div className="intro-category" style={this.state.line_style}>

                      <div className="row no-gutters " >



                          <div className="categories-copy col-sm-6 col-md-7 col-lg-8 col-xl-8">
                              <p className="category">{this.props.copy}</p>
                              <p className="category-description" style={this.state.description_style}>{this.props.description}</p>
                              <p className="category-description-mobile" style={this.state.description_style_mobile}>{this.props.description}</p>
                          </div>

                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-4">
                            <div className="category-image">
                                <img src={this.props.image.url} style={this.state.tile_size}/>
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
