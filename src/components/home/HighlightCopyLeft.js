import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
class HighlightCopyLeft extends Component {



  render() {
    const effect = "slideInUpCustom";

    return (





          <div className="col-lg-6 offset-lg-1 border">

            <div className="highlight-margin">
              {this.props.copy}

            </div>
          </div>




    );
  }
}

export default HighlightCopyLeft;
