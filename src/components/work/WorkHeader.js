import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Intro from './Intro';
import Menu from '../_globals/Menu';
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
      selected:"Everything"
    };
  }

  handleResize(){




    let window_height = $( window ).height();





      this.$el.css(
        {"height":window_height*this.state.screen_percentage,
          "backgroundColor":this.props.background_color
      }
        )

      this.$el_2.css(
        {
          "border": "0px solid #FC7753",
          "height":this.$el_3.height()+100+'px'







        })

  }


  componentDidMount() {



    this.$el = $(this.el);
    this.$el_2 = $(this.el_2);
    this.$el_3 = $(this.el_3);
    this.$el.css(
      {
        "border": "0px solid #FC7753",
        "height":0+'px'





      }




  )




  this.$el_2.css(
    {
      "border": "0px solid #FC7753",
      "height":this.$el_3.height()+100+'px',
      "position": "absolute",
      "backgroundColor":"#ffffff",
      "width":'100%'





    })

    this.$el_3.css(
      {
        "border": "0px solid #FC7753"






      })




    $( window ).resize(
      ()=>this.handleResize()
    );

      this.handleResize();
  }
  renderServices(items, featured_case_studies){
      return (
        <div>
        <div ref={el => this.el_2 = el}>

        </div>
        <div className="col-10 offset-1">
        <div ref={el => this.el_3 = el}>
          <Services scope={items} />
        </div>

          <ProjectGrid projects={this.props.projects} grid_items_filters={this.props.grid_items_filters} featured_case_studies={featured_case_studies} show={this.state.selected} aspect_ratio={this.props.global_thumbnail_aspect_ratio}/>
      </div>
      </div>

    )



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
  render() {


    let services = [];
    let featured_case_studies = [];


    let items = [];
    let clients = false;
    let clients_data = [];
    let clients_title;

    for(let i=0;i<this.props.work_landing_page_data.length;i++){



        services.slice_type = this.props.work_landing_page_data[i].slice_type;

        if(services.slice_type == "services"){



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

          clients = true;

        //  console.log(" +++++ WE HAVE CLIENTS ");
        //  console.log();
          clients_title =  this.props.work_landing_page_data[i].primary.clients_title[0].text;
          for(let l=0;l<this.props.work_landing_page_data[i].items.length;l++){
            let o = {};
              o.client_name  = this.props.work_landing_page_data[i].items[l].client_name[0].text;
              o.client_logo  = this.props.work_landing_page_data[i].items[l].client_logo.url;

              //console.log(this.props.work_landing_page_data[i].items[l].client_logo.url);
            //  console.log(this.props.work_landing_page_data[i].items[l].client_name[0].text);

              clients_data.push(o);
          }



        }

    };
  //  console.log("?????????? " + this.props.work_landing_page_data);
  //  console.log(this.props.work_landing_page_data);
    let mytext = this.props.page_intro;

    return (




      <div>
        <Menu/>
        <div className="workheader" ref={el => this.el = el}>



            <div className="container-fluid">
              <div className="col-7 offset-1">
                <Intro className="intro" introtext={mytext} intro_font_color={this.props.intro_font_color}/>
                <Filters all_filters={this.props.all_filters} filterLabel={this.props.filterLabel} filterBy={this.props.filterBy} onClick={(value) => this.handleTagClick(value)}/>

              </div>
            </div>



            <div className="container-fluid">


              <div className="col-10 offset-1">
                <ProjectGridFeatured projects={this.props.projects} show={this.state.selected} featured_case_studies={featured_case_studies} aspect_ratio={this.props.global_thumbnail_aspect_ratio}/>
                </div>
              </div>


            {this.renderServices(services, featured_case_studies)}
            <div className="container-fluid col-10  offset-1">

            {this.getClientsModule(clients, clients_title, clients_data)}
            <Footer/>
            </div>



          </div>

      </div>
    );
  }
}
/** @component */
export default WorkHeader;
