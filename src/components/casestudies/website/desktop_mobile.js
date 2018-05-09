import React, { Component } from 'react';
import PhoneTop from '../../../imgs/ui/devices/device-phone-top.svg';
import PhoneBottom from '../../../imgs/ui/devices/device-phone-bottom.svg';
import BrowserTopFrame from '../../_globals/Browser_top_frame.js';
class TwoDesktops extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
      grayscale: {filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.1)) grayscale(1)", opacity:0.5, zIndex:0},
      color: {filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.2)) grayscale(0)", zIndex:1},
      browser_1_style:{filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.1)) grayscale(1)", opacity:0.5},
      browser_2_style:{filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.2)) grayscale(0)", zIndex:1}

    }



    console.log(this.state.value)

  }
  returnImage(img){

    return <div><img src={img} /></div>

  }
  bring_to_front(id){


//    this.state.browser_1_style = {filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.3)) grayscale(0)"}

this.setState({
    browser_1_style: this.state.grayscale,
    browser_2_style: this.state.grayscale

})

  let active = `browser_${id}_style`;

  if(id  == 1){
    this.setState({
        browser_1_style: this.state.color

    })
  } else {
    this.setState({
        browser_2_style: this.state.color

    })

  }
  }
  render() {









      const browser_1_active = {zIndex: this.state.browser_1_index, filter:`grayscale(${this.state.browser_1_grayscale}) drop-shadow(${this.state.browser_1_dropshadow})` , opacity: this.state.browser_1_opacity};
      const browser_2_active = {zIndex: this.state.browser_2_index, filter:`grayscale(${this.state.browser_2_grayscale}) drop-shadow(${this.state.browser_2_dropshadow})`, opacity: this.state.browser_2_opacity};

      const greyscale = {filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.3)) grayscale(1)", opacity:0.2}

      const color       = {filter:"drop-shadow(5px 5px 20px rgba(0,0,0,.3)) grayscale(0)"}


          let img_1 = (this.props.image_items[0] != undefined) ? this.props.image_items[0].image.url : "";
          let img_2 = (this.props.image_items[1] != undefined) ? this.props.image_items[1].image.url : "";


          let img_1_ar = this.props.image_items[0].image.dimensions.width / this.props.image_items[0].image.dimensions.height;




          let img_2_ar = this.props.image_items[1].image.dimensions.width / this.props.image_items[1].image.dimensions.height;



          let bg_image ={

            backgroundImage: "url(" + img_1 + ")",


          }

          let bg_image_2 ={

            backgroundImage: "url(" + img_2 + ")",


          }


          const bg_image_height = {

            'paddingTop': 100/img_1_ar+'%',
             display:'block'
          }

          const bg_image_2_height = {

            'paddingTop': 100/img_2_ar+'%',
             display:'block'
          }

          return (

            <div className="component-margin desktop-mobile">

                  <div className="row no-gutters">

                    <div className="col-10">
                            {BrowserTopFrame}
                          <div className="large-image" style={bg_image_height}>
                              <div className="image" style={bg_image}></div>
                            </div>
                    </div>

                    <div className="col-5 col-lg-3 mobile-overlap " style={this.state.color}>
                      <div className="phone-top">
                          <img src={PhoneTop}/>
                      </div>
                          <div className="phone-frame">
                            <div className="large-image phone-screen" style={bg_image_2_height}>
                              <div className="image" style={bg_image_2}></div>
                            </div>
                          </div>
                      <div className="phone-bottom"><img src={PhoneBottom}/></div>
                    </div>






                </div>

</div>




          )









  }
}

export default TwoDesktops;
