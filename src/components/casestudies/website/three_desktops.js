import React, { Component } from 'react';
import $ from 'jquery';
import Reveal from 'react-reveal/Reveal'


const grayscale = {filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.1)) grayscale(1)", opacity:1, zIndex:0};
const color = {filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.2)) grayscale(0)",opacity:1, zIndex:3}


class ThreeDesktops extends Component {
  constructor(props){
    super(props);
    let opacity_off = 1;
    let opacity_on = 1;
    this.state = {
      value: null,

      grayscale:{filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.1)) grayscale(1)", opacity:1, zIndex:0},
      color: {filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.2)) grayscale(0)",opacity:1, zIndex:3},

      browser_1_style: {filter:color},
      browser_2_style:{filter:grayscale},
      browser_3_style:{filter:grayscale},

      bg_image_1_cover:{background: "rgba(255,255,255,0)"},
      bg_image_2_cover:{},
      bg_image_3_cover:{},
      white_overlay_on: {background: "rgba(255,255,255,0)"},
      white_overlay_off: {background: "rgba(255,255,255,.8)"},


      full_height:{
          height:300+'px'
        }

    }





  }
  handleResize(){




    let img_first_height = this.$first_image.height();
    let img_middle_height = this.$middle_image.height()+parseInt(this.$middle_image.css("margin-top"));
    let img_last_height = this.$last_image.height()+parseInt(this.$last_image.css("margin-top"));




    let total_height = img_first_height;




    if(total_height < img_middle_height){
        total_height = img_middle_height;

    }

    if(total_height < img_last_height){
        total_height = img_last_height;

    }




    this.setState({
      full_height:{height:total_height+150+'px'}

    })




  }

  componentDidMount(){

    this.$first_image = $(this.first_image);
    this.$middle_image = $(this.middle_image);
    this.$last_image = $(this.last_image);


    $( window).resize(
      ()=>this.handleResize()
    )

    this.handleResize();
  }



  returnImage(img){

    return <div><img src={img} /></div>

  }


  bring_to_front(id){




this.setState({
    browser_1_style: this.state.grayscale,
    browser_2_style: this.state.grayscale,
    browser_3_style: this.state.grayscale,

    bg_image_1_cover: this.state.white_overlay_off,
    bg_image_2_cover: this.state.white_overlay_off,
    bg_image_3_cover: this.state.white_overlay_off,

})

  let active = `browser_${id}_style`;

  if(id  == 1){

    this.setState({
        browser_1_style: this.state.color,
        bg_image_1_cover:  this.state.white_overlay_on

    })
  }

    if(id  == 2){
      this.setState({
          browser_2_style: this.state.color,
          bg_image_2_cover: this.state.white_overlay_on

      })
    }

      if(id  == 3){
        this.setState({
            browser_3_style: this.state.color,
            bg_image_3_cover:  this.state.white_overlay_on


        })
      }




  }
  render() {

      this.state.browser_1_style = color;


          let img_1 = (this.props.image_items[0] != undefined) ? this.props.image_items[0].image.url : "";
          let img_2 = (this.props.image_items[1] != undefined) ? this.props.image_items[1].image.url : "";
          let img_3 = (this.props.image_items[2] != undefined) ? this.props.image_items[2].image.url : "";



          let img_1_ar = this.props.image_items[0].image.dimensions.width / this.props.image_items[0].image.dimensions.height;




          let img_2_ar = this.props.image_items[1].image.dimensions.width / this.props.image_items[1].image.dimensions.height;

            let img_3_ar = this.props.image_items[2].image.dimensions.width / this.props.image_items[2].image.dimensions.height;




          let bg_image_1 ={

            backgroundImage: "url(" + img_1 + ")",


          }

          let bg_image_2 ={

            backgroundImage: "url(" + img_2 + ")",


          }

          let bg_image_3 ={

            backgroundImage: "url(" + img_3 + ")",


          }




          const bg_image_1_height = {
            border:'0px solid red',
            'paddingTop': 100/img_1_ar+'%',
             display:'block'
          }

          const bg_image_2_height = {
            border:'0px solid red',
            'paddingTop': 100/img_2_ar+'%',
             display:'block'
          }

          const bg_image_3_height = {
            border:'0px solid red',
            'paddingTop': 100/img_3_ar+'%',
             display:'block'
          }





          return (

            <div className="component-margin three-desktops" >

                <Reveal effect="fadeInUpCustom">
              <div className="all-images-wrapper" style={this.state.full_height}>
                  <div className="all-images">
                  <div className="row no-gutters">

                    <div ref={el => this.first_image = el} className="col-7 browser" style={this.state.browser_2_style} onClick={() => this.bring_to_front(2)} onMouseOver={() => this.bring_to_front(2)}>
                            <div className="large-image" style={bg_image_2_height}>
                                <div className="image" style={bg_image_2}></div>
                                <div className="cover" style={this.state.bg_image_2_cover}></div>
                              </div>
                          </div>



                    <div ref={el => this.middle_image = el}  className="col-7 offset-2 layered-1" style={this.state.browser_1_style} onClick={() => this.bring_to_front(1)} onMouseOver={() => this.bring_to_front(1)}>
                        <div className="large-image" style={bg_image_1_height}>
                              <div className="image" style={bg_image_1}></div>
                              <div className="cover" style={this.state.bg_image_1_cover}></div>
                          </div>
                    </div>






                    <div ref={el => this.last_image = el}  className="col-7 layered-2" style={this.state.browser_3_style} onClick={() => this.bring_to_front(3)} onMouseOver={() => this.bring_to_front(3)}>
                      <div className="large-image" style={bg_image_3_height}>
                            <div className="image" style={bg_image_3}></div>
                            <div className="cover" style={this.state.bg_image_3_cover}></div>
                      </div>
                    </div>
















                </div>


                </div>


                </div>
              </Reveal>
              </div>




          )









  }
}

export default ThreeDesktops;
