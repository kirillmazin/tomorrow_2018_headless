import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { BrowserRouter as Router,Link} from 'react-router-dom';

import Arrow from '../../imgs/ui/arrow-white-no-circle.svg';
/**
 * This is a quote component used on the case study page
 */
class Tag extends Component {



  render() {


    return (





<Reveal effect="fadeInUpCustom">


    <div className="intro-categories">
                <Link to={"/work/"+this.props.copy}>
                    <div className="intro-category">
                      <div className="row no-gutters">
                        <div className="categories-copy col-sm-6 col-md-7 col-lg-8">
                          <p>{this.props.copy}</p>
                          <div className="intro-categories-arrow">
                            <img src={Arrow} />
                          </div>
                        </div>

                        <div className="col-sm-6 col-md-5 col-lg-4">
                            <div className="category-image">

                                <img src={this.props.image.url} />
                            </div>
                        </div>


                        </div>
                  </div>


                  </Link>
    </div>

</Reveal>

    );
  }
}
/** @component */
export default Tag;
