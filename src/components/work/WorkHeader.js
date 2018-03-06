import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Intro from './Intro';
import Menu from '../_globals/Menu';
import Filters from './Filters';
import ProjectGrid from './ProjectGrid';
import ProjectGridFeatured from './ProjectGridFeatured';
import Services from './Services';
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





      this.$el.css({"height":window_height*this.state.screen_percentage})

      this.$el_2.css(
        {
          "border": "0px solid #FC7753",
          "height":this.$el_3.height()+100+'px',







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

          <ProjectGrid projects={this.props.projects} featured_case_studies={featured_case_studies} show={this.state.selected} aspect_ratio={this.props.global_thumbnail_aspect_ratio}/>
      </div>
      </div>

    )



  }
  handleTagClick(value){

    window.location = value;

  }
  render() {


    let services = [];
    let featured_case_studies = [];
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

    };
    console.log("?????????? " + this.props.work_landing_page_data);
    console.log(this.props.work_landing_page_data);
    let mytext = this.props.page_intro;
  
    return (




      <div>
        <Menu/>
        <div className="workheader" ref={el => this.el = el}>



            <div className="container-fluid">
              <div className="col-7 offset-1">
                <Intro className="intro" introtext={mytext}/>
                <Filters filterBy={this.props.filterBy} onClick={(value) => this.handleTagClick(value)}/>
              </div>
            </div>



            <div className="container-fluid">


              <div className="col-10 offset-1">
                <ProjectGridFeatured projects={this.props.projects} show={this.state.selected} featured_case_studies={featured_case_studies} aspect_ratio={this.props.global_thumbnail_aspect_ratio}/>
                </div>
              </div>


            {this.renderServices(services, featured_case_studies)}





          </div>
      </div>
    );
  }
}
/** @component */
export default WorkHeader;
