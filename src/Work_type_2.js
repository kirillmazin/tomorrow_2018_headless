import React from 'react';
import NotFound from './NotFound';
import $ from 'jquery';
import Prismic from 'prismic-javascript';

import styles from './work.css'
import Tag from './components/work/Tag';
import Tags from './components/work/Tags';
import Menu from './components/_globals/Menu.js';
import Footer from './components/_globals/Footer.js';
// Declare your component
export default class Work2 extends React.Component {
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


          Prismic.Predicates.at('document.type', 'casestudy'),
          { orderings : '[casestudy.date desc]' }
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
        console.log("")
        console.log(this.state.doc)
        let cms_data = [];
        let all_areas_of_expertise = ["Everything"];
        let all_projects = []




        this.state.numberOfProjects = this.state.doc.results.length;


        for(let i=0;i<this.state.doc.results.length;i++){


            let project_data = {};
            project_data.title = this.state.doc.results[i].data.title[0].text;
            project_data.subtitle =  this.state.doc.results[i].data.subtitle[0] != undefined ? this.state.doc.results[i].data.subtitle[0].text : '';
            project_data.hero_image = this.state.doc.results[i].data.hero_image.url;
            project_data.uid = this.state.doc.results[i].uid;
            project_data.area_of_expertise = [];

              console.log("subtitle " + project_data.subtitle);

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







          return (
            <div>
            <Menu/>
              <div className="work">


                      <h1>zzzzZ</h1>
                    <Tags elements={all_areas_of_expertise} projects={all_projects} />
                    <div className="container">
                      <Footer/>
                    </div>

              </div>

            </div>
          )
     } else {
       return (
         <h1>loading</h1>
       )

     }

  }

}
