import React from 'react';
import NotFound from './NotFound';
import $ from 'jquery';
import Prismic from 'prismic-javascript';

import styles from './work.css'
import Tag from './components/work/Tag';
import Loading from './components/_globals/Loading.js';
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
  componentDidMount(){
      window.scrollTo(0, 0);
  }
  componentDidUpdate() {
  //  this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
      if (props.prismicCtx) {
      // We are using the function to get a document by its uid

      return props.prismicCtx.api.query(


          Prismic.Predicates.any('document.type', ['casestudy','work_landing_page']),{ pageSize : 100}


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





        let cms_data = [];
        let all_areas_of_expertise = [];
        let all_projects = []

        let work_landing_page_data = [];
        let global_thumbnail_aspect_ratio;
        let filterBy;
        let filterLabel;
        let work_uid;
        let page_intro = "";
        let background_color;
        let intro_font_color;
        let all_filters = [];
        let areas_of_expertise_to_include = [];
        let ui_color;

        this.state.numberOfProjects = this.state.doc.results.length;


        for(let i=0;i<this.state.doc.results.length;i++){
          let type = this.state.doc.results[i].type;


            if(type == "casestudy"){

            let project_data = {};

          //  console.log("DATA %%%%%");
          //  console.log(this.state.doc.results[i]);
          //  console.log(" slugs " + this.state.doc.results[i].slugs);






            project_data.slug = this.state.doc.results[i].slugs;
            project_data.title = this.state.doc.results[i].data.title[0].text;
            project_data.subtitle =  this.state.doc.results[i].data.subtitle[0] != undefined ? this.state.doc.results[i].data.subtitle[0].text : '';
            project_data.hero_image = this.state.doc.results[i].data.hero_image.url;

            project_data.thumbnail_image = this.state.doc.results[i].data.thumbnail_image.url;




            project_data.offset = (this.state.doc.results[i].data.px_top_offset != undefined || this.state.doc.results[i].data.px_top_offset != null)? this.state.doc.results[i].data.px_top_offset : 0 ;


        //    console.log("offset")
        //        console.log(project_data.offset)
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
              let o = {};


            let a = $.unique(all_areas_of_expertise);


            if(type == "work_landing_page"){



                filterBy = (this.props.match.params.uid == undefined) ? 'everything' : this.props.match.params.uid;

                work_landing_page_data.services = [];





                //work_landing_page_data = this.state.doc.results[i].data.body;



                global_thumbnail_aspect_ratio = this.state.doc.results[i].data.global_thumbnail_aspect_ratio;


                o.uid = this.state.doc.results[i].uid;
                o.filter = this.state.doc.results[i].data.filter_by_tag[0].text;



                if(filterBy == o.uid){

                  filterLabel = o.filter;




                  for(let m=0;m<this.state.doc.results[i].data.areas_of_expertise_to_include.length;m++){
                    //console.log(this.state.doc.results[i].data.areas_of_expertise_to_include[m].area_of_expertise);
                    areas_of_expertise_to_include.push(this.state.doc.results[i].data.areas_of_expertise_to_include[m].area_of_expertise);

                  }
                  work_landing_page_data = this.state.doc.results[i].data.body;
                  page_intro = this.state.doc.results[i].data.page_intro[0].text;
                  background_color = this.state.doc.results[i].data.background_color;
                  intro_font_color = this.state.doc.results[i].data.intro_font_color;

                  ui_color = this.state.doc.results[i].data.tomorrow_logo_color != null ? this.state.doc.results[i].data.tomorrow_logo_color : "#ffffff";




                }





                all_filters.push(o);


            }



        }


        function compare(a,b){
          const filterA = a.uid.toUpperCase();
          const filterB = b.uid.toUpperCase();

          let comparison = 0;
          if(filterA > filterB){
              comparison = 1;
          } else if (filterA < filterB) {
              comparison = -1;
            }

            return comparison;
        }

        all_filters.sort(compare);
        let all_o = [];
        let o = {};
        for(let i=0; i<all_filters.length;i++){
            if(all_filters[i].filter == "Everything"){
               o = all_filters.splice(i, 1)[0];
              all_o[0] = o;
            }
            if(all_filters[i].filter == "Strategy"){
                o =  all_filters.splice(i, 1)[0];
                all_o[1] = o;
            }

            if(all_filters[i].filter == "Digital"){
                o =  all_filters.splice(i, 1)[0];
                  all_o[2] = o;

            }
            if(all_filters[i].filter == "Brand"){
                o =  all_filters.splice(i, 1)[0];
                all_o[3] = o;

            }
        }



        all_o = all_o.concat(all_filters);


          return (
            <div>




        <WorkHeader ui_color={ui_color} grid_items_filters={areas_of_expertise_to_include} all_filters={all_o} intro_font_color={intro_font_color} background_color={background_color} filterLabel={filterLabel} filterBy={filterBy} page_intro={page_intro} projects={all_projects} work_landing_page_data={work_landing_page_data} global_thumbnail_aspect_ratio={global_thumbnail_aspect_ratio}/>





            </div>

          )
     } else {
       return (
             <div/>
       )

     }

  }

}
