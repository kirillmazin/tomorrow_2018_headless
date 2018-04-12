import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import IntroCopy from './IntroCopy'
import IntroTag from './IntroTag'
import $ from 'jquery';
import { BrowserRouter as Router,Link} from 'react-router-dom';

const off_style = {
  transform: "scale(1)",
  opacity:1,
  color:"#CECFCA",
  filter: "grayscale(1)"


}

const on_style = {
  transform: "scale(1)",
    opacity:1,

    color:"#FC7753",




}

const default_style = {
  transform: "scale(1)",
    opacity:1,
    color:"#CECFCA",


}


const off_arrow_style = "white";

const on_arrow_style = "#FC7753";

const default_arrow_style = "#CECFCA";


const off_line_style = {

  borderTop:"1px solid #CECFCA",
    color:"#CECFCA",
    marginLeft: "0px"


}

const on_line_style = {
      borderTop:"1px solid #FC7753",
    color:"#FC7753"


}

const default_line_style = {

    borderTop:"1px solid #CECFCA",
    color:"#CECFCA",


}

const on_description_style = {
    opacity:1,
    transform: "translateY(0)"
}

const on_description_style_mobile = {
    opacity:1,
    transform: "translateY(0)",
      border:"1px solid red"
}

const off_description_style = {
    opacity:0,
    transform: "translateY(30px)"
}


const off_description_style_mobile = {
    opacity:1,
    transform: "translateY(0)",
    border:"1px solid red"
}

const default_description_style = {
  opacity:0,
  transform: "translateY(30px)"
}

const default_description_style_mobile = {
  opacity:1,
  transform: "translateY(0)"
}


class Intro extends Component {
  constructor(props) {
     super(props);
      this.state = {
          intro_style: {

            backgroundColor: "#ffffff"
          },
          active_item: 0,

          tag_styles: [
              default_style,
              default_style,
              default_style

          ],

          arrow_styles: [
            default_arrow_style,
            default_arrow_style,
            default_arrow_style


          ],

          line_styles: [
            default_line_style,
            default_line_style,
            default_line_style


          ],

          description_styles: [
            default_description_style,
            default_description_style,
            default_description_style

          ]


    };
  }
  handleMouseEnter(id){




      let b_w = $(window).width();


      if(b_w > 556){
      let t_s = [];
      let arrow_styles = [];
      let line_styles = [];
      let description_styles = [];


      for(let i=0;i<3;i++){

          t_s.push(off_style)
          arrow_styles.push(off_arrow_style)
          line_styles.push(off_line_style)
          description_styles.push(off_description_style)

          if(b_w > 556){
            description_styles.push(off_description_style)
          } else {

            description_styles.push(off_description_style_mobile)
          }
      }

      t_s[id] = on_style;
      arrow_styles[id]        = on_arrow_style;
      line_styles[id]         = on_line_style;

      if(b_w > 556){
        description_styles[id]  = on_description_style;
      } else {

        description_styles[id]  = on_description_style_mobile;
      }


      this.setState({
          active_item:id,
          tag_styles: t_s,
          arrow_styles: arrow_styles,
          line_styles :line_styles,
          description_styles: description_styles
      })

    }

  }






  handleMouseLeave(id){

    let b_w = $(window).width();
      if(b_w > 556){

    let t_s = [];
    let arrow_styles = [];
    let line_styles = [];
    let description_styles = [];

    for(let i=0;i<3;i++){

        t_s.push(default_style)
          arrow_styles.push(default_arrow_style)
          line_styles.push(default_line_style)


          if(b_w > 556){
              description_styles.push(default_description_style)
            } else {
                console.log(b_w + " mobile ")
              description_styles.push(default_description_style_mobile)

        }

    }



      this.setState({
          intro_style:{

              backgroundColor: "#ffffff"
          },
            tag_styles: t_s,
            arrow_styles: arrow_styles,
            line_styles:line_styles,
            description_styles: description_styles


      })

    }

  }

  getLinks(links, images, descriptions){
    let a = []


      for(let i=0;i<links.length;i++){
          a.push(
            <div className="row" onMouseEnter={()=>this.handleMouseEnter(i)} onMouseLeave={()=>this.handleMouseLeave(i)}>

                <Link className="" to={"/work/"+links[i]}>
                    <IntroTag copy={links[i]} image={images[i]} description={descriptions[i]}   isActive={this.state.active_item} id={i}  description_style={this.state.description_styles[i]} arrow_style={this.state.arrow_styles[i]} line_style={this.state.line_styles[i]} style={this.state.tag_styles[i]}/>
                </Link>
            </div>

          );
      }
      return a;

  }
  render() {
    const effect = "slideInUpCustom";






    return (










    <div className="home-intro" style={this.state.intro_style}>

        <div className="container-fluid">



            <Reveal effect="fadeInUpCustom">

                    <IntroCopy copy={this.props.copy}/>

        </Reveal>







                    {this.getLinks(this.props.links, this.props.images, this.props.descriptions)}







      </div>


      </div>







    );
  }
}

export default Intro;
