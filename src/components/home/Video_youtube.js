import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import $ from 'jquery';
import hero_video_mp4 from './3_landing_page_video.mp4';
import hero_video_webm from './3_landing_page_video.webm';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import YouTube from 'react-youtube';

import ReactPlayer from 'react-player'


class Video extends Component {


  createMarkup() {
  return {__html: this.props.video_embed.html};
}



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


  _onReady(event) {
  // access to player in all event handlers via event.target
  event.target.playVideo();
}



  _onEnd(event) {
  event.target.playVideo();
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
    console.log(this.props.video_embed.html)

    let image =   {
      backgroundImage: "url(" + this.props.still_image + ")",
      backgroundSize:'cover',
      backgroundPosition:'center'}


      const videoOptions = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };


    let outer = {

        padding:'56.25% 0 0 0',
        position:'relative',



    }

    let i_frame_style = {
      position:'absolute',
      top:0,
      left:0,
      width:'100%',
      height:'100%'

    }

    return (



      <div ref={el => this.el = el} className="video-youtube">






    <div style={outer} className="video-container"><iframe src="https://player.vimeo.com/video/268627257?title=0&byline=0&portrait=0&autoplay=1&background=1" style={i_frame_style} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>






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
