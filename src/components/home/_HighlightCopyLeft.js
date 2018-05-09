import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'


import arrow from '../../imgs/ui/arrow-blue.svg';
class HighlightCopyLeft extends Component {



  render() {
    const effect = "slideInUpCustom";

    return (





          <div className="col-lg-8 offset-lg-1">

            <div className="highlight-margin">
              {this.props.copy}
            </div>
          </div>




    );
  }
}

export default HighlightCopyLeft;
