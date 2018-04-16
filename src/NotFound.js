

import React, { Component } from 'react';

import { BrowserRouter as Router,Link} from 'react-router-dom';
/**
 * This is a quote component used on the case study page
 */
class NotFound extends Component {



  render() {


    return (




<div className="container">

    <div className="not-found component-margin">
      <div className="col-lg-6">
      <p className="sorry">Sorry.</p>

      <p>
      Regardless of what you may have heard, this page DOES NOT EXIST. We recommend you return to the <Link to="/">homepage</Link> before things get hairy.

      </p>

      </div>
      </div>
</div>
    );
  }
}
/** @component */
export default NotFound;
