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
import Footer from '../_globals/Footer.js';
import $ from 'jquery';
/**
 * This is a quote component used on the case study page
 */
class WorkHeader extends Component {


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

  handleResize(){




    let window_height = $( window ).height();
    let padding_top = parseInt(this.$el.css("paddingTop"));
    let height = this.$content_container.height();
    //height = this.$el.height();

    let t = height+padding_top;





    let top_margin = 0;




/* services */


      this.$el_2.css(
        {

          "height":this.$el_3.height()+100+'px'







        })

  }


  componentDidMount() {



    this.$el = $(this.el);
    this.$el_2 = $(this.el_2);
    this.$el_3 = $(this.el_3);

    this.$content_container = $(this.content_container);
    this.$color_header = $(this.color_header);

    this.$fc = $(this.featured_projects_container);

    this.$header_color = $(this.header_color );




    this.$header_color.css({


      "backgroundColor":this.props.background_color,


    })
/*
    this.$fc.css({


      "background": `linear-gradient(${this.props.background_color}, ${this.props.background_color})`,
      "backgroundSize":"1px 100px",
      "backgroundRepeat":"repeat-x"


    })*/

  /*  this.$color_band = $(this.color_band);*/

    /*
    this.$color_band.css({
      height: this.$fc.position().top,

      "backgroundColor":this.props.background_color

    })*/

  /*  this.$el.css(
      {

        "height":0+'px'





      }




  )*/




  this.$el_2.css(
    {

      "height":this.$el_3.height()+100+'px',
      "position": "absolute",
      "backgroundColor":"#ffffff",
      "width":'100%'





    })

    this.$el_3.css(
      {







      })




    $( window).resize(
      ()=>this.handleResize()
    )

    this.handleResize();


  }
  getServicesModule(services_visible, items, featured_case_studies){

    if(services_visible){
      return (

              <div ref={el => this.el_3 = el}> <Services scope={items} /> </div>


    )
  } else {
    return "";
  }

  setTimeout(this.handleResize(),1000);
  }
  handleTagClick(value){

    window.location = value;




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


    let padding_top = parseInt(this.$el.css("paddingTop"));
    let height = this.$content_container.height();





  }
  render() {


    let services = [];
    let featured_case_studies = [];


    let items = [];

    let clients_visible = false;
    let clients_data = [];
    let clients_title;

    // Services

    let services_visible = false;


    for(let i=0;i<this.props.work_landing_page_data.length;i++){



        services.slice_type = this.props.work_landing_page_data[i].slice_type;

        if(services.slice_type == "services"){

          services_visible = true;

            for(let l=0;l<this.props.work_landing_page_data[i].items.length;l++){

                services.push(this.props.work_landing_page_data[i].items[l].service_item);
            }
        }

        if(services.slice_type == "featured_case_studies"){


                for(let l=0;l<this.props.work_landing_page_data[i].items.length;l++){
                  var o = {}

                    o.slug = this.props.work_landing_page_data[i].items[l].casestudy.slug;
                    o.offset = this.props.work_landing_page_data[i].items[l].px_top_offset;
                    featured_case_studies.push(o);


                }


        }

        if(services.slice_type == "clients"){

          clients_visible = true;

        //  console.log(" +++++ WE HAVE CLIENTS ");
        //  console.log();
          clients_title =  this.props.work_landing_page_data[i].primary.clients_title[0].text;
          for(let l=0;l<this.props.work_landing_page_data[i].items.length;l++){
            let o = {};
              o.client_name  = (this.props.work_landing_page_data[i].items[l].client_name[0]!= undefined) ? this.props.work_landing_page_data[i].items[l].client_name[0].text : "";
              o.client_logo  = this.props.work_landing_page_data[i].items[l].client_logo.url;



              clients_data.push(o);
          }



        }

    };
  //  console.log("?????????? " + this.props.work_landing_page_data);
  //  console.log(this.props.work_landing_page_data);
    let mytext = this.props.page_intro;
        this.setState();
    return (




      <div>
        <Menu/>

        <div className="workheader" ref={el => this.el = el}>



            <div className="container-fluid no-gutters header-color" ref={el => this.header_color = el}>

              <div className="col-md-12 col-lg-10 offset-lg-1">
                  
                  <Intro className="intro" introtext={mytext} intro_font_color={this.props.intro_font_color} />
                  <Filters all_filters={this.props.all_filters} filterLabel={this.props.filterLabel} filterBy={this.props.filterBy} onMenuExpand={(value) => this.onMenuExpand(value)} onClick={(value) => this.handleTagClick(value)}/>

              </div>
            </div>





            <div className="container-fluid no-gutters featured-projects work-casestudies" ref={el => this.featured_projects_container = el}>


              <div className="col-md-12 col-lg-10 offset-lg-1" >

                <ProjectGridFeatured projects={this.props.projects} show={this.state.selected} featured_case_studies={featured_case_studies} aspect_ratio={this.props.global_thumbnail_aspect_ratio}/>
                </div>
              </div>



            <div>

              <div ref={el => this.el_2 = el}> </div>
                  <div className="no-gutters col-md-12 col-lg-10 offset-lg-1 work-casestudies">
                  {this.getServicesModule(services_visible, services, featured_case_studies)}



                            <ProjectGrid projects={this.props.projects} grid_items_filters={this.props.grid_items_filters} featured_case_studies={featured_case_studies} show={this.state.selected} aspect_ratio={this.props.global_thumbnail_aspect_ratio}/>
                  </div>

                  </div>

            <div className="container-fluid no-gutters">
              <div className="col-md-12 col-lg-10 offset-lg-1" >
                {this.getClientsModule(clients_visible, clients_title, clients_data)}
                <Footer/>
              </div>
            </div>



          </div>

      </div>
    );
  }
}
/** @component */
export default WorkHeader;
