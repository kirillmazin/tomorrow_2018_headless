import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
/**
 * This is a quote component used on the case study page
 */
class Quote extends Component {
  render() {
    return (




      <ScrollAnimation animateIn="slideInUp" animateOnce="true">
      <div className="no-gutters quote col-md-10 col-lg-8 col-xl-8 component-margin">

        <p>

            {this.props.copy}
        </p>

      </div>
      </ScrollAnimation>

    );
  }
}
/** @component */
export default Quote;
