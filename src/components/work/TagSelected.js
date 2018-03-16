import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Tag.css'
/**
 * This is a quote component used on the case study page
 */
class TagSelected extends Component {



  render() {


    return (






      <div className="tag selected">



            <i>{this.props.copy}</i>


      </div>


    );
  }
}
/** @component */
export default TagSelected;
