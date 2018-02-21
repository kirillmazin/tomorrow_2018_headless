import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
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
             <ScrollAnimation animateIn={effect} animateOnce="true">
                <h4>{this.props.subtitle}</h4>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn={effect} animateOnce="true">
                <h1>{this.props.title}</h1>
                </ScrollAnimation>
            </div>

        </div>


        </div>


    );
  }
}

export default Header;
