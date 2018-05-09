import React, { Component } from 'react';

import $ from 'jquery';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { Link} from 'react-router-dom'
class PersonTile extends Component {

  constructor(props) {
    super(props);

    this.state = {

    tile_size : {transform: 'scale(1)', transition: 'all 500ms'}

    };





  }

  onMouseEnter(){
    let b_w = $(window).width();


    this.setState({
      tile_size : {border:"0px solid red",transform: 'scale(1.05)', transition: 'all 500ms'},
      name_underline: {  backgroundSize: "100% 100%"}
    })


  }

  onMouseleave(){
    let b_w = $(window).width();

    this.setState({
      tile_size : {border:"0px solid red",transform: 'scale(1)', transition: 'all 500ms'},

      name_underline: {  backgroundSize: "0% 100%"}
    })


  }
  render(props) {


    const style = {

        backgroundImage: "url(" + this.props.image + ")",






    }



    const a_r = this.props.data.img.dimensions.width/this.props.data.img.dimensions.height;
    const image_height = {
      border:'0px solid red',
      'paddingTop': 100/a_r+'%',
       display:'block',
       overflow: 'hidden'

    }

    const link = "../people/"+ this.props.data.profile_link;

    return (




      <div className="col-md-6 col-lg-4 person_tile pr-md-4">


        <Link to={link}>

  <Fade>
            <div onMouseEnter={()=>this.onMouseEnter()}  onMouseLeave={()=>this.onMouseleave()}>
          <div className="large-image" style={image_height} >











            <div class="image" style={style} style={this.state.tile_size}>

                  <img src={this.props.data.img.url} />
                </div>
        </div>
</div>



              <div className="staff_name" >
            <i style={this.state.name_underline}>  {this.props.data.name}</i>
              </div>

                <div className="staff_title">{this.props.data.title}</div>



  </Fade>

                </Link>

    </div>


    );
  }
}

export default PersonTile;
