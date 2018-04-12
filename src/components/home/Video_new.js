import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import $ from 'jquery';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import VideoCopy from './VideoCopy';
import { Player } from 'video-react';
import hero_video_mp4 from './gaby_brink_final_4.mp4';
import hero_video_ogv from './gaby_brink_final_3_1.ogv';
/**
 * This is a quote component used on the case study page
 */
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
                  <video autoPlay muted loop className="embedded-video">
                          <source src={hero_video_mp4} type="video/mp4"/>
                          <source src={hero_video_ogv} type="video/ogv"/>
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
