import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'

class LargeParagraph extends Component {



  render() {
    const effect = "slideInUpCustom";
    return (




      <div className="row no-gutters comp component-margin">



          <div className="large-paragraph col-lg-7 offset-lg-4">
            <ScrollAnimation animateIn={effect} animateOnce="true"  offset={0}>
              <p >
                  {this.props.copy}
              </p>
              </ScrollAnimation>
              </div>







      </div>


    );
  }
}

export default LargeParagraph;
