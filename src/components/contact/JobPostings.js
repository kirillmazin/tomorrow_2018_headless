import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
class JobPostings extends Component {

  getOpenPositions(open_positions){
    console.log("function");

    console.log(open_positions);
    const a = [];

    for(var i=0;i<open_positions.length;i++){
        a.push(<div><a href={open_positions[i].slug}>{open_positions[i].title}</a></div>);




    }
    return a;
  }
  render() {
    const effect = "slideInUpCustom";

    console.log(this.props.open_positions);

    return (



<Reveal effect="fadeInUpCustom">
      <div className="component-margin-jobs">

        <div className="row no-gutters ">
        <Reveal effect="fadeInUpCustom">
          <div className="open-positions col-lg-7 offset-lg-4">
              <h4>Open Positions</h4>
              <h5>{this.getOpenPositions(this.props.open_positions)}</h5>

              </div>
        </Reveal>
        </div>
      </div>
</Reveal>

    );
  }
}

export default JobPostings;
