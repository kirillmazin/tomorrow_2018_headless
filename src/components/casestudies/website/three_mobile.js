import React, { Component } from 'react';
import $ from 'jquery';
import Reveal from 'react-reveal/Reveal'

import PhoneTop from '../../../imgs/ui/devices/device-phone-top.svg';
import PhoneBottom from '../../../imgs/ui/devices/device-phone-bottom.svg';

const color = { filter:"drop-shadow(0px 0px 20px rgba(0,0,0,.1)) grayscale(0)",opacity:1, zIndex:3}


class ThreeMobile extends Component {



  componentDidMount(){

  /*  this.$first_image = $(this.first_image);
    this.$middle_image = $(this.middle_image);
    this.$last_image = $(this.last_image);


    $( window).resize(
      ()=>this.handleResize()
    )*/

  //  this.handleResize();
  }



  returnImage(img){

    return <div><img src={img} /></div>

  }
  getAnimationStyle(id){


    if(this.props.image_items[id-1].animate === "yes"){
      return `image animate_${id}`;

    } else {
      return "image";
    }

  }


  render() {



          let img_1 = (this.props.image_items[0] != undefined) ? this.props.image_items[0].image.url : "";
          let img_2 = (this.props.image_items[1] != undefined) ? this.props.image_items[1].image.url : "";
          let img_3 = (this.props.image_items[2] != undefined) ? this.props.image_items[2].image.url : "";

          let height_rounding = 0;

        //  let img_1_ar = this.props.image_items[0].image.dimensions.width / (this.props.image_items[0].image.dimensions.height-height_rounding);

let img_1_ar = 640 / (1280-height_rounding);


        //  let img_2_ar = this.props.image_items[1].image.dimensions.width / (this.props.image_items[1].image.dimensions.height-height_rounding);
let img_2_ar = 640 / (1280-height_rounding);
            //let img_3_ar = this.props.image_items[2].image.dimensions.width / (this.props.image_items[2].image.dimensions.height-height_rounding);

let img_3_ar = 640 / (1280-height_rounding);


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

          }

          const bg_image_2_height = {
            border:'0px solid red',
            'paddingTop': 100/img_2_ar+'%',


          }

          const bg_image_3_height = {
                border:'0px solid red',
            'paddingTop': 100/img_3_ar+'%'

          }







          return (

            <div className="component-margin three-mobile" >

                <Reveal effect="fadeInUpCustom">


                  <div className="row">

                                      <div  className="col-4" style={color} >

                                        <div className="phone-top">
                                            <img src={PhoneTop}/>
                                        </div>
                                          <div className="phone-frame">
                                                <div className="large-image phone-screen" style={bg_image_1_height}>
                                                    <div className={this.getAnimationStyle(1)} style={bg_image_1}></div>
                                                </div>
                                            </div>

                                            <div className="phone-bottom"><img src={PhoneBottom}/></div>
                                      </div>





                    <div  className="col-4" style={color} >

                      <div className="phone-top">
                          <img src={PhoneTop}/>
                      </div>

                      <div className="phone-frame">
                            <div className="large-image phone-screen" style={bg_image_2_height}>
                                <div className={this.getAnimationStyle(2)} style={bg_image_2}></div>
                            </div>
                        </div>

                      <div className="phone-bottom"><img src={PhoneBottom}/></div>


                </div>









                    <div   className="col-4" style={color}>
                      <div className="phone-top">
                          <img src={PhoneTop}/>
                      </div>
                          <div className="phone-frame">

                        <div className="large-image phone-screen" style={bg_image_3_height}>
                            <div className={this.getAnimationStyle(3)} style={bg_image_3}></div>
                       </div>


                    </div>
                      <div className="phone-bottom"><img src={PhoneBottom}/></div>













                </div>


                </div>



              </Reveal>
              </div>




          )









  }
}

export default ThreeMobile;
