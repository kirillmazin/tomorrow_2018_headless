import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
class IntroCopy extends Component {



  render() {
    const effect = "slideInUpCustom";

    return (





          <div className="row">
            <div className="col-sm-10 col-md-8 offset-lg-1 col-lg-7 col-xl-6">
            <div className="intro-copy-margin">
              <p>{this.props.copy}</p>

            </div>
            </div>
          </div>




    );
  }
}

export default IntroCopy;
