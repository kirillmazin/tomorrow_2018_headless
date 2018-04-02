import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../../stylesheets/styles.css'
import Reveal from 'react-reveal/Reveal'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import HighlightCopyLeft from './HighlightCopyLeft'
import HighlightCopyRight from './HighlightCopyRight'
import Arrow from '../../imgs/ui/arrow-white.svg';
import { Link} from 'react-router-dom';
class Highlight extends Component {




  render() {
    const effect = "slideInUpCustom";
  


    return (



<div >



    <div className="row no-gutters align-items-end" >


</div>



      <div className="row no-gutters highlight-government">


        <Reveal effect="fadeInUpCustom">
          <div className="container-fluid no-margin">

                      <div className="col-lg-3 offset-lg-1">
                          <Link to={"../work/" +this.props.section_link.uid}>
                        <div className="highlight-margin">
                          <div className="copy">
                          {this.props.copy}
                            <img src={Arrow} />

                          </div>
                        </div>

                          </Link>
                      </div>

        </div>
        </Reveal>

      </div>


</div>

    );
  }
}

export default Highlight;
