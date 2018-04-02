import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
class IntroCopy extends Component {



  render() {
    const effect = "slideInUpCustom";

    return (





          <div>

            <div className="intro-copy-margin">
              {this.props.copy}

            </div>
          </div>




    );
  }
}

export default IntroCopy;
