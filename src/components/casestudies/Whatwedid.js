import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'


class Whatwedid extends Component {

  render() {
    console.log(this.props.scope);
    console.log(this.props.scope.length);

    const num_of_items = this.props.scope.length;
    const remainder = num_of_items%2;

    console.log(" remainder " + remainder);
    console.log(" number of items " + num_of_items);
    const half = Math.round(num_of_items/2)-remainder;
    console.log(" half " + half);
    const col_1 = [];
    const col_2 = [];

    for (var i=0; i<half+remainder;i++){
        col_1.push(this.props.scope[i]);


    }


    for (var i=half+remainder; i<this.props.scope.length;i++){
        col_2.push(this.props.scope[i]);


    }
    const animation = "slideInUp";
    const animateOnce = "true";

    return (





      <div className="what-we-did row no-gutters component-margin">


          <div className="col-lg-3 offset-lg-1">



              <ScrollAnimation animateIn={animation} animateOnce={animateOnce}>
                <h2 className="section-title"><a href="">What we did</a></h2>
                  </ScrollAnimation>

        </div>

          <div className="col-lg-3">
            <ScrollAnimation animateIn={animation} animateOnce={animateOnce}>
            <ul>
                {

                  col_1.map(p => (
                      <li>
                          {p}
                          </li>
                        ))

                }

            </ul>
          </ScrollAnimation>
          </div>
          <div className="col-lg-5">
            <ScrollAnimation animateIn={animation} animateOnce={animateOnce}>
            <ul>
              {

                col_2.map(p => (
                    <li>
                        {p}
                        </li>
                      ))

              }

              </ul>
                </ScrollAnimation>
          </div>





      </div>


    );
  }
}

export default Whatwedid;
