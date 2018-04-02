import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import HighlightCopyLeft from './HighlightCopyLeft'
import HighlightCopyRight from './HighlightCopyRight'

class Government extends Component {

  constructor(props) {
     super(props);
  this.state = {
      animationName: ''

    };
}
  getHighlightAlignment(alignment){
    if(alignment == "Right"){
        return (
          <HighlightCopyLeft copy={this.props.copy}/>

        )

    } else {
      return (
        <HighlightCopyRight copy={this.props.copy}/>
      )

    }
  }

  render() {
    let styleSheet = document.styleSheets[0];
    let animationName = 'yo';

    let keyframes = `@keyframes ${animationName}{
    0% {
      background: #FFD955;

    }
    33% {
      background: #61CEC9;

    }
    66%{
        background: #FC7753;
    }

  }


    `
    let animationSpeed = '20s';
    let max_scale = 1.1;
    let small_scale = .98;
    let small_margin = 30;
    let large_margin = 300;

    let keyframes2 = `@keyframes yo2{
    0% {

      background-image: url(${this.props.images[0]});
      transform: scale(1);
      margin: 0 300rem 0 0rem;
    }



  4% {

      background-image: url(${this.props.images[0]});
      transform: scale(1);
      margin: 0;
      filter: grayscale(1);
    }


    29% {
      background-image: url(${this.props.images[0]});
      transform: scale(${max_scale});
      opacity:1;
      margin: 0 0 0 ${small_margin}rem;
      filter: grayscale(0)
    }
    33% {
      background-image: url(${this.props.images[0]});
      transform: scale(${small_scale}                     );
      margin: 0 0 0 ${large_margin}rem;

    }



    34% {
      background-image: url(${this.props.images[1]});
      transform: scale(1);
      margin: 0 0 0 ${large_margin}rem;
      filter: grayscale(1);

    }
    38% {
      background-image: url(${this.props.images[1]});
      transform: scale(1);
      margin: 0;


    }
    62% {
      background-image: url(${this.props.images[1]});
      transform: scale(${max_scale});
      margin: 0 ${small_margin}rem 0 0;
      filter: grayscale(0);
    }
    66% {
      background-image: url(${this.props.images[1]});
      transform: scale(${small_scale});
      margin: 0 ${large_margin}rem 0 0;

    }


    67% {
      background-image: url(${this.props.images[2]});
      transform:scale(1);
      margin: 0 0 0 300rem;

    }



    71% {


      background-image: url(${this.props.images[2]});
      transform: scale(1);
      margin: 0;
      filter: grayscale(1);

    }

        94% {


          background-image: url(${this.props.images[2]});
          transform: scale(${max_scale});
          margin: 0;
          filter: grayscale(0);

        }



        100% {
          background-image: url(${this.props.images[2]});
          transform: scale(${small_scale});
          margin: 0 0 0 300rem;

        }



  }


    `


    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    styleSheet.insertRule(keyframes2, styleSheet.cssRules.length);


    const effect = "slideInUpCustom";
    console.log(this.props.alignment);

    console.log("PROPS " + this.props.images[0])
    const image_style = {


        animationName:'yo2',
        animationIterationCount:'infinite',
        animationDuration: animationSpeed,

        animationTimingFunction: 'ease-out'



    }


    let box_style = {

        animationName:animationName,
        animationDuration: animationSpeed ,
        animationIterationCount:'infinite',



    }
    const image_height = {

      'paddingTop': 100/1.7+'%',
       display:'block'
    }

    return (



      <Parallax
    data={{

      'data-top':'margin: 0 10rem 0 10rem;',
      'data-bottom-top':'  margin: 0 20rem 0 20rem;'

    }}
    >

<div className="government component-margin">


    <div className="copy-block"  style={box_style}>

        <Parallax
      data={{

        'data-top':'height:500px',
        'data-bottom-top':'height:20px'

      }}
      >

    <div className="copy">

      <p>{this.props.copy}</p>


    </div>

    </Parallax>
    </div>

    <Reveal effect="fadeInUpCustom">
    <div className="copy-block-text">
      <p>{this.props.copy}</p>
    </div>
    </Reveal>

    <Parallax
  data={{

    'data-top':'transform: scale(1);  filter: grayscale(0); opacity: 1;',
    'data-bottom-top':'transform: scale(1.5); filter: grayscale(1); opacity: .1; transform-origin: center; '

  }}
  >

        <div className="government-image-wrapper">

              <div className="government-image">

                  <div className="large-image" style={image_height}>
                    <div class="image" style={image_style}></div>
                  </div>

             </div>

      </div>

         </Parallax>


</div>
   </Parallax>
    );
  }
}

export default Government;
