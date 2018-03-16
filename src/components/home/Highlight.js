import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import HighlightCopyLeft from './HighlightCopyLeft'
import HighlightCopyRight from './HighlightCopyRight'

class Highlight extends Component {


  getHighlightAlignment(alignment){
    if(alignment == "Right"){
        return (
          <HighlightCopyLeft copy={this.props.copy}/>

        )

    } else {
      return (
        <HighlightCopyRight copy={this.props.copy}/>
      )

    }
  }

  render() {
    const effect = "slideInUpCustom";
    console.log(this.props.alignment);
    return (




      <div className="row no-gutters component-margin highlight">


        <Reveal effect="fadeInUpCustom">
          <div className="container-fluid no-margin">

          {this.getHighlightAlignment(this.props.alignment)}
          
        </div>
        </Reveal>

      </div>


    );
  }
}

export default Highlight;
