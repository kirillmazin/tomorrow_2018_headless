import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
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



      }

    all_images.push(<div className="client-logo col-xs-6 col-sm-6 col-lg-3 mr-auto" style={background_image}></div>);
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
<Reveal effect="fadeInUpCustom">
      <div className="work-clients component-margin">
      <div className="row no-gutters">
        <div className="col-sm-10 col-lg-4 offset-1">
           <h2><i>{this.props.title}</i></h2>
        </div>
      </div>
      <div >

        <div className="row no-gutters">
          <div className="col-10 offset-1">
          <div className="row no-gutters client-logos">
            {this.getImages(this.props.images)}
            </div>
            </div>
        </div>
      </div>
         </div>
</Reveal>
</Parallax>
       </div>




    );
  }
}
/** @component */
export default Tag;
