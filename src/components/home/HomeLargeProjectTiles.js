import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ProjectTileLarge from './ProjectTileLarge'
/**
 * This is a quote component used on the case study page
 */
class HomeLargeProjectTiles extends Component {
  constructor(props) {
    super(props);


  }



  buildProjects(){
      let case_studies = [];

      for(let l=0;l<this.props.to_display.length;l++){
      for(let i=0;i<this.props.projects.length;i++){
          if(this.props.projects[i].uid == this.props.to_display[l]){






                case_studies.push(<ProjectTileLarge  img={this.props.img[l]} key_service={this.props.key_service[l]} data={this.props.projects[i]} />);



        }
      }
    }

      return case_studies;
  }


  render() {

    return (


      <div className="container-fluid intro-grid ">
          <div className="row no-gutters col-lg-10 offset-lg-1 no-gutters">

              {this.buildProjects()}

            </div>
      </div>
    )



  }
}
/** @component */
export default HomeLargeProjectTiles;
