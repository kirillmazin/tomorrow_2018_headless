import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Fade from 'react-reveal/Fade';
/**
 * This is a quote component used on the case study page
 */
class Quote extends Component {
  render() {
    return (



      
      <div className="no-gutters col-md-10 col-lg-8 col-xl-8 component-margin">
      <Fade bottom>
        <p className="quote">

            {this.props.copy}
        </p>
</Fade>
      </div>
      

    );
  }
}
/** @component */
export default Quote;
