import React, { Component } from 'react';

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

    return <img src={img} />

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
          let img_3 = (this.props.image_items[2] != undefined) ? this.props.image_items[2].image.url : "";



          return (

            <div class="website-module two-desktop row no-gutters component-margin">

                  <div class="overlap row no-gutters">
                      <div class="col-lg-8 browser " style={this.state.browser_1_style} onMouseOver={() => this.bring_to_front(1)} onClick={() => this.bring_to_front(1)}>
                            {this.returnImage(img_1)}
                      </div>
                      <div class="col-lg-8 offset-lg-4 browser-overlap" style={this.state.browser_2_style} onMouseOver={() => this.bring_to_front(2)} onClick={() => this.bring_to_front(2)}>
                          {this.returnImage(img_2)}
                      </div>
                  </div>



            </div>




          )









  }
}

export default TwoDesktops;
