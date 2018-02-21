import React from 'react';
import NotFound from './NotFound';

import Prismic from 'prismic-javascript';
// Declare your component
export default class Work extends React.Component {

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid

      return props.prismicCtx.api.query(


        Prismic.Predicates.at('document.type', 'case_study_segmentation'),
    { orderings : '[case_study_segmentation.date desc]' }
).then((response) =>

  {console.log(response);

  console.log(response.results)
    console.log(response.data)
}
    // response is the response object, response.results holds the documents



      );
    }
    return null;
  }



  render() {
    return (
      <h1>das</h1>
    )
  }

}
