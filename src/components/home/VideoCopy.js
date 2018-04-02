import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { BrowserRouter as Router,Link} from 'react-router-dom';
/**
 * This is a quote component used on the case study page
 */
class VideoCopy extends Component {



  render() {


    return (





<Reveal effect="fadeInUpCustom">
      <p>



    {this.props.copy}


      </p>
</Reveal>

    );
  }
}
/** @component */
export default VideoCopy;
