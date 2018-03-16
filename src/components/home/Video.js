import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import $ from 'jquery';
import { ParallaxProvider, Parallax } from 'react-skrollr'
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
          filter: 'grayscale(.6)'
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

  }
  componentDidMount() {



    this.$el = $(this.el);



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

    console.log();
    const intro_font_color = {

      color: this.props.intro_font_color
    }

    return (



<div ref={el => this.el = el} className="video" style={this.state.video_style}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col intro">
                <p>{this.get_video_copy(0)}</p>
                <p>{this.get_video_copy(1)}</p>

              </div>

          </div>
        </div>
</div>

    );
  }
}
/** @component */
export default Video;
