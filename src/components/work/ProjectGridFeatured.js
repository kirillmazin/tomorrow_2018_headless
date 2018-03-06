import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './ProjectTile.css'
import ProjectTile from './ProjectTile'
/**
 * This is a quote component used on the case study page
 */
class ProjectGridFeatured extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }

  }

  

  buildProjects(){
      let case_studies = [];
      let featured_projects = [];
      // get the featured all_projects


      for(let i=0;i<this.props.featured_case_studies.length;i++){

        let slug = this.props.featured_case_studies[i].slug;


        for(let l=0;l<this.props.projects.length;l++){
              for(let m=0;m<this.props.projects[l].slug.length;m++){

                  if(slug == this.props.projects[l].slug[m]){
                      console.log(l + " MATCH ------------------------ " + this.props.projects[l].slug);

                      featured_projects.push(this.props.projects[l])
                  }
              }

          //  console.log(" slug ------ " + this.props.projects[l].slug);

        }
      }



      for(let i=0;i<featured_projects.length;i++){



          let alignment = i%2;
          let offset = (i == 0)? offset = 0 : offset =  Math.floor(Math.random()*250)+100;
            console.log(" / ALIGNMENT " + alignment);
          case_studies.push(<ProjectTile alignment={alignment} id={i} data={featured_projects[i]} show={this.props.show} offset={offset} aspect_ratio={this.props.aspect_ratio}/>);

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
export default ProjectGridFeatured;
