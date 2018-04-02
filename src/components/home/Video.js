import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import $ from 'jquery';
import { ParallaxProvider, Parallax } from 'react-skrollr'
import VideoCopy from './VideoCopy'

/**
 * This is a quote component used on the case study page
 */
class Video extends Component {

  constructor(props){
    super(props);

    console.log()
    console.log(this.props.video_overlay_still)


    this.state = {
        visibility: this.props.visibility,
        doc: null,
        notFound: false,
        video_overlay_copy: this.props.video_overlay_copy,
        video_style:{
          height:$( window ).height(),
          backgroundImage: "url(" + this.props.video_overlay_still + ")",
          backgroundSize:"cover",
          filter: 'grayscale(.6) brightness(.7)',

          mixBlendMode: 'overlay'
        }






    }
  }
  handleResize(){
      this.setState(
        {
          height:$(window).height()

        }
      )

      this.$el.css({
        "height":$(window).height()}
      )

      this.$background_image.css({
        "height":$(window).height()}
      )

  }
  componentDidMount() {



    this.$el = $(this.el);

    this.$background_image = $(this.background_image);

    $( window ).resize(
      ()=>this.handleResize()
    );


  this.handleResize();
  }

  get_video_copy(id){
    let video_modules = [];



          video_modules.push(this.state.video_overlay_copy[id])



    return video_modules;
  }
  render() {


    let styleSheet = document.styleSheets[0];

    let line_1_animation = `@keyframes line_1_animation{
    0% {
      opacity: 0;
      transform:translateY(100px);

    }

    50%{
          opacity: 1;
          transform:translateY(0px);
    }
    100%{

          opacity: 0;
          transform:translateY(-100px);
    }

  }
    `


    let line_2_animation = `@keyframes line_2_animation{
      0% {
        opacity: 0;
        transform:translateY(100px);

      }
      50% {
          opacity: 1;
          transform:translateY(-100px);

      }

      100%{
            transform:translateY(-100px);
            opacity: 1;

      }

  }
    `
    styleSheet.insertRule(line_1_animation, styleSheet.cssRules.length);
    styleSheet.insertRule(line_2_animation, styleSheet.cssRules.length);

      let line_1 = {

        border:"0px solid pink",
        textAlign:"center",
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
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft:"50px"
      }

      let p_style= {
        marginLeft:'auto',
        marginRight:'auto',
        border:'0px solid red'

      }





    console.log();
    const intro_font_color = {

      color: this.props.intro_font_color
    }

    let a = this.props.video.html;
    let width =  this.props.video.width;
    let height =  this.props.video.height;
    let a_r = width/height;
    let i_frame_height = {

      border:"0px solid red",
      paddingBottom:100/a_r+'%',
    }
    return (



<div ref={el => this.el = el} >
        <div  ref={el => this.background_image = el} style={this.state.video_style} className="video">

        </div>



        <div className="container-fluid">
          <div className="row align-items-center no-gutters">
            <div className="col-8 offset-2 intro-video">

                <div style={line_1} >{this.get_video_copy(0)}</div>
                <div style={line_2}><p style={p_style}>{this.get_video_copy(1)}</p></div>

              </div>


          </div>



          <div className="container-fluid">
            <div className="no-gutters row">
                <div className="col-12 case-study-video" style={i_frame_height}>
                  <div dangerouslySetInnerHTML={{__html: this.props.video.html}}></div>
            </div>
          </div>


      </div>
        </div>
</div>

    );
  }
}
/** @component */
export default Video;
