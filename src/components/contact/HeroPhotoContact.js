import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Img_logo from '../../imgs/ui/tomorrow-logo.svg';
import $ from 'jquery';
import IntroParagraph from './IntroParagraph';
import { ParallaxProvider, Parallax } from 'react-skrollr';



const bottom_margin = 100;
class HeroPhotoContact extends Component {

  constructor(props){
    super(props);




    this.state = {
        visibility: this.props.visibility,
        aspect_ratio: this.props.aspect_ratio,
        doc: null,
        notFound: false,
        video_overlay_copy: this.props.video_overlay_copy,
        hero_video:{


        },
        video_style:{



          filter: 'grayscale(1) brightness(0.1) contrast(1)',



        }






    }
  }
  handleResize(){


    this.$el.css({
      height:($(window).height()-bottom_margin),

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
          animationDuration: '3s',

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





    const intro_font_color = {

      color: this.props.intro_font_color
    }





    let image =   {
      backgroundImage: "url(" + this.props.image + ")",
      backgroundSize:'cover',
      backgroundPosition: 'center',
        filter: 'grayscale(0) brightness(.6)  contrast(1)'}

    return (



      <div ref={el => this.el = el} className="hero-image" >


            <div className="image" style={image}></div>
        


                <Reveal effect="fadeInUpCustom">
          <div className="home-hero-copy">
              <div className="container-fluid">
                <div className="col-sm-10 col-md-8 offset-md-1 col-lg-6 col-xl-5  no-gutters">
                  <p>
                      {this.props.copy}
                  </p>

                  <p className="intro-paragraph">{this.props.introtext}
                    <a className="button white" href="mailto:hello@tomorrowpartners.com" >
                      Contact us
                    </a>
                 </p>
              </div>



         </div>


      </div>
         </Reveal>
</div>
    );
  }
}
/** @component */
export default HeroPhotoContact;
