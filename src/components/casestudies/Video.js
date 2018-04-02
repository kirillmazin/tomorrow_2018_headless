import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import Prismic from 'prismic-javascript';
/**
 * This is a quote component used on the case study page
 */
class Video extends Component {
//  let a =   PrismicDOM.RichText.asHtml(this.props.video.html, linkResolver, htmlSerializer);

  render() {
    let a = this.props.video.html;
    let width =  this.props.video.width;
    let height =  this.props.video.height;
    let a_r = width/height;
    let i_frame_height = {

      border:"0px solid red",
      paddingBottom:100/a_r+'%',
    }


    console.log(this.props.video)
    return (


            <Reveal effect="fadeInUpCustom">
          <div className="no-gutters row">
          
      <div className="col-12 component-margin case-study-video" style={i_frame_height}>
      <div dangerouslySetInnerHTML={{__html: this.props.video.html}}></div>









      </div>
      </div>
</Reveal>

    );
  }
}
/** @component */
export default Video;
