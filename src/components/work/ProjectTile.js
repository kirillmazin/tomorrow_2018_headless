import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './ProjectTile.css'
import { Link} from 'react-router-dom'
import { ParallaxProvider, Parallax } from 'react-skrollr'

/**
 * This is a quote component used on the case study page
 */
class ProjectTile extends Component {

  constructor(props) {
    super(props);

    this.state = {

      show: true,
      imageBg:  {backgroundImage: "url(" + this.props.data.thumbnail_image + ")",border:"0px solid red"},


    };





  }

  handleMouseOver(){


    this.setState(
      {
        imageBg:  {backgroundImage: "url(" + this.props.data.thumbnail_image + ")",border:"0px solid red", transform:"scale(1.2)"},
      }

    )
  }

  handleMouseOut(){
    this.setState(
      {
        imageBg:  {backgroundImage: "url(" + this.props.data.thumbnail_image + ")",border:"0px solid red", transform:"scale(1)"},
      }

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
     let offset = 0;

     if(alignment == 1){
       offset = 200
     }
     //offset = 0;
      const random = (Math.random()*1)+.9
      let aspect_ratio = random;

      aspect_ratio = 1.3;
      const image_height = {

        'paddingTop': 100/aspect_ratio+'%',
         display:'block',
         border: '0px solid red',
         'marginTop':offset+'px'
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





 <Fade bottom cascade>

      <div className="col-6">

      <div className="projectTile" style={this.getMargin(alignment, gutter)}   onMouseOver={() => this.handleMouseOver()} onMouseOut={() => this.handleMouseOut()}>
      <Parallax
    data={{
      'data-top-bottom':'transform[sqrt]: translate(0, -140%); opacity:0; ',
      'data-top-bottom':'transform[sqrt]: translate(0, -50%); opacity:0;',
      'data-center-bottom': 'transform[sqrt]: translate(0%, 0%); opacity:1;',
      'data-bottom-top': 'transform[sqrt]:  translate(0%, 0%); opacity:1;transition:all 1s;'
    }}
    >

          <Link to={"../project/"+this.props.data.uid}>




          <div className="image-tile" style={image_height}>
              <div className="image" style={this.state.imageBg}/>
          </div>


          <h4> {this.props.data.title}</h4>
          <h2 style={bottom_padding}> {this.props.data.subtitle} </h2>

      </Link>
        </Parallax>
      </div>

      </div>
  </Fade>
    );

  } else{
      return'';
  }

  }
}
/** @component */
export default ProjectTile;
