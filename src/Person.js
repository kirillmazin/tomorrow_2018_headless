import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import {RichText, Date} from 'prismic-reactjs';
import Fade from 'react-reveal/Fade';
import { Link} from 'react-router-dom'
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
      bottom_bar:{transform:"rotate(-225deg)", top: "20px"}



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
  //  this.props.prismicCtx.toolbar();
    window.scrollTo(0, 0);
  }

  componentDidMount(){
        document.title = "Tomorrow Partners";

  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid

      return props.prismicCtx.api.getByUID('people', props.match.params.uid, {}, (err, doc) => {
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
      link_underline:{

            backgroundSize: "100% 100%"



      }



    })





  }
  getNextNav(next_bio, next_name){
    if(next_bio!="")

    return (

      <div className="next">


    <p className="next">    <a href={"../people/"+next_bio}>Next</a></p>

    <p>  <a href={"../people/"+next_bio}> {next_name}</a></p>
  </div>

);
  }
  handleMouseLeave(){

    this.setState({

      top_bar:   {transform:"rotate(45deg)", top: "20px"},
      bottom_bar: {transform:"rotate(-225deg)", top: "20px"},
      link_underline:{

            backgroundSize: "0% 100%"



      }



  })
  }
  render() {
    // We will fill in this section in Step 3...
    if (this.state.doc) {
      // process the object






      const root = this.state.doc.data;


      const name = root.name[0].text != null ? root.name[0].text : '';
      const title = root.title[0].text;
      const bio = PrismicReact.RichText.render(root.bio, this.props.prismicCtx.linkResolver);
      const linkedIn = root.linkedin_profile.url;
      const photo = root.photo.url!= null ? root.photo.url : '';
      const photo_width = root.photo.dimensions.width != null ? root.photo.dimensions.width: '';
      const photo_height = root.photo.dimensions.height != null ? root.photo.dimensions.height : '';
      const next_bio = root.next_bio.uid != null ? root.next_bio.uid : '';
      const next_name = root.next_bio_name[0] != null ? root.next_bio_name[0].text : '';
        //const next_name = "";



      document.title = "Tomorrow Partners | " + name



      const style = {

          backgroundImage: "url(" + photo + ")"





      }


      const a_r = photo_width/photo_height;
      const image_height = {

        'paddingTop': 100/a_r+'%',
         display:'block'
      }






























    return(



        <div className="bios">

          <a href="../about/people"><div className="close-bios"  onMouseOver={() => this.handleMouseEnter()}  onMouseLeave={() => this.handleMouseLeave()} >

            <div className="bar" style={this.state.top_bar}></div>
            <div className="bottom-bar bar" style={this.state.bottom_bar}></div>

          </div>
        </a>

          <Fade>
          <div className="container-fluid person_tile">








  <div className="col-12 col-md-8 offset-md-2 no-gutters">


          <div className="col-12 col-md-8 col-lg-6">
            <div className="thumbnail_image" style={image_height}>
                <div class="thumbnail_source" style={style}></div>
            </div>



</div>



        <div className="staff_name_bio">
          <i style={this.state.link_underline}> {name}</i>
        </div>

        <div className="staff_title">{title}</div>
        <p className="bio">{bio}</p>
        <p className="linkedIn"><a href={linkedIn}>LinkedIn</a></p>

        {this.getNextNav(next_bio, next_name)}



  </div>


    {/* A JSX comment */}

          </div>
        </Fade>
      </div>



    );



// end if




 } else if (this.state.notFound) {
   return <NotFound />;
 }
 return (
    <div/>
 );

  }
}
