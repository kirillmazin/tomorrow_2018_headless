import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Tag.css'
/**
 * This is a quote component used on the case study page
 */
class TagSelected extends Component {
  
  
  
  render() {
      console.log(this.props.style);
      
    return (






      <div className="tag selected">



            {this.props.copy}


      </div>


    );
  }
}
/** @component */
export default TagSelected;
