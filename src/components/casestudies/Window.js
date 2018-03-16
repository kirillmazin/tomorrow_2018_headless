import React, { Component } from 'react';
import $ from 'jquery';
import Reveal from 'react-reveal/Reveal';

class Window extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bg: "100% 100%", aspect_ratio: 2};

  }
  determineBGResizing(){
    let window_width = $( window ).width();
    let window_height = $( window ).height();
    let window_apect_ratio = window_width/ window_height;
    if(window_apect_ratio < this.state.aspect_ratio){

      return "auto 100%";
    } else {

      return "100% auto";
    }
  }
  handleResize(){




    let window_height = $( window ).height();

    let window_width = $( window ).width();

      /** if not mobile */


      if(window_width > 768){
          this.$el.css({"height":window_height})
          this.$el2.css({"height":window_height})

    }

    /** mobile */

    if(window_width <= 768){
        window_height = 600;
        this.$el.css({"height":'auto'})
        this.$el2.css({"height":window_height})

    }


      this.$el2.css({"background-size":this.determineBGResizing()})
  }

  componentDidMount() {



    this.$el = $(this.el);
    this.$el2 = $(this.el2);
    this.$el2.css({"border": "0px solid green"})
    this.$el2.css({"background-size":this.determineBGResizing(),opacity:1,transform: 'scale(' + 1 + ')'})



    $( window ).resize(
      ()=>this.handleResize()
    );


  this.handleResize();
  }

  componentWillUnmount() {
    /*this.$el.somePlugin('destroy');*/
  }

  render() {
      const effect = "slideInUpCustom";
      const style = {

        backgroundImage: "url(" + this.props.image + ")",
        border:"0px solid red",
        backgroundSize:"50% 50%",
        opacity:0,
        transform: 'scale(' + 1.2 + ')'


    }



      return (

      <div className="case-study-hero" ref={el => this.el = el} >
        <div className="case-study-image" ref={el => this.el2 = el} style={style} ></div>
        <div className="container-fluid no-gutters">

         <div className="case-study-header col-sm-12 col-md-10 offset-md-1">
              <Reveal effect="fadeInUpCustom">
              <div className="header-type">
               <h4>{this.props.subtitle}</h4>
               <h1>{this.props.title}</h1>
               </div>
               </Reveal>
           </div>

       </div>


      </div>


    )
    }
}
export default Window;
