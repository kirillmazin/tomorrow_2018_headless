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


          <Fade bottom>
          <div className="no-gutters row">
      <div className="col-md-10 col-lg-8 col-xl-8 component-margin">

        <p className="quote">

            {this.props.copy}
        </p>

      </div>
      </div>
</Fade>

    );
  }
}
/** @component */
export default Quote;
