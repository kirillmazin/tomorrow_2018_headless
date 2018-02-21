import React, { Component } from 'react';

class InterviewQuestion extends Component {
  render() {
    return (
        
        
        
        
        
      <div className="interview-question">
        <h4 >{this.props.question}</h4>
        <p>
            {this.props.answer}
            

        </p>
      </div>
        
       
    );
  }
}

export default InterviewQuestion;