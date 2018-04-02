import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ProjectLargeTile from './ProjectLargeTile'
import ProjectTile from './ProjectTile'
/**
 * This is a quote component used on the case study page
 */
class ProjectGridHome extends Component {
  constructor(props) {
    super(props);


  }
  getOffset(i){
      let offset = 0;
      return offset = (i == 0)? offset = 0 : offset =  Math.floor(Math.random()*250)+50;
  }


  buildProjects(type){
      let case_studies = [];
      console.log(type)
      for(let l=0;l<this.props.to_display.length;l++){
      for(let i=0;i<this.props.projects.length;i++){
          if(this.props.projects[i].uid == this.props.to_display[l]){


          let alignment = l%2;

            if(type == "full-width"){
                case_studies.push(<ProjectLargeTile alignment={alignment} id={alignment} data={this.props.projects[i]} type={type}/>);
              } else {

                  case_studies.push(<ProjectTile alignment={alignment} id={alignment} data={this.props.projects[i]} type={type}/>);
              }

        }
      }
    }

      return case_studies;
  }


  render() {
  if(this.props.type == "full-width"){
    return (


      <div className="container-fluid intro-grid no-gutters">
          <div className="row no-gutters col-10 offset-1">

              {this.buildProjects(this.props.type)}

            </div>
      </div>
    )
  }
  if(this.props.type == "government"){

    return (


      <div className="container-fluid home-grid-government no-gutters">
          <div className="row no-gutters col-10 offset-1">

              {this.buildProjects(this.props.type)}

            </div>
      </div>
    )


  }

  }
}
/** @component */
export default ProjectGridHome;
