import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
class Address extends Component {



  render() {
    const effect = "slideInUpCustom";
    return (




      <div>

        <div className="row no-gutters ">
        <Reveal effect="fadeInUpCustom">
          <div className="address col-lg-7 offset-lg-4">
              <h3><i>{this.props.title}</i></h3>
              <address>
                  {this.props.copy}
              </address>
            <a className="button blue" href="mailto:hello@tomorrowpartners.com" >
                Contact us
              </a>


              </div>
        </Reveal>
        </div>
      </div>


    );
  }
}

export default Address;
