import React, { Component } from 'react';
import InterviewQuestion from './interview/InterviewQuestion'
import ScrollAnimation from 'react-animate-on-scroll'


class Interview extends Component {


  render() {



      const animation = "slideInUp";
      const animateOnce = "true";
      const style = {

          backgroundImage: "url(" + this.props.image + ")"
      }

    const q1 = "How did you get to the logo?";
    const a1 = "I think there were at least five of us working on it – it was such a cool project that everyone wanted to throw their hat in the ring. At the same time, though, it was a tough one. This isn’t like the typical logo project, where you’re symbolizing something more abstract, like the idea behind a business or service. Yerba Buena is a real place, with its own forms and spaces. And ultimately that’s where we ended up: the stacked type symbolizes the street grid, while the square is like Yerba Buena Gardens bursting out of the center. ";

    const q2 = "Did you design the winning logo?";
    const a2 = "We don’t really work that way. At the beginning of a visual ID process, we start in our separate corners, but pretty quickly we start building off of each other’s ideas, and sharing the work of bringing the best ideas to fruition. Honestly, I couldn’t tell you whose logo this was to begin with. But I do know that we all brought something to the table to make it the winner.";
    return (





      <div className="interview component-margin">

            <div className="interview-work col-lg-10 offset-lg-1">
                <img src={this.props.image} />
            </div>


            <div className="row no-gutters col-lg-10 offset-lg-1">
                <h2 className="section-title"><a href="">{this.props.interview_title}</a></h2>
            </div>



            <div className="interview-content row no-gutters col-lg-10 offset-lg-1">


                <div className="col-sm-4 col-md-4 interview-photo">
                    <img src={this.props.staff_photo} />
                </div>


                <div className="col-sm-7 col-md-7">
                    <InterviewQuestion question={q1} answer={a1}/>
                    <InterviewQuestion question={q2} answer={a2}/>
                </div>

            </div>

      </div>


    );
  }
}

export default Interview;
