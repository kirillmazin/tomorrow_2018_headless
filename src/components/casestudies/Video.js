import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import Prismic from 'prismic-javascript';

class Video extends Component {
//  let a =   PrismicDOM.RichText.asHtml(this.props.video.html, linkResolver, htmlSerializer);

  render() {
    let a = this.props.video.html;
    let width =  this.props.video.width;
    let height =  this.props.video.height;
    let a_r = width/height;
    let i_frame_height = {


      paddingBottom:100/a_r+'%',
    }



    return (


            <Reveal effect="fadeInUpCustom">
          <div className="no-gutters row">

      <div className="col-12 case-study-video" style={i_frame_height}>
      <div dangerouslySetInnerHTML={{__html: this.props.video.html}}></div>









      </div>
      </div>
</Reveal>

    );
  }
}
/** @component */
export default Video;
