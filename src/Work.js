import React from 'react';
import NotFound from './NotFound';
import $ from 'jquery';
import Prismic from 'prismic-javascript';

import styles from './work.css'
import Tag from './components/work/Tag';

import Footer from './components/_globals/Footer.js';
import WorkHeader from './components/work/WorkHeader';
// Declare your component
export default class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  componentWillMount() {



   this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {

    this.fetchPage(props);
  }

  componentDidUpdate() {
  //  this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
      if (props.prismicCtx) {
      // We are using the function to get a document by its uid

      return props.prismicCtx.api.query(


          Prismic.Predicates.any('document.type', ['casestudy','work_landing_page'])


).then((doc) =>

  {

    this.setState({ doc });



}
    // response is the response object, response.results holds the documents



      );
    }
    return null;
  }





  render() {





      if (this.state.doc) {


        console.log("----")
        console.log(this.state.doc)


        let cms_data = [];
        let all_areas_of_expertise = ["Everything"];
        let all_projects = []

        let work_landing_page_data = [];
        let global_thumbnail_aspect_ratio;


        this.state.numberOfProjects = this.state.doc.results.length;


        for(let i=0;i<this.state.doc.results.length;i++){
          let type = this.state.doc.results[i].type;


            if(type == "casestudy"){

            let project_data = {};
            project_data.title = this.state.doc.results[i].data.title[0].text;
            project_data.subtitle =  this.state.doc.results[i].data.subtitle[0] != undefined ? this.state.doc.results[i].data.subtitle[0].text : '';
            project_data.hero_image = this.state.doc.results[i].data.hero_image.url;

            project_data.thumbnail_image = this.state.doc.results[i].data.thumbnail_image.url;

            console.log("PROJECT DATA++++")
            console.log(this.state.doc.results[i])

            project_data.offset = (this.state.doc.results[i].data.px_top_offset != undefined || this.state.doc.results[i].data.px_top_offset != null)? this.state.doc.results[i].data.px_top_offset : 0 ;


            console.log("offset")
                console.log(project_data.offset)
            project_data.uid = this.state.doc.results[i].uid;
            project_data.area_of_expertise = [];



            for(let l=0;l<this.state.doc.results[i].data.area_of_expertise.length;l++){
              let area = this.state.doc.results[i].data.area_of_expertise[l].area;
                if(area != null){
                  all_areas_of_expertise.push(area);
                  project_data.area_of_expertise.push(area);


                }
            }

            all_projects.push(project_data);




        }

            all_areas_of_expertise = $.unique(all_areas_of_expertise);
            let a = $.unique(all_areas_of_expertise);


            if(type == "work_landing_page"){


                console.log("WORK LANDING PAGE --------- ");
                console.log(this.state.doc.results[i].data);
                work_landing_page_data.services = [];


                work_landing_page_data = this.state.doc.results[i].data.body;
                global_thumbnail_aspect_ratio = this.state.doc.results[i].data.global_thumbnail_aspect_ratio;

                console.log("WORK LANDING PAGE --------- " + global_thumbnail_aspect_ratio);
            }




        }







          return (
            <div>




                    <WorkHeader projects={all_projects} work_landing_page_data={work_landing_page_data} global_thumbnail_aspect_ratio={global_thumbnail_aspect_ratio}/>





            </div>
          )
     } else {
       return (
         <h1>loading</h1>
       )

     }

  }

}
