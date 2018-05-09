import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

/**
 * This is a quote component used on the case study page
 */
class ProjectNavTile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  onMouseEnter(){

    this.setState({
      tile_size : {border:"0px solid red",transform: 'scale(1.05)', transition: 'all 500ms'}
    })


  }

  onMouseLeave(){

    this.setState({
      tile_size : {border:"0px solid red",transform: 'scale(1)', transition: 'all 500ms'}


    })


  }
  render() {

    let thumbnail_source = {
      backgroundImage: "url(" + this.props.data.thumbnail_image.url + ")"
    }

    let overflow ={
        overflow: "hidden"
    }
    return (



        <div>
          <a href={"/project/"  + this.props.data.uid}>
          <div className="project_tile" onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()}>

            <div className="thumbnail_image" style={overflow}  >
              <div className="thumbnail_source" style={{...thumbnail_source, ...this.state.tile_size}} >

              </div>
            </div>
              <h3>{this.props.data.title}</h3>
            </div>
            </a>
        </div>





    );
  }
}
/** @component */
export default ProjectNavTile;
