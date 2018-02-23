import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Intro.css'
/**
 * This is a quote component used on the case study page
 */
class Tag extends Component {
  
  
  
  render() {
  
      
    return (





  
      <div className="intro">



        {this.props.copy}


      </div>


    );
  }
}
/** @component */
export default Tag;
