import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
class Website extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
    console.log(this.state.value)

  }
  returnImage(img){

    return <img src={img} />

  }

  render() {
      console.log("PROPS " + this.props.layout_type)
      console.log(this.props.image_items[0].image.url)


      const browserIndex = {zIndex: this.state.browserIndex};
      const ipadIndex = {zIndex: this.state.iPadIndex};

      if(this.props.layout_type === "browser_ipad_d"){

          let img_1 = (this.props.image_items[0] != undefined) ? this.props.image_items[0].image.url : "";
          let img_2 = (this.props.image_items[1] != undefined) ? this.props.image_items[1].image.url : "";
          let img_3 = (this.props.image_items[2] != undefined) ? this.props.image_items[2].image.url : "";
          return (
          
            <div class="website-module row no-gutters component-margin">

                  <div class="overlap row no-gutters">
                      <div class="col-lg-10 browser" style={browserIndex} onMouseOver={() => this.setState({browserIndex:1, iPadIndex:0})}>
                            {this.returnImage(img_1)}
                      </div>
                      <div class="col-lg-10 offset-lg-2 ipad-overlap" style={ipadIndex} onMouseOver={() =>this.setState({browserIndex:0, iPadIndex:1})}>
                          {this.returnImage(img_2)}
                      </div>
                  </div>

               <div class="col-lg-10 offset-lg-2 ipad">
                      {this.returnImage(img_3)}
                  </div>

            </div>




          )



      }


  }
}

export default Website;
