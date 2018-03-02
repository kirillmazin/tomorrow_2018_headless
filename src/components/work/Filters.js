import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { ParallaxProvider, Parallax } from 'react-skrollr'
/**
 * This is a quote component used on the case study page
 */
class Filters extends Component {



  render() {


    return (





<Fade bottom>
      <div className="workFilters">

      <Parallax
    data={{
      'data-top-bottom':'transform[bounce]: translate(0, -300px); opacity: 0;',
      'data-top-top':'transform[bounce]: translate(0, 0px); opacity: 1;',
      'data-center-top':'transform[bounce]: translate(0, 0px); opacity: 1;transition:all 1s;'

    }}>
 <Fade bottom>
        <div>show me</div>
        <div className="selector">everything</div>
</Fade>
        </Parallax>

      </div>
</Fade>
    );
  }
}
/** @component */
export default Filters;
