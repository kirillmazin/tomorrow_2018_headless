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
    let styleSheet = document.styleSheets[0]
    let animationName = 'yo';

    let keyframes = `@keyframes ${animationName}{
    0% {
      background: #FFD955;
      border:0px solid #FFD955
    }
    50% {
      background: #61CEC9;
      border:0px solid #61CEC9;
    }
    100%{
        background: #FFD955;
    }

  }


    `

    let keyframes2 = `@keyframes yo2{
    0% {
      transform:scale(1)

    }
    50% {
      transform:scale(1.1)
    }
    100%{
        transform:scale(1)
    }

  }


    `


    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    styleSheet.insertRule(keyframes2, styleSheet.cssRules.length);


    const effect = "slideInUpCustom";
    console.log(this.props.alignment);

    console.log("PROPS " + this.props.images[0])
    const style = {

        backgroundImage: `url(${this.props.images[0]})`,
        animationName:'yo2',
        animationIterationCount:'infinite',
        animationDuration: '10s'




    }


    let box_style = {

        animationName:animationName,
        animationDuration: '10s',
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


    <div className="copy-block" style={box_style}>

        <Parallax
      data={{

        'data-top':'height:500px',
        'data-bottom-top':'height:20px'

      }}
      >

    <div className="copy" >

      <p>{this.props.copy}</p>


    </div>

    </Parallax>
    </div>
    <div className="copy-block-text">
      <p>{this.props.copy}</p>
    </div>


    <Parallax
  data={{

    'data-top':'transform: scale(1);  filter: grayscale(.7); opacity: 1;',
    'data-bottom-top':'transform: scale(1.5); filter: grayscale(1); opacity: .1; transform-origin: center; '

  }}
  >

        <div className="government-image-wrapper">

              <div className="government-image">

                  <div className="large-image" style={image_height}>
                    <div class="image" style={style}></div>
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
