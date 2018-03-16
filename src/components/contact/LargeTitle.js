import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
/**
 * This is a quote component used on the case study page
 */
class LargeTitle extends Component {
  render() {
    return (


            <Reveal effect="fadeInUpCustom">
          <div className="no-gutters row">
      <div className="col-md-10 col-lg-5 col-xl-5">

        <p className="large-title">

            {this.props.copy}
        </p>

      </div>
      </div>
</Reveal>

    );
  }
}
/** @component */
export default LargeTitle;
