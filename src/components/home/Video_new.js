import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import $ from 'jquery';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import VideoCopy from './VideoCopy';
import { Player } from 'video-react';
import hero_video_mp4 from './1A_landing_page_video_1.mp4';
import hero_video_webm from './1A_landing_page_video_1.webm';

/**
 * This is a quote component used on the case study page
 */

 const video_youtube = " https://r5---sn-n4v7sne7.googlevideo.com/videoplayback?id=o-AH_EilnJdGAP-LEsrEzcyP28yL5qLDHl5o9zrXzn-JLC&ms=au,onr&expire=1523924642&mt=1523902989&initcwndbps=1778750&mv=m&ei=QurUWs_7IZTu-wPH-aiIDg&itag=22&signature=A2343E3B8718B049C4977A17A5943ADADC6F795F.99BE143264CBDF66AB9CD833F9F0E0D242CC27AC&ipbits=0&mime=video/mp4&ip=173.11.90.25&mm=31,26&mn=sn-n4v7sne7,sn-a5meknlz&ratebypass=yes&fvip=5&pl=18&dur=41.935&source=youtube&c=WEB&sparams=dur,ei,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,pl,ratebypass,requiressl,source,expire&key=yt6&requiressl=yes&lmt=1523902852955081"
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



      let aspect_ratio = $(window).width()/ $(window).height();




  }
  componentDidMount() {



    this.$el = $(this.el);

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






    console.log(this.props.video);
    const intro_font_color = {

      color: this.props.intro_font_color
    }






    return (



      <div ref={el => this.el = el} className="video">

            <div style={this.state.video_style} className="video-container">
                  <video playsinline="true" autoPlay muted loop className="embedded-video" height="1080" width="1920">
                        {  /*<source src={hero_video_webm} type="video/webm"/>*/}
                          <source src={video_youtube} type="video/mp4"/>

                  </video>
                </div>

      <div className="video-glow"></div>

      <div className="home-hero-copy">
        <div className="container-fluid no-gutters">

          <div className="col-sm-10 col-md-8 offset-md-1 col-lg-8 col-xl-6">

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
