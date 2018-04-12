import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import styles from './ProjectTile.css'
import { Link} from 'react-router-dom'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import $ from 'jquery';
/**
 * This is a quote component used on the case study page
 */
class ProjectTile extends Component {

  constructor(props) {
    super(props);

    this.state = {

      show: true,
      imageBg:  {backgroundImage: "url(" + this.props.data.thumbnail_image + ")"},
      tile_size : {border:"0px solid red",transform: 'scale(1)', transition: 'all 500ms'},
      link_underline:{


            backgroundSize: "0% 100%"


      }

    };





  }

  handleMouseOver(){


    this.setState(
      {
        imageBg:  {backgroundImage: "url(" + this.props.data.thumbnail_image + ")",border:"0px solid red",transform: 'scale(1.05)'},
        tile_size : {border:"0px solid red", transition: 'all 500ms'},
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
          tile_size : {border:"0px solid red",transform: 'scale(1)', transition: 'all 500ms'},
          link_underline:{

                backgroundSize: "0% 100%",
                animationDirection: "reverse"


          }
      }

    )
  }

  getTile(image_height, bottom_padding, alignment ){
    let style_to_add = "image-tile"
    let type_style = "";

    if(alignment == 1){

      type_style = "image-tile-right";
    }


    return (
    <div className={type_style}  style={this.state.tile_size} ref={el => this.el = el}>
      <div className={style_to_add} style={this.state.image_height} >
          <div className="image" style={this.state.imageBg}/>
      </div>


      <h4> {this.props.data.title}</h4>
      <h2><i style={this.state.link_underline} ref={el => this.project_name_underline = el}>{this.props.data.subtitle}</i></h2>
    </div>
    )
  }

  getMargin(alignment, gutter){
    let margin_right;


    margin_right = {
      marginRight:gutter / 2 + 'rem'
    }

    if(alignment == 1){
      margin_right = {
        marginLeft:gutter / 2 + 'rem'
      }
    }

    return margin_right;
  }
  componentDidMount(){
      this.$el = $(this.el);
      this.$project_name_underline = $(this.project_name_underline);


      this.$el.css("border":"1px solid red")


  }
  render() {
    //  console.log("selected " +  this.props.show);
    //  console.log(this.props.data.area_of_expertise);

      //console.log(this.props.offset)

     //let offset = (this.props.offset != undefined || this.props.offset != null) ? offset = this.props.offset : offset = 0;
     let id = this.props.id;

     let alignment = this.props.alignment;
     let gutter = 2;
     let bottom_margin = 10;

    // let offset = (id == 0)? offset = 0 : offset =  Math.floor(Math.random()*250)+50;

     //offset = 0;
      const random = (Math.random()*1)+.9
      let aspect_ratio = random;

      aspect_ratio = 1.3;
      this.state.image_height = {

        'paddingTop': 100/aspect_ratio+'%',
         display:'block',
         transform: 'scale(1)'


      }

      const bottom_padding = {
          margin:'0 0 '+bottom_margin+'rem 0'

      }



      let isHide = true;




      if(isHide && this.props.show != "Everything"){
        for(let i=0;i<this.props.data.area_of_expertise.length;i++){
          if( this.props.show == this.props.data.area_of_expertise[i]){
            isHide = false;
            break;
          }


      }
    } else {
      isHide = false;
    }



      if(isHide === false){
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

  } else{
      return'';
  }

  }
}
/** @component */
export default ProjectTile;
