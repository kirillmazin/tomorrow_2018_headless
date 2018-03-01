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
  getOffset(i){
      let offset = 0;
      return offset = (i == 0)? offset = 0 : offset =  Math.floor(Math.random()*250)+50;
  }
  buildProjects(){
      let case_studies = [];
      let prevOffset;
      let offset = 0;
      let minimum_offset = 100;
      let difference;
      for(let i=0;i<this.props.projects.length;i++){

          let alignment = i%2;
          if(alignment == 1){
              prevOffset = offset;
              console.log("--------- ");
              console.log("PREV " + prevOffset);

          }

          offset = this.getOffset(i);

          if(alignment == 1){
                console.log("OFFSET " +  offset);
              let difference = offset-prevOffset;
              console.log("DIFF " +  difference);

              if(difference < 100 ){
                offset = offset + minimum_offset;
                console.log("RECALCULATE")
            }

            console.log("NEW OFF " + offset)
          }





          case_studies.push(<ProjectTile alignment={alignment} id={i} data={this.props.projects[i]} show={this.props.show} offset={offset} aspect_ratio={this.props.aspect_ratio}/>);

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
