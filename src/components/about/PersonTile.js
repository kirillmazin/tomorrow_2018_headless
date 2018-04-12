import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
class PersonTile extends Component {

  render(props) {


    const style = {

        backgroundImage: "url(" + this.props.image + ")"





    }


    const a_r = this.props.data.img.dimensions.width/this.props.data.img.dimensions.height;
    const image_height = {
      border:'0px solid red',
      'paddingTop': 100/a_r+'%',
       display:'block'
    }



    return (




      <div className="col-md-6 col-lg-4 person_tile pr-md-4">
        <Reveal effect="fadeInUpCustom">
          <div className="large-image" style={image_height}>











            <div class="image" style={style}>

                  <img src={this.props.data.img.url} />
                </div>
        </div>

          </Reveal>

              <Reveal effect="fadeInUpCustom">
              <div className="staff_name">
              {this.props.data.name}
              </div>

                <div className="staff_title">{this.props.data.title}</div>

                </Reveal>




    </div>


    );
  }
}

export default PersonTile;
