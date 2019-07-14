import React, { Component } from 'react';


import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import IntroCopy from './IntroCopy'
import IntroTag from './IntroTag'

import { BrowserRouter as Router,Link} from 'react-router-dom';




class Intro extends Component {
  constructor(props) {
     super(props);
      this.state = {
          intro_style: {
            backgroundColor: "#ffffff"
          }



    };
  }









  getLinks(links, images, descriptions){
    let a = []


      for(let i=0;i<links.length;i++){
          a.push(


                <a  href={"/work/"+links[i]}>
                    <IntroTag copy={links[i]} image={images[i]} description={descriptions[i]}  isActive={this.state.active_item} id={i}   />
                </a>


          );
      }
      return a;

  }
  render() {







    return (










    <div className="home-intro" style={this.state.intro_style}>

        <div className="container-fluid">



            <Reveal effect="fadeInUpCustom">
             
                    <IntroCopy copy={this.props.copy}/>
            </Reveal>





            <div>

                    {this.getLinks(this.props.links, this.props.images, this.props.descriptions)}
                    </div>






      </div>


      </div>







    );
  }
}

export default Intro;
