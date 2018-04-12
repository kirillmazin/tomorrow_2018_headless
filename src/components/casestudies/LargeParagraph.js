import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
class LargeParagraph extends Component {



  render() {
    const effect = "slideInUpCustom";
    return (




      <div className="row no-gutters comp component-margin">


        <Reveal effect="fadeInUpCustom">
          <div className="large-paragraph col-lg-8 offset-lg-3">

              <p>
                  {this.props.copy}
              </p>

              </div>
        </Reveal>

      </div>


    );
  }
}

export default LargeParagraph;
