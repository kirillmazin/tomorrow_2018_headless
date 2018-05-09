import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { Link} from 'react-router-dom'
class PersonTileNoBio extends Component {

  constructor(props) {
    super(props);

    this.state = {

    tile_size : {transform: 'scale(1)', transition: 'all 500ms'}

    };





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




  <Fade>
            <div>
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



    </div>


    );
  }
}

export default PersonTileNoBio;
