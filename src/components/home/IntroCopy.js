import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'

class IntroCopy extends Component {



  render() {
    const effect = "slideInUpCustom";

    return (






            <div className="col-12 col-sm-10 col-md-8 offset-lg-1 col-lg-8 col-xl-6 no-gutters">
            <div className="intro-copy-margin">
              <p>{this.props.copy}</p>

            </div>
            </div>





    );
  }
}

export default IntroCopy;
