import React, { Component } from 'react';

import $ from 'jquery';
import Prismic from 'prismic-javascript';
import Slider from "react-slick";
import { Link} from 'react-router-dom'
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

  getProjects(data){
    let processed_data=[];
    for(let i=0;i<data.length;i++){
      let o ={};
    //  console.log(data[i])
      o.uid = data[i].uid;
      o.title = data[i].data.title[0].text;
      o.thumbnail_image = data[i].data.thumbnail_image;

      console.log(o.thumbnail_image.url);

  //    console.log("----------");
  //    console.log(o);

      processed_data.push(o);

    }


    return processed_data;


  }

  renderProjects(data){

    let all_projects = [];
      for(let i=0;i<data.length;i++){



        let thumbnail_source = {
          backgroundImage: "url(" + data[i].thumbnail_image.url + ")"
        }




          all_projects.push(
            <Link to={"/project/"  + data[i].uid}>
            <div className="project_tile">

              <div className="thumbnail_image">
                <div className="thumbnail_source" style={thumbnail_source}>

                </div>
              </div>
                <h3>{data[i].title}</h3>
              </div>
              </Link>
            )
      }

      return all_projects;
  }

  fetchPage(props) {
      if (props.prismicCtx) {
      // We are using the function to get a document by its uid

      return props.prismicCtx.api.query(


          Prismic.Predicates.any('document.type', ['casestudy']),{ pageSize : 100}


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
            slidesToShow: 2,
            slidesToScroll: 1



          }
        }
      ]
    };

    let all_projects = [];
    let data;
        if (this.state.doc) {



            data = this.state.doc.results;
            all_projects = this.getProjects(data);







            }
return (


  <div className="project-nav-module component-margin">

    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1">
        <Slider {...settings}>

              {this.renderProjects(all_projects)}

         </Slider>
         </div>
         </div>

  </div>
  </div>
);
  }

}
