import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal'
/**
 * This is a quote component used on the case study page
 */
class Loading extends Component {
  render() {


    return (


            <Reveal effect="fadeInUpCustom">
        <div className="loading">
        <div className="gradient-circle-red"></div>
        <div className="gradient-circle-pink"></div>
            <div className="white-circle"></div>

      </div>
</Reveal>

    );
  }
}
/** @component */
export default Loading;
