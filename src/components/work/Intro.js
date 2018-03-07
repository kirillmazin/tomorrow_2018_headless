import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
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




      <div className="intro">

      <Parallax
    data={{
      'data-top-bottom':'transform: translate(0, -300px); opacity: 0;',
      'data-top-center':'transform: translate(0, 0px); opacity: 1;',
      'data-center-bottom':'transform: translate(0, 0px); opacity: 1;transition:all 1s;'

    }}
  >
 <Fade bottom>

         <p style={intro_font_color}>{this.props.introtext}</p>
</Fade>
</Parallax>
       </div>




    );
  }
}
/** @component */
export default Tag;
