import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
/**
 * This is a quote component used on the case study page
 */
class Quote extends Component {
  render() {
  

    let attribution_title = (this.props.copy.attribution_title[0] != undefined) ? this.props.copy.attribution_title[0].text : "";
    let name = (this.props.copy.name[0] != undefined) ? this.props.copy.name[0].text : "";
    let quote = (this.props.copy.quote[0] != undefined) ? this.props.copy.quote[0].text : "";

    return (


            <Reveal effect="fadeInUpCustom">
          <div className="no-gutters row component-margin">
      <div className="col-md-12 col-lg-10 col-xl-9 quote-component">

        <p className="quote">

            {quote}
        </p>
        <p className="name">
          {name}
        </p>

        <p className="title">
          {attribution_title}
        </p>

      </div>
      </div>
</Reveal>

    );
  }
}
/** @component */
export default Quote;
