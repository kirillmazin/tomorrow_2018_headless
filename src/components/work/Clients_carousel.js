import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';

/**
 * This is a quote component used on the case study page
 */
class Clients extends Component {


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


    const intro_font_color = {

      color: this.props.intro_font_color
    }

    return (




      <div className="work-clients component-margin">


<Reveal effect="fadeInUpCustom">
  <h2><i>{this.props.title}</i></h2>
      <div className="white-block">

      <div>

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

       </div>




    );
  }
}
/** @component */
export default Clients;
