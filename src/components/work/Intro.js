import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import { ParallaxProvider, Parallax } from 'react-skrollr'
/**
 * This is a quote component used on the case study page
 */
class Tag extends Component {



  render() {
    const intro_font_color = {

      color: this.props.intro_font_color
    }

    return (





        <div className="col-12 col-md-10 no-gutters">
          <div className="intro">
      <Reveal effect="fadeInUpCustom">
          <p style={intro_font_color}>{this.props.introtext}</p>
         </Reveal>

       </div>
       </div>



    );
  }
}
/** @component */
export default Tag;
