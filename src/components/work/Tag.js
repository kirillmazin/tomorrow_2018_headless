import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

/**
 * This is a quote component used on the case study page
 */
class Tag extends Component {
  
  
  
  render() {
  
      
    return (





  
      <div className="tag" onClick={this.props.onClick}>



        {this.props.copy}


      </div>


    );
  }
}
/** @component */
export default Tag;
