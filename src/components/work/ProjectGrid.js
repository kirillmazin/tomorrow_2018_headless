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
  removeFeatured(all_projects, featured_case_studies){


    let featured_projects = [];

      console.log("IN " + all_projects.length);


    for(let i=0;i<featured_case_studies.length;i++){
      let featured_projects;
      let slug = featured_case_studies[i].slug;
      console.log("to remove " +  slug)

      for(let l=0;l<all_projects.length;l++){
            for(let m=0;m<all_projects[l].slug.length;m++){
                // remove items that have already been featured
                if(slug == all_projects[l].slug[m]){


                    all_projects.splice( l,1)

                }
            }


          }

    }



    return all_projects;

  }

  buildProjects(){
      let case_studies = [];
      let prevOffset;
      let offset = 0;
      let minimum_offset = 100;
      let difference;
      let projects_to_use = this.removeFeatured(this.props.projects,this.props.featured_case_studies);




      for(let i=0;i<projects_to_use.length;i++){

          let alignment = i%2;
          if(alignment == 1){
              prevOffset = offset;


          }

          offset = this.getOffset(i);

          if(alignment == 1){

              let difference = offset-prevOffset;


              if(difference < 100 ){
                offset = offset + minimum_offset;

            }


          }






          case_studies.push(<ProjectTile alignment={alignment} id={i} data={projects_to_use[i]} show={this.props.show} offset={offset} aspect_ratio={this.props.aspect_ratio}/>);

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
