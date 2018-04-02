import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import $ from 'jquery';
import { ParallaxProvider, Parallax } from 'react-skrollr';
import VideoCopy from './VideoCopy';
import { Player } from 'video-react';
import hero_video from './gaby_brink_final_1.mp4';

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


        }






    }
  }
  handleResize(){


      this.$el.css({
        height:($(window).width()/this.state.aspect_ratio),
        border:"0px solid red"
      })



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

    let line_1_animation = `@keyframes line_1_animation{
    0% {
      opacity: 0;
      transform:translateY(200px);

    }

    50%{
          opacity: 1;
          transform:translateY(0px);
    }
    100%{

          opacity: 0;
          transform:translateY(-200px);
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
    styleSheet.insertRule(line_1_animation, styleSheet.cssRules.length);
    styleSheet.insertRule(line_2_animation, styleSheet.cssRules.length);

      let line_1 = {



        animationName: "line_1_animation",
        animationDuration: '5s',
        animationIterationCount:'1',
        transform:'translateY(-200px)',
        opacity:0

      }

      let line_2 =  {
          border:"0px solid green",

          animationName: "line_2_animation",
          animationDuration: '5s',
          animationDelay:'4s',
          display:"inline-block",
          border:"0px solid red",

          animationIterationCount:'1',
            opacity:0,
            animationFillMode: 'forwards',




      }

      let p_style= {
        marginLeft:'auto',
        marginRight:'auto',
        border:'0px solid red'

      }





    console.log(this.props.video);
    const intro_font_color = {

      color: this.props.intro_font_color
    }

    let a = this.props.video.html;
    let width =  this.props.video.width;
    let height =  this.props.video.height;
    this.state.aspect_ratio = width/height;


    let i_frame_height = {

      paddingBottom:100/this.state.aspect_ratio+'%',


    }
    const video_html = '<iframe src="https://player.vimeo.com/video/262473206?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0"  frameborder="0"></iframe>';

    console.log("COPY " + this.props.video_overlay_copy)
      console.log(this.props.video_overlay_copy[0])
    return (



      <div ref={el => this.el = el} className="video">

      <div  style={this.state.video_style} >



                  <video autoPlay muted loop className="embedded-video">
                            <source src={hero_video} type="video/mp4"/>
                    </video>








      </div>

      <div className="video-glow">dd</div>

      <div className="home-hero-copy">
        <div className="container-fluid no-gutters">

          <div className="col-8 offset-1 ">

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
