import React, { Component } from 'react';
import { BrowserRouter as Router,Link} from 'react-router-dom'

import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import Img_hm from '../../imgs/ui/hamburger-menu.svg';
import { ParallaxProvider, Parallax } from 'react-skrollr'
import Fade from 'react-reveal/Fade';
import Hamburger from './Hamburger';
class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      hamburger_menu_visibility : 'hidden'



    }




  }


  hamburgerClick(){

    let new_state = 'hidden';
    if(this.state.hamburger_menu_visibility == 'hidden'){
        new_state = 'visible';
    }




    this.setState({
      hamburger_menu_visibility: new_state
    })

    console.log("Hamburger click " + this.state.hamburger_menu_visibility);

  }
  render() {


    const style = {

        backgroundImage: "url(" + this.props.image + ")"
    }
    return (




<Fade bottom>
      <div className="menu">



        <div>
            <Hamburger visibility={this.state.hamburger_menu_visibility} />

            <div className="case-study-logo">






            <Link to="/">


                  <Parallax


                   data={{
                     'data--100-top':'transform: translate(0, -40%); opacity: 1;',

                     'data-top-bottom':'transform: translate(0, 0%); opacity: 1; transition:all 500ms;'




                  }}>

            <img src={Img_logo} />

  </Parallax>

            </Link>

            </div>



            </div>

      </div>

</Fade>
    );
  }
}

export default Menu;
