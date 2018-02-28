import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './ProjectTile.css'
import { BrowserRouter as Router,Link} from 'react-router-dom'


/**
 * This is a quote component used on the case study page
 */
class ProjectTile extends Component {

  constructor(props) {
    super(props);

    this.state = {

      show: true
    };





  }


  render() {
    //  console.log("selected " +  this.props.show);
    //  console.log(this.props.data.area_of_expertise);



      const imageBg = {backgroundImage: "url(" + this.props.data.thumbnail_image + ")"}
      const aspect_ratio = 1;
      const image_height = {

        'paddingTop': 100/aspect_ratio+'%',
         display:'block'
      }

      const bottom_padding = {
          margin:'0 0 20rem 0'

      }

      const margin_right = {
        marginRight:'3rem'
      }

      let isHide = true;




      if(isHide && this.props.show != "Everything"){
        for(let i=0;i<this.props.data.area_of_expertise.length;i++){
          if( this.props.show == this.props.data.area_of_expertise[i]){
            isHide = false;
            break;
          }


      }
    } else {
      isHide = false;
    }



      if(isHide === false){
    return (




 <Fade bottom cascade>

      <div className="col-6">
      <div className="projectTile" style={margin_right}>
          <Link to={this.props.data.uid}>




          <div className="image-tile" style={image_height}>
              <div className="image" style={imageBg}/>
          </div>


          <h4> {this.props.data.title}</h4>
          <h2 style={bottom_padding}> {this.props.data.subtitle} </h2>
      </Link>
      </div>

      </div>
  </Fade>
    );

  } else{
      return'';
  }

  }
}
/** @component */
export default ProjectTile;
