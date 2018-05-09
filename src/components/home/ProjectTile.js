import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { Link} from 'react-router-dom'

import $ from 'jquery';
/**
 * This is a quote component used on the case study page
 */
class ProjectTile extends Component {

  constructor(props) {
    super(props);

    this.state = {


      imageBg:  {backgroundImage: "url(" + this.props.data.thumbnail_image + ")"},
      tile_size : {},
      link_underline:{


            backgroundSize: "0% 100%"


      }

    };





  }

  handleMouseOver(){


    this.setState(
      {
        imageBg:  {backgroundImage: "url(" + this.props.data.thumbnail_image + ")",transform: 'scale(1.05)'},

        image_height :{


           transform: 'scale(1.2)'


        },
        link_underline:{

              backgroundSize: "100% 100%"



        }
      }

    )
  }

  handleMouseOut(){
    this.setState(
      {
        imageBg:  {backgroundImage: "url(" + this.props.data.thumbnail_image + ")"},
          tile_size : {transform: 'scale(1)', transition: 'all 500ms'},
          link_underline:{

                backgroundSize: "0% 100%",
                animationDirection: "reverse"


          }
      }

    )
  }

  getTile(image_height, bottom_padding, alignment ){
    let style_to_add = "image-tile"
    let type_style = "image-tile-government-left";

    if(alignment == 1){

      type_style = "image-tile-government-right";
    }


    return (
    <div className={type_style} style={this.state.tile_size} ref={el => this.el = el}>
      <div className={style_to_add} style={this.state.image_height} >
          <div className="image" style={this.state.imageBg}/>
      </div>


      <h4>{this.props.data.title}</h4>
      <h2><i style={this.state.link_underline} ref={el => this.project_name_underline = el}>{this.props.data.subtitle}</i></h2>
    </div>
    )
  }


  componentDidMount(){
      this.$el = $(this.el);
      this.$project_name_underline = $(this.project_name_underline);





  }
  render() {

     let id = this.props.id;

     let alignment = this.props.alignment;
     let gutter = 2;
     let bottom_margin = 10;





      let aspect_ratio = 1.3;
      this.state.image_height = {

        'paddingTop': 100/aspect_ratio+'%',
         display:'block',
         transform: 'scale(1)'


      }

      const bottom_padding = {
          margin:'0 0 '+bottom_margin+'rem 0'

      }




    return (





<Reveal effect="fadeInUpCustom">

      <div className="col-sm-12 col-md-6">

      <div className="projectTile"  onMouseOver={() => this.handleMouseOver()} onMouseOut={() => this.handleMouseOut()}>


          <Link to={"../project/"+this.props.data.uid}>


            {this.getTile(this.state.image_height, bottom_padding, alignment)}


          </Link>

      </div>

      </div>
  </Reveal>
    );

  }
}
/** @component */
export default ProjectTile;
