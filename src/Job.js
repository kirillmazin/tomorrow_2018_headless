import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import {RichText, Date} from 'prismic-reactjs';
import Fade from 'react-reveal/Fade';
import { Link} from 'react-router-dom';
import {Helmet} from "react-helmet";
// Declare your component
export default class Person extends React.Component {

  state = {
    doc: null,
    notFound: false,

  }

  constructor(props){
    super(props);





    this.state = {

      top_bar:   {transform:"rotate(45deg)", top: "20px"},
      bottom_bar:{transform:"rotate(-225deg)", top: "20px"},
      jobs_header:{
        backgroundColor:"#999999"
      }


    }








    }

  componentWillMount() {
    this.fetchPage(this.props);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  componentDidMount(){
        document.title = "Tomorrow Partners";

  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid

      return props.prismicCtx.api.getByUID('job_posting', props.match.params.uid, {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable

          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }
  handleMouseEnter(){


    this.setState({

      top_bar:   {transform:"rotate(405deg)", top: "20px"},
      bottom_bar:{transform:"rotate(-45deg)", top: "20px"},




    })





  }
  getNextNav(next_bio, next_name){
    if(next_bio!="")

    return (

      <div className="next">


    <p className="next">    <a href={"../contact/"+next_bio}>Next</a></p>

    <p>  <a href={"../people/"+next_bio}> {next_name}</a></p>
  </div>

);
  }
  handleMouseLeave(){

    this.setState({

      top_bar:   {transform:"rotate(45deg)", top: "20px"},
      bottom_bar: {transform:"rotate(-225deg)", top: "20px"}




  })
  }
  render() {
    // We will fill in this section in Step 3...
    if (this.state.doc) {
      // process the object


      const root = this.state.doc.data;
      const job_title = root.job_title[0].text != null ? root.job_title[0].text : '';
      const job_description = PrismicReact.RichText.render(root.job_description, this.props.prismicCtx.linkResolver);
      const cta_label = root.cta_label[0].text != null ? root.cta_label[0].text : '';
      const cta_link = root.cta.url != null ? root.cta.url : '';
      const header_color = root.header_color;


        const header_style = {
          backgroundColor: "#60b9cf",

        }



























    return(
      <div>
      <Helmet>
          <title>Tomorrow Partners | Open Positions</title>
          <meta name="description" content="We’re always excited to meet talent." />
      </Helmet>
      <div className="jobs">
      <div className="jobs-header" style={header_style}>
      <div className="container-fluid">

      <div className="col-12 col-md-8 offset-md-2">

        <h1>Open Positions</h1>

        </div>

      </div>
        <a href="../contact/"><div className="close-bios"  onMouseOver={() => this.handleMouseEnter()}  onMouseLeave={() => this.handleMouseLeave()} >

          <div className="bar" style={this.state.top_bar}></div>
          <div className="bottom-bar bar" style={this.state.bottom_bar}></div>

        </div>
      </a>
      </div>


        <Fade>
          <div className="container-fluid person_tile">
              <div className="col-12 col-md-8 offset-md-2 no-gutters">

                <div className="job_title">
                  <i style={this.state.link_underline}> {job_title}</i>
                </div>

                <div className="job_description">
                    {job_description}
                  </div>

                  <a className="button blue" href={cta_link} >
                      {cta_label}
                    </a>
            </div>

          </div>
        </Fade>





    </div>
</div>


    )



// end if




 } else if (this.state.notFound) {
   return <NotFound />;
 }
 return (
    <div/>
 );

  }
}
