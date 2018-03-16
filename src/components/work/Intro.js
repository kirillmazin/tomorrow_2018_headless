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




      <div className="intro col-sm-12 col-md-10 col-xl-8">

      <Parallax
    data={{
      'data-top-bottom':'transform: translate(0, -40%); opacity: 1;',
      'data-top-center':'transform: translate(0, 0px); opacity: 1;',
      'data-center-bottom':'transform: translate(0, 0px); opacity: 1; transition: all 500ms'

    }}
  >
      <Reveal effect="fadeInUpCustom">
          <p style={intro_font_color}>{this.props.introtext}</p>
         </Reveal>
</Parallax>
       </div>




    );
  }
}
/** @component */
export default Tag;
