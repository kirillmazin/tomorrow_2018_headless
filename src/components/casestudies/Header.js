import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Header extends Component {
  render() {
    const effect = "slideInUpCustom";

    const style = {

        backgroundImage: "url(" + this.props.image + ")"
    }
    return (





     <div className="case-study-hero" >
        <div className="case-study-image" style={style}></div>


         <div className="container">

          <div className="case-study-header">
          <Fade bottom>
                <h4>{this.props.subtitle}</h4>

                <h1>{this.props.title}</h1>
          </Fade>
            </div>

        </div>


        </div>


    );
  }
}

export default Header;
