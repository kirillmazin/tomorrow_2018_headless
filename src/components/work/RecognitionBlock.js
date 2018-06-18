import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class RecognitionBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {

      description:{
        opacity:0
      }
    };
  }
  handleMouseEnter(){


      this.setState({
        description:{
          opacity:1
        }

      })

  }

  handleMouseLeave(){


      this.setState({
        description:{
          opacity:0
        }

      })

  }



  render() {


    let background_image = {
        backgroundImage: "url(" + this.props.background_image + ")",



    }

    return (






      <div className="recognition" onMouseEnter={()=> this.handleMouseEnter()} onMouseLeave={()=> this.handleMouseLeave()}>

          <div className="logo" style={background_image}>

              <div className="description" style={this.state.description}>
                <p>{this.props.description}</p>
              </div>
          </div>
          

      </div>


    );
  }
}
/** @component */
export default RecognitionBlock;
