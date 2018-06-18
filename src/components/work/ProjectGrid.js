import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './ProjectTile.css'
import ProjectTile from './ProjectTile'
import Quote from '../casestudies/Quote';
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
  removeFeatured(all_projects, featured_case_studies, categories){





    let featured_projects = [];
    let projects_to_include = [];
    let projects_to_remove = [];
    if(featured_case_studies.length > 0){


    for(let i=0;i<featured_case_studies.length;i++){
      let featured_projects;
      let slug = featured_case_studies[i].slug;


      for(let l=0;l<all_projects.length;l++){


            for(let m=0;m<all_projects[l].slug.length;m++){
                // remove items that have already been featured

                if(slug == all_projects[l].slug[m]){
                    projects_to_remove.push(l)
                    if(all_projects.length > 0) {

                  }


                }
            }


      }



    }


      function sortNumber(a,b) {
          return a - b;
      }

      projects_to_remove.sort(sortNumber);



    for(let i=0;i<projects_to_remove.length;i++){


        all_projects.splice(projects_to_remove[i]-i,1);

    }



}





      if(categories != undefined && categories != "Everything") {

            for(let i=0;i<categories.length;i++){

                for(let l=0;l<all_projects.length;l++){
                      for(let m=0; m<all_projects[l].area_of_expertise.length;m++){
                          if(categories[i] == all_projects[l].area_of_expertise[m]){

                              projects_to_include.push(all_projects[l]);
                              break;
                          }
                      }
                }



            }
      } else {

          projects_to_include = all_projects.slice();
      }







    return projects_to_include;

  }

  buildProjects(quote){
      let case_studies = [];
      let prevOffset;
      let offset = 0;
      let minimum_offset = 100;
      let difference;



      let projects_to_use = this.removeFeatured(this.props.projects,this.props.featured_case_studies,this.props.grid_items_filters);



      if(projects_to_use.length > 0){




      for(let i=0;i<projects_to_use.length;i++){

          let alignment = i%2;











          case_studies.push(<ProjectTile alignment={alignment} id={i} data={projects_to_use[i]} show={this.props.show} offset={offset} aspect_ratio={this.props.aspect_ratio}/>);
          if(quote.copy != undefined){
          if(i==quote.copy.position-1 ){


            case_studies.push( <Quote copy={quote.copy}/>);

          }
        }

      }
    }
      return case_studies;
  }


  render() {

    return (






  <div className="container-fluid work-casestudies">

    <div className="col-lg-10 offset-lg-1">
    <div className="row no-gutters">

  {this.buildProjects(this.props.quote)}


</div>
</div>


      </div>



    )
  }
}
/** @component */
export default ProjectGrid;
