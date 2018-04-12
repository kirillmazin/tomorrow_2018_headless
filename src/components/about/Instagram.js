import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { ParallaxProvider, Parallax } from 'react-skrollr'
class Instagram extends Component {

  render(props) {
    let api_key = "AIzaSyDWmSzS4HtkQSsHtF-3HxbAz_drtM2se4I";
    let static_map_api ="AIzaSyBJICH4YEIij4BgLjxMOiVT715IJLcuRuU";
    let map_src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDWmSzS4HtkQSsHtF-3HxbAz_drtM2se4I&q=Tomorrow+Partners,Berkeley+CA";
      map_src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDWmSzS4HtkQSsHtF-3HxbAz_drtM2se4I&q=Tomorrow+Partners,Berkeley+CA";
      map_src  = "https://maps.googleapis.com/maps/api/staticmap?size=512x512&zoom=15&center=Brooklyn&style=feature:road.local%7Celement:geometry%7Ccolor:0x00ff00&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0x000000&style=element:labels%7Cinvert_lightness:true&style=feature:road.arterial%7Celement:labels%7Cinvert_lightness:false&key=AIzaSyBJICH4YEIij4BgLjxMOiVT715IJLcuRuU"

      map_src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyBJICH4YEIij4BgLjxMOiVT715IJLcuRuU&center=-33.904416798199094,151.31342163085932&zoom=12&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=1000x400"
  //  map_src = "https://maps.googleapis.com/maps/api/staticmap?center=Australia&size=640x400&style=element:labels|visibility:off&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDWmSzS4HtkQSsHtF-3HxbAz_drtM2se4I"

    const style = {

        backgroundImage: "url(" + this.props.image + ")"





    }

    const image_height = {
      border:'0px solid red',
      'paddingTop': 100/this.props.aspect_ratio+'%',
       display:'block'
    }


    return (




      <div className="component-margin-bottom instagram">
        <div className="container-fluid no-gutters">
        <div className="large-paragraph col-lg-7 offset-lg-4 no-gutters">
          <div className="row no-gutters">
                <h3 className="title">{this.props.title}</h3>
                </div>
              </div>

            </div>
              <Reveal effect="fadeInUpCustom">
            <div className="large-image" style={image_height}>

              <div class="image" style={style}></div>


            </div>
              </Reveal>

    </div>


    );
  }
}

export default Instagram;
