import React, { Component } from 'react';
import Researchnumber from './Researchnumber'
import ScrollAnimation from 'react-animate-on-scroll'


class Research extends Component {
  render() {
    const animation = "slideInUp";
    const animateOnce = "true";
    return (






      <div className="research component-margin">
          <ScrollAnimation animateIn={animation} animateOnce={animateOnce}>


        <div className="row">
        <div  className="col-lg-3 offset-lg-1">
          <h2 className="section-title"><a href="">Research at a glance</a></h2 >
        </div>

        <div className="col-lg-8 stats row no-gutters">

            <Researchnumber number={"40"} description={"one-on-one conversations"}/>
            <Researchnumber number={"62"} description={"man-on-the-street interviews"}/>
            <Researchnumber number={"425"} description={"online survey participants"}/>
            <Researchnumber number={"4"} description={"focus groups"}/>
            <Researchnumber number={"80"} description={"participants"}/>



        </div>

       </div>
        </ScrollAnimation>
        </div>






    );
  }
}

export default Research;
