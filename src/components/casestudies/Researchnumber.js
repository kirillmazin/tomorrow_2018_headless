import React, { Component } from 'react';

class Researchnumber extends Component {
  render() {
    return (






      <div className="research-data">
       <h2 className="research-number">{this.props.number}</h2>
        <p>{this.props.description}</p>
      </div>


    );
  }
}

export default Researchnumber;
