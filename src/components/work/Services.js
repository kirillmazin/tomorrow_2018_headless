import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import { ParallaxProvider, Parallax } from 'react-skrollr'


class Services extends Component {

  render() {


    const num_of_items = this.props.scope.length;
    const remainder = num_of_items%2;


    const half = Math.round(num_of_items/2)-remainder;

    const col_1 = [];
    const col_2 = [];
    const col_3 = [];

    for (var i=0; i<half+remainder;i++){
        col_1.push(this.props.scope[i]);


    }


    for (var i=half+remainder; i<this.props.scope.length;i++){
        col_2.push(this.props.scope[i]);


    }


    return (





      <div className="services row no-gutters">


          <div className="col-lg-3 ">

<Reveal effect="fadeInUpCustom">
          <Parallax
        data={{
          'data-top-bottom':'transform: translate(0, -100%); opacity: 0;',
          'data-top-center':'transform: translate(0, 0px); opacity: 1;',
          'data-center-bottom':'transform: translate(0, 0px); opacity: 1;transition:all 1s;'

        }}
        >

                <h2 className="section-title"><i>Our services</i></h2>
                </Parallax>
                </Reveal>
        </div>


<Reveal effect="fadeInUpCustom">
          <div className="col-md-5 col-lg-3">


          <Parallax
        data={{
          'data-top-bottom':'transform: translate(0, -40%); opacity: 0;',
          'data-top-center':'transform: translate(0, 0px); opacity: 1;',
          'data-center-bottom':'transform: translate(0, 0px); opacity: 1;transition:all 1s;'

        }}
        >
            <ul>
                {

                  col_1.map(p => (
                      <li>
                          {p}
                          </li>
                        ))

                }

            </ul>
            </Parallax>
          </div>

          </Reveal>
          <Reveal effect="fadeInUpCustom">




          <div className="col-md-6 col-lg-4">
          <Parallax
        data={{
          'data-top-bottom':'transform: translate(0, -70%); opacity: 0;',
          'data-top-center':'transform: translate(0, 0px); opacity: 1;',
          'data-center-bottom':'transform: translate(0, 0px); opacity: 1;transition:all 1s;'

        }}
        >
            <ul>
              {

                col_2.map(p => (
                    <li>
                        {p}
                        </li>
                      ))

              }

              </ul>
              </Parallax>
          </div>



</Reveal>




      </div>


    );
  }
}

export default Services;
