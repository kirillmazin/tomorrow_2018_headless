import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
class LargeParagraphTitle extends Component {



  render() {
    const effect = "slideInUpCustom";
    return (




      <div className="comp component-margin">

        <div className="row no-gutters ">
        <Reveal effect="fadeInUpCustom">
          <div className="large-paragraph col-lg-7 offset-lg-4">dd
              <h3>{this.props.title}</h3>
              <p>
                  {this.props.copy}
              </p>

              </div>
        </Reveal>
        </div>
      </div>


    );
  }
}

export default LargeParagraphTitle;
