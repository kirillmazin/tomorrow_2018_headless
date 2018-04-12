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

const hamburger_color_close = "#fb36cf";

let ui_color_open_state = "#000000";
let ui_color_closed_state = "#ffffff"

    //const ui_color_open_state = "#white";
    //const ui_color_closed_state = "#black";
class Menu extends Component {




  constructor(props){
    super(props);


    let ui_color_closed_state = this.props.ui_color != undefined ? this.props.ui_color  : "#ffffff";


    this.state = {
        visibility: 'hidden',




        menu_style:{
          backgroundColor:'rgba(255,255,255,0)',

          height:"200px"
        },

        menu_visibility:{
          visibility: 'hidden'
        },
        nav_style:{
          visibility: 'hidden'
        },
        top_bar:{transform:'rotate(0)',top:'10px',backgroundColor:ui_color_closed_state},
        bottom_bar:{transform:'rotate(0)',top:'20px',backgroundColor:ui_color_closed_state},
        ui_color: ui_color_closed_state,
        ui_color_closed_state: ui_color_closed_state


    }








    }

  handleResize(){





      //console.log("hamburger Handle resize " + window_height + ' /// ' + this.state.visibility);
      //this.$container.css({height:window_height})



      if(this.state.visibility  == 'hidden'){
        // show

          this.setState({
            menu_style: {backgroundColor:'rgba(255,255,255,0)',height: '100px'}


          })
      } else {
        this.setState({
          // hide
          menu_style: {backgroundColor:'rgba(255,255,255,0.8)',height: $( window ).height()+'px'}

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



        new_state = 'visible';


        this.setState({

          menu_style: {backgroundColor:'rgba(255,255,255,0.97)',height: $( window ).height()+'px'},
          nav_style:{
            visibility: 'visible'
          },
            ui_color: ui_color_open_state,
          top_bar:   {transform:"rotate(45deg)", top: "20px",backgroundColor:ui_color_open_state},
          bottom_bar:{transform:"rotate(-225deg)", top: "20px",backgroundColor:ui_color_open_state},



        })
    } else {

      this.setState({
        // hide
        menu_style: {backgroundColor:'rgba(255,255,255,0)',height: '100px'},
        nav_style:{
          visibility: 'hidden',
          opacity:0
        },
        ui_color: this.state.ui_color_closed_state,
        top_bar:{transform:"rotate(0)", top: "10px",backgroundColor:this.state.ui_color_closed_state},
        bottom_bar:{transform:"rotate(0)", top: "20px",backgroundColor:this.state.ui_color_closed_state},



      })

    }




    this.setState({
      visibility: new_state
    })





  }

  render() {

    return (


    <Reveal effect="fadeInUpCustom">



          <div className="hamburger-menu-module" ref={el => this.container = el} style={this.state.menu_style}>

              <Link to="/">
                    <div className="case-study-logo">


                <svg width="163" height="20" xmlns="http://www.w3.org/2000/svg"><g fill={this.state.ui_color} fill-rule="evenodd"><path d="M154.424 18.55h-.07L151.227 5.7h-4.91l-3.06 12.887h-.07L139.806 5.7h-5.332l4.266 13.901h8.031l1.895-7.656h.06l1.979 7.656h8.047L163 5.7h-5.196zM127.256 19.375c-.051.08-.12.146-.172.226h5.366c.036-.1.093-.183.13-.276.455-1.225.677-2.595.677-4.117 0-1.517-.222-2.89-.678-4.135-.448-1.238-1.088-2.289-1.912-3.156a8.641 8.641 0 0 0-3.014-2.023c-1.17-.473-2.474-.713-3.92-.713-1.446 0-2.745.24-3.91.713-1.155.48-2.16 1.155-2.983 2.023-.832.867-1.472 1.918-1.928 3.156-.443 1.245-.67 2.618-.67 4.135 0 1.522.227 2.892.67 4.117.041.093.093.175.134.276h5.37c-.055-.08-.124-.146-.176-.226a6.108 6.108 0 0 1-.727-1.958 11.168 11.168 0 0 1-.214-2.214c0-.762.07-1.504.214-2.246.145-.732.384-1.381.727-1.946a4.295 4.295 0 0 1 1.364-1.38c.567-.352 1.276-.533 2.129-.533.848 0 1.562.181 2.14.532.584.362 1.04.82 1.383 1.381a5.86 5.86 0 0 1 .727 1.946 11.494 11.494 0 0 1 0 4.46 6.048 6.048 0 0 1-.727 1.958zM101.973 5.692v13.91h5.044v-3.479c0-.857.08-1.655.24-2.39.17-.734.448-1.375.837-1.929.395-.55.913-.982 1.555-1.304.636-.314 1.42-.479 2.34-.479.312 0 .627.024.967.056.327.038.613.086.843.136V5.365a3.662 3.662 0 0 0-1.098-.184c-.637 0-1.253.101-1.846.293a6.73 6.73 0 0 0-1.678.825 6.31 6.31 0 0 0-1.387 1.29 6.29 6.29 0 0 0-.953 1.632h-.073V5.692h-4.791zM88.492 5.692v13.91h5.042v-3.479c0-.857.08-1.655.25-2.39a5.226 5.226 0 0 1 .837-1.929c.39-.55.902-.982 1.54-1.304.646-.314 1.43-.479 2.355-.479.307 0 .626.024.959.056.33.038.619.086.853.136V5.365a3.745 3.745 0 0 0-1.103-.184c-.64 0-1.258.101-1.85.293a6.665 6.665 0 0 0-1.669.825c-.52.348-.984.782-1.389 1.29a6.235 6.235 0 0 0-.959 1.632h-.072V5.692h-4.794zM79.573 19.375c-.051.08-.123.146-.178.226h5.362c.038-.1.098-.183.131-.276.449-1.225.678-2.595.678-4.117 0-1.517-.23-2.89-.678-4.135-.446-1.238-1.09-2.289-1.92-3.156-.822-.868-1.825-1.544-3-2.023-1.173-.473-2.48-.713-3.929-.713-1.443 0-2.745.24-3.902.713a8.594 8.594 0 0 0-2.99 2.023c-.83.867-1.475 1.918-1.918 3.156-.451 1.245-.675 2.618-.675 4.135 0 1.522.224 2.892.675 4.117.036.093.09.175.132.276h5.361c-.057-.08-.124-.146-.178-.226a6.036 6.036 0 0 1-.716-1.958c-.15-.716-.22-1.453-.22-2.214 0-.762.07-1.504.22-2.246a5.85 5.85 0 0 1 .716-1.946 4.201 4.201 0 0 1 1.382-1.38c.551-.352 1.263-.533 2.113-.533.851 0 1.57.181 2.15.532.575.362 1.036.82 1.384 1.381.34.565.578 1.214.725 1.946.144.742.21 1.484.21 2.246 0 .76-.066 1.498-.21 2.214a6.228 6.228 0 0 1-.725 1.958zM63.486 19.601v-7.629c0-1.227-.165-2.267-.492-3.135-.332-.872-.794-1.578-1.39-2.115a5.456 5.456 0 0 0-2.128-1.179 9.606 9.606 0 0 0-2.702-.362c-1.283 0-2.394.32-3.325.955-.935.631-1.68 1.37-2.22 2.201-.5-1.173-1.234-1.996-2.193-2.459-.959-.468-2.026-.697-3.186-.697-1.206 0-2.283.271-3.224.806-.936.54-1.732 1.299-2.408 2.278h-.064V5.692H35.38v13.91h5.055v-5.943c0-.931.131-1.679.394-2.256.26-.578.572-1.017.946-1.32.361-.312.745-.52 1.134-.623.395-.114.71-.17.944-.17.807 0 1.423.143 1.838.417.415.288.706.663.886 1.126.178.466.284.971.302 1.525.023.553.039 1.11.039 1.671v5.572h5.06v-5.495c0-.59.038-1.168.123-1.748a4.274 4.274 0 0 1 .5-1.546 3.001 3.001 0 0 1 1.023-1.105c.439-.274 1.01-.417 1.722-.417s1.271.117 1.686.367c.415.245.732.575.943.99.207.418.336.91.387 1.474.044.562.072 1.163.072 1.794V19.6h5.052zM26.325 19.375c-.046.08-.116.146-.178.226h5.37c.038-.1.095-.183.133-.276.449-1.225.683-2.595.683-4.117 0-1.517-.234-2.89-.683-4.135-.448-1.238-1.087-2.289-1.922-3.156a8.568 8.568 0 0 0-2.996-2.023c-1.178-.473-2.484-.713-3.928-.713-1.449 0-2.745.24-3.905.713a8.503 8.503 0 0 0-2.985 2.023c-.838.867-1.477 1.918-1.918 3.156-.461 1.245-.683 2.618-.683 4.135 0 1.522.222 2.892.683 4.117.034.093.09.175.13.276h5.36c-.053-.08-.12-.146-.175-.226a5.986 5.986 0 0 1-.724-1.958 11.567 11.567 0 0 1-.211-2.214c0-.762.072-1.504.211-2.246.14-.732.382-1.381.724-1.946a4.21 4.21 0 0 1 1.37-1.38c.558-.352 1.272-.533 2.123-.533.856 0 1.562.181 2.142.532.583.362 1.041.82 1.38 1.381.344.565.59 1.214.734 1.946.141.742.216 1.484.216 2.246 0 .76-.075 1.498-.216 2.214a6.057 6.057 0 0 1-.735 1.958zM3.062 19.601V9.19H0V5.7h3.062V0H8.12v5.7h3.7v3.489h-3.7v9.414c0 .389.037.722.09.998H3.063z"/></g></svg>



              </div>
            </Link>

              <div className="hamburger-menu" onClick={()=>this.hamburgerClick()}>
                  <div className="top-bar bar" style={this.state.top_bar}></div>
                  <div className="bottom-bar bar" style={this.state.bottom_bar}></div>
              </div>






              <ul className="main-nav" style={this.state.nav_style}>
              <div className="col-md-8 offset-md-2 no-gutters">
                  <li><Link to={"../about/"}>About</Link></li>
                  <li><Link to={"../work/"}>Work</Link></li>
                  <li><Link to={"../contact/"}>Contact</Link></li>
                  </div>
            </ul>


      </div>


</Reveal>

    );
  }
}
/** @component */
export default Menu;
