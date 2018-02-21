import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'


class LargeImage extends Component {

  render(props) {

    console.log(this.props.aspect_ratio)
    const style = {

        backgroundImage: "url(" + this.props.image + ")"





    }

    const style2 = {
      border:'0px solid red',
      'paddingTop': 100/this.props.aspect_ratio+'%',
       display:'block'
    }


    return (




        <ScrollAnimation animateIn="slideInUp" animateOnce="true" offset={0} >
          <div className="component-margin">
            <span style={style2}></span>
            <div className="large-image">



              <div class="image" style={style}></div>


            </div>
          </div>
        </ScrollAnimation>


    );
  }
}

export default LargeImage;
