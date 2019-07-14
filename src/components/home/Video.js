import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import $ from 'jquery';

import { BrowserView, MobileView, isBrowser, isMobile,isTablet } from "react-device-detect";

class Video extends Component {

  constructor(props){
    super(props);

  

    this.state = {
        visibility: this.props.visibility,

        doc: null,
        notFound: false,
        video_overlay_copy: this.props.video_overlay_copy,
        hero_video:{


        },
        video_style:{



          filter: 'grayscale(0) brightness(.8)  contrast(1)',
           marginRight: 'auto',
           marginLeft: 'auto',
           margin: "0 auto",



        }






    }
  }
  handleResize(){



      let height = $(window).height()-100;



      this.$el.css({
        height:height
      });
      this.$el2.css({
        height:height
      });


      let aspect_ratio = $(window).width()/ $(window).height();




  }
  componentDidMount() {



    this.$el = $(this.el);
this.$el2 = $(this.el2);

    this.$background_image = $(this.background_image);

    $( window ).resize(
      ()=>this.handleResize()
    );


  this.handleResize();


  }


  render() {


    let styleSheet = document.styleSheets[0];

    let welcome_animation = `@keyframes welcome_animation{
    0% {
      opacity: 0;
      transform:translateY(200px);


    }

    50%{
          opacity: 1;
          transform:translateY(100px);
    }

    75%{
          opacity: 1;
          transform:translateY(100px);
    }

    100%{
          opacity: 0;
          transform:translateY(0);

          border:0px solid red;
    }


  }
    `


    let line_2_animation = `@keyframes line_2_animation{
      0% {
        opacity: 0;
        transform:translateY(200px);

      }


      100%{
            transform:translateY(0);
            opacity: 1;

      }

  }
    `
    styleSheet.insertRule(welcome_animation, styleSheet.cssRules.length);
    styleSheet.insertRule(line_2_animation, styleSheet.cssRules.length);

      let line_1 = {



        animationName: "welcome_animation",
        animationDuration: '5s',
        animationIterationCount:'1',
        transform:'translateY(-200px)',
        opacity:0,
          animationFillMode: 'forwards',



      }

      let line_2 =  {


          animationName: "line_2_animation",
          animationDuration: '4s',
          animationDelay:'4s',
          display:"inline-block",
          border:"0px solid red",

          animationIterationCount:'1',
            opacity:0,
            animationFillMode: 'forwards',




      }







    const intro_font_color = {

      color: this.props.intro_font_color
    }


    let image =   {
      backgroundImage: "url(" + this.props.still_image + ")",
      backgroundSize:'cover',
      backgroundPosition:'center'}

     
 
    return (



      <div ref={el => this.el = el} className="video">
          <div  ref={el2 => this.el2 = el2}  className="image-container" style={image}>

          </div>
          
          <BrowserView device={isBrowser}>
            <div style={this.state.video_style} className="video-container">
                  <video playsinline="true" playsinline autoPlay muted loop className="embedded-video" height="1080" width="1920">
                          <source src={this.props.video_hero_webm} type="video/webm"/>
                          <source src={this.props.video_hero_mp4} type="video/mp4"/>

                  </video>
                </div>
          </BrowserView>

          <BrowserView device={isTablet}>
            <div style={this.state.video_style} className="video-container">
                  <video playsinline="true" playsinline autoPlay muted loop className="embedded-video" height="1080" width="1920">
                         <source src={this.props.video_hero_hero_webm} type="video/webm"/>
                          <source src={this.props.video_hero_mp4} type="video/mp4"/>

                  </video>
                </div>
          </BrowserView>




      <div className="home-hero-copy">
        <div className="container-fluid">

          <div className="col-12 col-md-8 offset-lg-1 col-lg-8 col-xl-6  no-gutters">

            <p style={line_1}>
              {this.props.video_overlay_copy[0]}

              </p>
            <p style={line_2}>
              {this.props.video_overlay_copy[1]}

              </p>
        </div>
        </div>

      </div>



</div>




    );
  }
}
/** @component */
export default Video;
