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
    <div className="projectTile ">
    <Link to={this.props.data.uid}>
      <p><img src={this.props.data.hero_image}/></p>
      <h4> {this.props.data.title}</h4>
      <h2> {this.props.data.subtitle} </h2>
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
