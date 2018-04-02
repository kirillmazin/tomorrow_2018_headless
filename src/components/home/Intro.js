import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import IntroCopy from './IntroCopy'
import IntroTag from './IntroTag'
class Intro extends Component {



  getLinks(links, images){
    let a = []
      console.log("IMAGES");
      console.log(images);
      for(let i=0;i<links.length;i++){
          a.push(

            <IntroTag copy={links[i]} image={images[i]}/>


          );
      }
      return a;

  }
  render() {
    const effect = "slideInUpCustom";





    console.log(this.props.alignment);
    return (










    <div className="home-intro">
    <div className="container-fluid col-sm-6 col-lg-6 offset-1">
        <div className="row no-gutters">
        <Reveal effect="fadeInUpCustom">
          <IntroCopy copy={this.props.copy}/>
          </Reveal>
        </div>
        </div>

        <div className="container-fluid col-10 offset-1">
        <div className="row no-gutters ">

          {this.getLinks(this.props.links, this.props.images)}

        </div>
        </div>
      </div>







    );
  }
}

export default Intro;
