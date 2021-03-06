import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
class Footer extends Component {

  constructor(props){
    super(props);
    this.state = {
      grandients_start : ["#22c1c3","#ff9966","#7F00FF","#C9D6FF","#d9a7c7","#1c92d2","#4568DC","#43C6AC","#FFAFBD"],
      grandients_end : ["#fdbb2d","#ff5e62","#E100FF","#E2E2E2","#fffcdc","#1c92d2","#B06AB3","#F8FFAE","#ffc3a0"],


    }

    this.state.style = {

           backgroundImage: "linear-gradient(90deg,#f05053,#fdbb2d)"
     }


  }


  handleMouseOver(value){

      const random_1 =   Math.floor(Math.random() * this.state.grandients_start.length);
      const random_2 =   Math.floor(Math.random() * this.state.grandients_start.length);


    let new_style = {backgroundImage: "linear-gradient(90deg," + this.state.grandients_start[random_1] + ","+this.state.grandients_end[random_2] + ")"}


    this.setState({style: new_style})

  }
  render() {

    return (




      <Reveal effect="fadeInUpCustom">
      <footer className="component-margin">

       
          <h4 className="row no-gutters">

            Let’s imagine tomorrow together.

            </h4>
   
        <div className="row no-gutters">
        
        <address className="col-md-5 col-lg-4">
        2625 Alcatraz Avenue, Suite 340<br/>
                Berkeley, CA 94705<br/>
                USA
              
        </address>

      

        
        <address className="col-md-5 col-lg-3">
       
            <div className="phone">+1 510 644 2332</div>
            <div className="email"><a href="mailto:hello@tomorrowpartners.com" style={this.state.style} onMouseOver={() => this.handleMouseOver()}>hello@tomorrowpartners.com</a></div>

          
        </address>
       
            <div className="col-md-3 col-lg-6 social-media">

              

            </div>
          
        </div>
        
      </footer>
      </Reveal>

    );
  }
}

export default Footer;
