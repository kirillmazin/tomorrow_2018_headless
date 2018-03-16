import React from 'react';
import NotFound from './NotFound';
import $ from 'jquery';
import Prismic from 'prismic-javascript';

import styles from './work.css'
import Tag from './components/work/Tag';
import Menu from './components/_globals/Menu';
import Footer from './components/_globals/Footer.js';
import WorkHeader from './components/work/WorkHeader';
// Declare your component
export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  componentWillMount() {



   this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {

    this.fetchPage(props);
  }

  componentDidUpdate() {
  //  this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
      if (props.prismicCtx) {
      // We are using the function to get a document by its uid

      return props.prismicCtx.api.query(


          Prismic.Predicates.any('document.type', ['casestudy','work_landing_page'])


).then((doc) =>

  {

    this.setState({ doc });



}
    // response is the response object, response.results holds the documents



      );
    }
    return null;
  }





  render() {





      if (this.state.doc) {
        return (
          <div >
        <Menu />
        <div className="large-copy">We design with people, not for them. </div>
        </div>
      )


     } else {
       return (
         <h1>loading</h1>
       )

     }

  }

}
