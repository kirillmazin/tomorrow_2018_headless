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
    console.log("WIDTH TYPE " + this.props.width_type);
    let width_type;

    if(this.props.width_type == "full"){
        width_type = "col-12";

    } else if(this.props.width_type == "three_quarters_left"){
        width_type = "col-lg-9";
    }
    else if(this.props.width_type == "three_quarters_right"){
        width_type = "col-lg-9 offset-lg-3";
    }

    else if(this.props.width_type == "half_right"){
        width_type = "col-lg-6";
    }

    else if(this.props.width_type == "half_left"){
        width_type = "col-lg-6 offset-lg-6";
    }


    return (




      <div className="component-margin">


              <Reveal effect="fadeInUpCustom">
                <div className="row no-gutters">
                <div className={width_type}>
                  <div className="large-image" style={image_height}>

              <div className="image" style={style}>

                  <img src={this.props.image} />
              </div>
              </div>
              </div>
            </div>
              </Reveal>

    </div>


    );
  }
}

export default LargeImage;
