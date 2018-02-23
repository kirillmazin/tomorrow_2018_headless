import React, { Component } from 'react';
import { BrowserRouter as Router,Link} from 'react-router-dom'

import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import Img_hm from '../../imgs/ui/hamburger-menu.svg';
class Menu extends Component {
  render() {


    const style = {

        backgroundImage: "url(" + this.props.image + ")"
    }
    return (


      

      <div className="menu">
            <div className="case-study-logo"><Link to="/work/"><img src={Img_logo} /></Link></div>
            <div className="hamburger-menu"><img src={Img_hm}  /></div>
      </div>


    );
  }
}

export default Menu;
