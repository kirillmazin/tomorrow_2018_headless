import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal'
import Arrow from '../../imgs/ui/arrow-simple.svg';
import { Link} from 'react-router-dom'
class Highlight extends Component {




  render() {
    const effect = "slideInUpCustom";



    const image_bottom_height = {

      'paddingTop': 100/ this.props.images[0].aspect_ratio+"%",
       display:'block',

    }


    const image_bottom = {

      backgroundImage: `url(${this.props.images[0].url})`


    }

    const image_top_1_height = {

      'paddingTop': 100/ this.props.images[1].aspect_ratio+"%",
       display:'block',

    }


    const image_top_1 = {

      backgroundImage: `url(${this.props.images[1].url})`


    }

    const image_top_2_height = {

      'paddingTop': 100/ this.props.images[2].aspect_ratio+"%",
       display:'block'
    }

    const image_top_2 = {

      backgroundImage: `url(${this.props.images[2].url})`,



    }

    const margin_offset_bottom = {
      border:"0 solid blue",
      margin:'-120px 0 0 0'
    }

    const margin_offset_top = {
      border:"0px solid blue",
      margin:'0 0 -120px 0'
    }


    return (



<div className="component-margin ">







      <div className="highlight">


        <Reveal effect="fadeInUpCustom">
          <div className="container-fluid">

            <div className="col-lg-8 offset-lg-1">

              <Link to={"../" +this.props.section_link.uid}>
                  <div className="highlight-margin">
                      <div className="copy">
                          {this.props.copy}

                            </div>

                            <div className="arrow">{this.props.section_label}</div>
                        </div>
              </Link>


              <div>

              </div>

            </div>
        </div>
        </Reveal>

      </div>


</div>

    );
  }
}

export default Highlight;
