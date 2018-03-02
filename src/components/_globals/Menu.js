import React, { Component } from 'react';
import { BrowserRouter as Router,Link} from 'react-router-dom'

import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import Img_hm from '../../imgs/ui/hamburger-menu.svg';
import { ParallaxProvider, Parallax } from 'react-skrollr'
import Fade from 'react-reveal/Fade';
class Menu extends Component {
  render() {


    const style = {

        backgroundImage: "url(" + this.props.image + ")"
    }
    return (




<Fade bottom>
      <div className="menu">



<div>

            <div className="case-study-logo">






            <Link to="/work/">


                  <Parallax


                   data={{
                     'data--100-top':'transform: translate(0, -300%); opacity: 1;',

                     'data-top-bottom':'transform: translate(0, 0%); opacity: 1; transition:all 500ms;'




                  }}>

            <img src={Img_logo} />

  </Parallax>

            </Link>

            </div>


            <div className="hamburger-menu">

            <Parallax


             data={{
               'data--100-top':'transform: translate(0, -300%); opacity: 1;',

               'data-top-bottom':'transform: translate(0, 0%); opacity: 1; transition:all 500ms;'




            }}>

            <img src={Img_hm}  />


  </Parallax>
            </div>




            </div>

      </div>

</Fade>
    );
  }
}

export default Menu;
