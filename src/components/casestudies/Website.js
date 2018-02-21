import React, { Component } from 'react';

class Website extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null
    }
    console.log(this.state.value)

  }


  render() {
      const browserIndex = {zIndex: this.state.browserIndex};
      const ipadIndex = {zIndex: this.state.iPadIndex};



    return (








      <div class="website-module row no-gutters component-margin">
            {this.state.value}
            <div class="overlap row no-gutters">
                <div class="col-lg-10 browser" style={browserIndex} onMouseOver={() => this.setState({browserIndex:1, iPadIndex:0})}>
                    <img src="/imgs/case-studies/yerba-buena/yerba-buena-website-browser.png" />
                </div>
                <div class="col-lg-10 offset-lg-2 ipad-overlap" style={ipadIndex} onMouseOver={() =>this.setState({browserIndex:0, iPadIndex:1})}>
                    <img src="/imgs/case-studies/yerba-buena/yerba-buena-website-ipad-01.png" />
                </div>
            </div>

         <div class="col-lg-10 offset-lg-2 ipad">
                <img src="/imgs/case-studies/yerba-buena/yerba-buena-website-ipad-02.png" />
            </div>

      </div>


    );
  }
}

export default Website;
