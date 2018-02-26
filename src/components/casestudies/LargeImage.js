import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
class LargeImage extends Component {

  render(props) {

  
    const style = {

        backgroundImage: "url(" + this.props.image + ")"





    }

    const image_height = {
      border:'0px solid red',
      'paddingTop': 100/this.props.aspect_ratio+'%',
       display:'block'
    }


    return (




      <div className="component-margin">


            <Fade bottom cascade>
            <div className="large-image" style={image_height}>



              <div class="image" style={style}></div>


            </div>
            </Fade>

    </div>


    );
  }
}

export default LargeImage;
