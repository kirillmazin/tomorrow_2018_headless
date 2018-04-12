import React, { Component } from 'react';
import InterviewQuestion from './interview/InterviewQuestion'
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal'

class Interview extends Component {

  buildQuestions(questions){
    let all_questions = [];
    console.log("BUILD ");
    for(let i=0;i<questions.length;i++){
      all_questions.push(<InterviewQuestion question={questions[i].question} answer={questions[i].answer}/>);
    }

    return all_questions;
  }
  render() {



      const animation = "slideInUp";
      const animateOnce = "true";
      const style = {

          backgroundImage: "url(" + this.props.image + ")"
      }
    let all_questions = [];
    for(let i=0;i<this.props.questions.length;i++){
        let o = {};

        o.answer = this.props.questions[i].answer[0].text;
        o.question = this.props.questions[i].question[0].text;


        all_questions.push(o)
        //  console.log(this.props.questions[i])
    }

    return (





      <div className="interview component-margin">
              <Reveal effect="fadeInUpCustom">
            <div className="interview-work col-lg-10 offset-lg-1">
                <Reveal effect="fadeInUpCustom">
                <img src={this.props.image} />
              </Reveal>
            </div>


            <div className="row no-gutters col-lg-10 offset-lg-1">
                  <Reveal effect="fadeInUpCustom">
                    <h2 className="section-title"><a href="">{this.props.interview_title}</a></h2>
                </Reveal>
            </div>



            <div className="interview-content row no-gutters col-lg-10 offset-lg-1">


                <div className="col-sm-4 col-md-4 interview-photo">
                    <Reveal bottom>
                      <img src={this.props.staff_photo} />
                    </Reveal>
                </div>


                <div className="col-sm-7 col-md-7">
                  <Reveal bottom>
                  {this.buildQuestions(all_questions)}

                </Reveal>
                </div>

            </div>
          </Reveal>
      </div>


    );
  }
}

export default Interview;
