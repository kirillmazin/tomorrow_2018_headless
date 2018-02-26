import React, { Component } from 'react';
import $ from 'jquery';
import Fade from 'react-reveal/Fade';

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




    console.log('height ' + this.determineBGResizing());
      this.$el.css({"height":window_height})
      this.$el2.css({"background-size":this.determineBGResizing()})
  }

  componentDidMount() {



    this.$el = $(this.el);
    this.$el2 = $(this.el2);
    this.$el.css({"border": "0px solid green","height":$( window ).height()})
    this.$el2.css({"background-size":this.determineBGResizing()})



    $( window ).resize(
      ()=>this.handleResize()
    );
  /*  this.$el.somePlugin();*/
  }

  componentWillUnmount() {
    /*this.$el.somePlugin('destroy');*/
  }

  render() {
      const effect = "slideInUpCustom";
      const style = {

        backgroundImage: "url(" + this.props.image + ")"
    }



      return (

      <div className="case-study-hero" ref={el => this.el = el} >
        <div className="case-study-image" ref={el => this.el2 = el} style={style} ></div>
        <div className="container">

         <div className="case-study-header">
              <Fade bottom>
               <h4>{this.props.subtitle}</h4>

               <h1>{this.props.title}</h1>
               </Fade>
           </div>

       </div>


      </div>


    )
    }
}
export default Window;
