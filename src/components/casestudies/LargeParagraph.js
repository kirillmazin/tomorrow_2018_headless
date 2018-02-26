import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Fade from 'react-reveal/Fade';


class LargeParagraph extends Component {



  render() {
    const effect = "slideInUpCustom";
    return (




      <div className="row no-gutters comp component-margin">


        <Fade bottom cascade>
          <div className="large-paragraph col-lg-7 offset-lg-4">
            
              <p>
                  {this.props.copy}
              </p>
              
              </div>
        </Fade>
      </div>


    );
  }
}

export default LargeParagraph;
