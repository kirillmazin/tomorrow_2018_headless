import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


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

<Fade bottom cascade>
          <div className="col-lg-3 offset-lg-1">




                <h2 className="section-title"><a href="">Services</a></h2>


        </div>
</Fade>

<Fade bottom cascade>
          <div className="col-lg-3">

            <ul>
                {

                  col_1.map(p => (
                      <li>
                          {p}
                          </li>
                        ))

                }

            </ul>

          </div>

          </Fade>
          <Fade bottom cascade>
          <div className="col-lg-5">

            <ul>
              {

                col_2.map(p => (
                    <li>
                        {p}
                        </li>
                      ))

              }

              </ul>

          </div>
</Fade>




      </div>


    );
  }
}

export default Services;