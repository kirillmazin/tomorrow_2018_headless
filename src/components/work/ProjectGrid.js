import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './ProjectTile.css'
import ProjectTile from './ProjectTile'
/**
 * This is a quote component used on the case study page
 */
class ProjectGrid extends Component {
  constructor(props) {
    super(props);
       
  
  }
  
  buildProjects(){
      let case_studies = [];
      for(let i=0;i<this.props.projects.length;i++){
          
          case_studies.push(<ProjectTile data={this.props.projects[i]} show={this.props.show}/>);
        
      }
      return case_studies;
  }
  
  
  render() {
    
    return (


      
      <div className="row no-gutters">
      {this.buildProjects()}
      </div>
    )
  }
}
/** @component */
export default ProjectGrid;
