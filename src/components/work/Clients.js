import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import { ParallaxProvider, Parallax } from 'react-skrollr'
/**
 * This is a quote component used on the case study page
 */
class Tag extends Component {


  getImages(images){
    let all_images = [];
    let background_image = {};


    for(let i=0;i<images.length;i++){

      background_image = {
          backgroundImage: "url(" + images[i].client_logo + ")",
          border:"0px solid red",
          height:260+'px',
          backgroundPosition: 'center'

      }

    all_images.push(<div className="col-2 mr-auto" style={background_image}></div>);
  }
  return all_images;
  }
  render() {

    console.log(this.props.images)
    const intro_font_color = {

      color: this.props.intro_font_color
    }

    return (




      <div className="intro">

      <Parallax
    data={{
      'data-top-bottom':'transform: translate(0, -300px); opacity: 0;',
      'data-top-center':'transform: translate(0, 0px); opacity: 1;',
      'data-center-bottom':'transform: translate(0, 0px); opacity: 1;transition:all 1s;'

    }}
  >
 <Fade bottom>
      <div className="work-clients">
      <div className="row no-gutters">
        <div className="col-4 offset-1">
           <h2><i>{this.props.title}</i></h2>
        </div>
      </div>
      <div >
        <div className="row no-gutters offset-1">
            {this.getImages(this.props.images)}
        </div>
      </div>
         </div>
</Fade>
</Parallax>
       </div>




    );
  }
}
/** @component */
export default Tag;
