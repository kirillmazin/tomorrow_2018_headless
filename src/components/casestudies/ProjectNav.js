import React, { Component } from 'react';

import $ from 'jquery';
import Prismic from 'prismic-javascript';
import Slider from "react-slick";
import { Link} from 'react-router-dom';
import Filters from './Filters';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import ProjectNavTile from './ProjectNavTile';
// Declare your component

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,  right: "-50px",  top: "40%",    height:"100%"}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "-50px",top: "40%", height:"100%"}}
      onClick={onClick}
  /  >
  );
}



export default class ProjectNav extends React.Component {
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

  processData (data, type){
    let processed_data=[];


    for(let i=0;i<data.length;i++){

      let o ={};
      o.type = data[i].type;


    // casestudy

    if(o.type  == "casestudy" && type == "casestudy"){

      o.uid = data[i].uid;
      o.type = data[i].type;

      o.title = data[i].data.title[0].text;
      o.thumbnail_image = data[i].data.thumbnail_image;





      processed_data.push(o);
    }




  }


    return processed_data;


  }

  getFilters(data){
      let processed_data=[];
      for(let i=0;i<data.length;i++){

        let o ={};
        o.type = data[i].type;

        if(o.type  == "work_landing_page"){

          o.uid = this.state.doc.results[i].uid;
          o.filter = this.state.doc.results[i].data.filter_by_tag[0].text;

          processed_data.push(o);
        }

      }

      return processed_data;

  }

  renderProjectsNew(data){

    let all_projects = [];
      for(let i=0;i<data.length;i++){
        if(this.props.current_project != data[i].uid){


        let thumbnail_source = {
          backgroundImage: "url(" + data[i].thumbnail_image.url + ")"
        }




          all_projects.push(
              <ProjectNavTile data={data[i]}/>
            )

      }


      }

      return all_projects;
  }

  renderProjects(data){

    let all_projects = [];
      for(let i=0;i<data.length;i++){
        if(this.props.current_project != data[i].uid){


        let thumbnail_source = {
          backgroundImage: "url(" + data[i].thumbnail_image.url + ")"
        }




          all_projects.push(
            <a href={"/project/"  + data[i].uid}>
            <div className="project_tile">

              <div className="thumbnail_image" style={this.state.tile_size}>
                <div className="thumbnail_source" style={thumbnail_source} >

                </div>
              </div>
                <h3>{data[i].title}</h3>
              </div>
              </a>
            )

      }


      }

      return all_projects;
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
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1

          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows:false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
              arrows:false,
            slidesToShow: 2,
            slidesToScroll: 1



          }
        }
      ]
    };

    let all_projects = [];
    let data;
    let type;
    let all_filters = [];
    let all_o = [];
    let o = {};
        if (this.state.doc) {



            data = this.state.doc.results;
            all_projects = this.processData(data, "casestudy");
            all_filters = this.getFilters(data, "work_landing_page");

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





           for(let i=0; i<all_filters.length;i++){
               if(all_filters[i].filter == "Everything"){
                  o = all_filters.splice(i, 1)[0];
                 all_o[0] = o;
               }
               if(all_filters[i].filter == "Strategy"){
                   o =  all_filters.splice(i, 1)[0];
                   all_o[1] = o;
               }
               if(all_filters[i].filter == "Brand"){
                   o =  all_filters.splice(i, 1)[0];
                   all_o[2] = o;

               }

               if(all_filters[i].filter == "Digital"){
                     o =  all_filters.splice(i, 1)[0];
                     all_o[3] = o;

               }

           }


           all_o = all_o.concat(all_filters);


            }
return (


  <div className="project-nav-module">

    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-12 col-md-10 offset-md-1">
        <Reveal effect="fadeInUpCustom">
        <Slider {...settings}>

              {this.renderProjectsNew(all_projects)}

         </Slider>
         </Reveal>
         <div>

         </div>
           <Reveal effect="fadeInUpCustom">
          <Filters filters={all_o} filterLabel={"more"} />
           </Reveal>
         </div>

    </div>

  </div>
  </div>
);
  }

}
