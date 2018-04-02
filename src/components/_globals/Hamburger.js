import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import Img_hm from '../../imgs/ui/hamburger-menu.svg';
import { ParallaxProvider, Parallax } from 'react-skrollr'
import { Link} from 'react-router-dom'
import $ from 'jquery'
/**
 * This is a quote component used on the case study page
 */
class Hamburger extends Component {
  constructor(props){
    super(props);
    this.state = {
        visibility: this.props.visibility,


        menu_style:{
          backgroundColor:'rgba(0,0,0,0)',
          height:"200px"
        },

        menu_visibility:{
          visibility: 'hidden'
        },
        nav_style:{
          visibility: this.props.visibility,
        },
        top_bar:{transform:'rotate(0)',top:'10px'},
        bottom_bar:{transform:'rotate(0)',top:'20px'}


    }








    }

  handleResize(){





      //console.log("hamburger Handle resize " + window_height + ' /// ' + this.state.visibility);
      //this.$container.css({height:window_height})



      if(this.state.visibility  == 'hidden'){
        // show

          this.setState({
            menu_style: {backgroundColor:'rgba(0,0,0,0)',height: '100px'}


          })
      } else {
        this.setState({
          // hide
          menu_style: {backgroundColor:'rgba(0,0,0,0.8)',height: $( window ).height()+'px'}

        })

      }


  }

  componentDidMount(){
    this.$container = $(this.container);
    this.$top_bar = $(this.top_bar);
    this.$bottom_bar = $(this.top_bar);

    $( window ).resize(
      ()=>this.handleResize()
    );


//  this.handleResize();



  }


  hamburgerClick(){

    let new_state = 'hidden';
    let window_height = $(window).height();




    if(this.state.visibility  == 'hidden'){
      // show

      this.setState({


      })

        new_state = 'visible';
        this.setState({

          menu_style: {backgroundColor:'rgba(0,0,0,0.8)',height: $( window ).height()+'px'},
          nav_style:{
            visibility: new_state
          },
          top_bar:{transform:"rotate(45deg)", top: "20px"},
          bottom_bar:{transform:"rotate(-225deg)", top: "20px"}
        })
    } else {

      this.setState({
        // hide
        menu_style: {backgroundColor:'rgba(0,0,0,0)',height: '100px'},
        nav_style:{
          visibility: new_state
        },
        top_bar:{transform:"rotate(0)", top: "10px"},
        bottom_bar:{transform:"rotate(0)", top: "20px"}
      })

    }




    this.setState({
      visibility: new_state
    })





  }

  render() {
    return (


            <Reveal effect="fadeInUpCustom">



            <div className="hamburger-menu-module " ref={el => this.container = el} style={this.state.menu_style}>

              <div className="hamburger-menu" onClick={()=>this.hamburgerClick()}>

              <Parallax


              data={{
               'data--100-top':'transform: translate(0, -40%); opacity: 1;',
               'data-top-bottom':'transform: translate(0, 0%); opacity: 1; transition:all 500ms;'
             }}>


                  <div className="top-bar bar" style={this.state.top_bar}></div>
                  <div className="bottom-bar bar" style={this.state.bottom_bar}></div>

              </Parallax>




            </div>





            <div className="col-8 offset-1 no-gutters">
              <ul class="main-nav" style={this.state.nav_style}>


              <li>  <Link to={"../about/"}>About</Link></li>
              <li><Link to={"../work/"}>Work</Link></li>
              <li><Link to={"../contact/"}>Contact</Link></li>


              </ul>

            </div>

      </div>


</Reveal>

    );
  }
}
/** @component */
export default Hamburger;
