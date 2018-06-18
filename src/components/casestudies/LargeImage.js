import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import BrowserTopFrame from '../_globals/Browser_top_frame.js';

class LargeImage extends Component {
  getFrame(frame){
      let w_frame = '';

    if(frame === 'yes'){
        w_frame = BrowserTopFrame;

        }
      return w_frame;

  }
  render(props) {


    const style = {

        backgroundImage: "url(" + this.props.image + ")"





    }


    const image_height = {
      border:'0px solid red',
      'paddingTop': 100/this.props.aspect_ratio+'%',
       display:'block'
    }

    let width_type;

    if(this.props.width_type == "full"){
        width_type = "col-12 no-gutters";

    } else if(this.props.width_type == "three_quarters_left"){
        width_type = "col-lg-9 no-gutters";
    }
    else if(this.props.width_type == "three_quarters_right"){
        width_type = "col-lg-9 offset-lg-3 no-gutters";
    }

    else if(this.props.width_type == "half_right"){
        width_type = "col-lg-6 no-gutters";
    }

    else if(this.props.width_type == "half_left"){
        width_type = "col-lg-6 offset-lg-6 no-gutters";
    }




    return (




      <div className="component-margin">

        <div className="row">
              <Reveal effect="fadeInUpCustom">

                <div className={width_type}>
                  {this.getFrame(this.props.website_frame)}
                {/*  <div className="browser-frame browser-frame browser-ui-color">
                    <div className="row no-gutters ">
                      <div className="col-1"><img src={BrowserCorner}/></div>
                      <div className="col-10"></div>
                      <div className="col-1"></div>
                    </div>
                    </div>*/}
                  <div className="large-image" style={image_height}>

              <div className="image" style={style}>

                  <img src={this.props.image} />
              </div>
              </div>
              </div>

              </Reveal>
            </div>
    </div>


    );
  }
}

export default LargeImage;
