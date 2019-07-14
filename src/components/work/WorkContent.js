import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Intro from './Intro';
import Menu from '../_globals/Menu';
import Loading from '../_globals/Loading';
import Filters from './Filters';
import ProjectGrid from './ProjectGrid';
import ProjectGridFeatured from './ProjectGridFeatured';
import Services from './Services';
import Clients from './Clients';
import Recognition from './Recognition';
import Footer from '../_globals/Footer.js';
import $ from 'jquery';
/**
 * This is a quote component used on the case study page
 */
class WorkContent extends Component {


  constructor(props) {
    super(props);

    this.state = {
      screen_percentage: .9,
      selected:"Everything",
      headerHeight:{
        "height":0
      }
    };
  }




  componentDidMount() {





    this.$content_container = $(this.content_container);




    this.$header_color = $(this.header_color );




    this.$header_color.css({


      "backgroundColor":this.props.background_color,


    })















  }

  getFeaturedCaseStudies(featured_case_studies){



    if(featured_case_studies.length > 0){
      return(
        <div className="container-fluid featured-projects">

                <div className="col-12 col-lg-10 offset-lg-1">
                    <ProjectGridFeatured projects={this.props.projects} show={this.state.selected} featured_case_studies={featured_case_studies} aspect_ratio={this.props.global_thumbnail_aspect_ratio}/>
                </div>

        </div>


      )

    } else {

      return "";
    }
  }


  getServicesModule(services_visible, items, featured_case_studies){

    if(services_visible){
      return (


  <div className="services-wrapper">
    <div className="container-fluid">


                <Services scope={items} />



  </div>
              </div>



    )
  } else {
    return "";
  }

  setTimeout(this.handleResize(),1000);
  }
  handleTagClick(value){

    window.location = value;




  }

  getRecognitionModule(state, title, images){
    if(state){
      return <Recognition title={title} images={images}/>
    }
    else {
      return "";
    }

  }


  getClientsModule(state, title, images){


    if(state){
      return <Clients title={title} images={images}/>
    }
    else {
      return "";
    }
  }


  onMenuExpand(value){








  }
  render() {


    let services = [];
    let featured_case_studies = [];
    let quote = [];


    let items = [];

    let clients_visible = false;
    let clients_data = [];
    let clients_title;

    let recognition_visible = false;
    let recognition_data = [];
    let recognition_title;


    // Services

    let services_visible = false;


    // Quote data




    for(let i=0;i<this.props.work_landing_page_data.length;i++){



        services.slice_type = this.props.work_landing_page_data[i].slice_type;



        if(services.slice_type == "services"){

          services_visible = true;

            for(let l=0;l<this.props.work_landing_page_data[i].items.length;l++){

                services.push(this.props.work_landing_page_data[i].items[l].service_item);
            }
        }


        if(services.slice_type == "quote"){





            quote.quote = this.props.work_landing_page_data[i].primary.quote;
            quote.copy = this.props.work_landing_page_data[i].primary ;


        }

        if(services.slice_type == "featured_case_studies"){


                for(let l=0;l<this.props.work_landing_page_data[i].items.length;l++){
                  var o = {}

                    o.slug = this.props.work_landing_page_data[i].items[l].casestudy.slug;

                    featured_case_studies.push(o);



                }


        }

        if(services.slice_type == "recognition"){



            recognition_visible = true;



            recognition_title = this.props.work_landing_page_data[i].primary.recognition_title[0].text;




            for(let l=0;l<this.props.work_landing_page_data[i].items.length;l++){




                let o = {};

                o.award_logo = this.props.work_landing_page_data[i].items[l].award_logo.url;
                o.award_description = (this.props.work_landing_page_data[i].items[l].award_description[0]!= undefined) ? this.props.work_landing_page_data[i].items[l].award_description[0].text : "";
                o.link = (this.props.work_landing_page_data[i].items[l].link.url!= undefined) ? this.props.work_landing_page_data[i].items[l].link.url : "";


                recognition_data.push(o);

            }




        }

        if(services.slice_type == "clients"){

          clients_visible = true;


          clients_title =  this.props.work_landing_page_data[i].primary.clients_title[0].text;
          for(let l=0;l<this.props.work_landing_page_data[i].items.length;l++){
            let o = {};
              o.client_name  = (this.props.work_landing_page_data[i].items[l].client_name[0]!= undefined) ? this.props.work_landing_page_data[i].items[l].client_name[0].text : "";
              o.client_logo  = this.props.work_landing_page_data[i].items[l].client_logo.url;



              clients_data.push(o);
          }



        }

    };

    let mytext = this.props.page_intro;


      let section_title = this.props.filterBy;
      document.title = "Tomorrow Partners | Work | " +  this.props.filterLabel;

    return (




      <div>

         <Menu ui_color={this.props.ui_color}/>




              <div className="container-fluid header-color" ref={el => this.header_color = el}>

                    <div className="col-12 col-lg-10 offset-lg-1">
                      
                      <Intro className="intro" introtext={mytext} intro_font_color={this.props.intro_font_color} />
                      <Filters all_filters={this.props.all_filters} filterLabel={this.props.filterLabel} filterBy={this.props.filterBy} onMenuExpand={(value) => this.onMenuExpand(value)} onClick={(value) => this.handleTagClick(value)}/>

                    </div>

              </div>






              {this.getFeaturedCaseStudies(featured_case_studies)}


{this.getServicesModule(services_visible, services, featured_case_studies)}





              <ProjectGrid quote={quote} projects={this.props.projects} grid_items_filters={this.props.grid_items_filters} featured_case_studies={featured_case_studies} show={this.state.selected} aspect_ratio={this.props.global_thumbnail_aspect_ratio}/>











            <div className="container-fluid">

              <div className="col-md-12 col-lg-10 offset-lg-1">
                {this.getRecognitionModule(recognition_visible, recognition_title, recognition_data)}
                {this.getClientsModule(clients_visible, clients_title, clients_data)}
                <Footer/>

            </div>
  </div>




      </div>
    );
  }
}

export default WorkContent;
