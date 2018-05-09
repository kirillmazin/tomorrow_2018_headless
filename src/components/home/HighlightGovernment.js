import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal'
import Arrow from '../../imgs/ui/arrow-simple.svg';
import { Link} from 'react-router-dom';
import ProjectTile from './ProjectTile';
class Highlight extends Component {


  buildProjects(){
      let case_studies = [];
      let counter = 0;
      for(let l=0;l<this.props.to_display.length;l++){
      for(let i=0;i<this.props.projects.length;i++){


          if(this.props.projects[i].uid == this.props.to_display[l]){


          let alignment = counter%2;

          counter++;

                  case_studies.push(<ProjectTile alignment={alignment} id={alignment} data={this.props.projects[i]}/>);


        }
      }
    }

      return case_studies;
  }

  render() {
    const effect = "slideInUpCustom";



    return (






  <div>
            <Reveal effect="fadeInUpCustom">
      <div className="highlight-government container-fluid" >




          <div className="row no-gutters col-lg-10 offset-lg-1">
                      <div className="col-12 col-lg-6 no-gutters">
                          <Link to={"../work/" +this.props.section_link.uid}>
                              <div className="highlight-margin">
                                  <div className="copy">
                                      {this.props.copy}


                                  </div>

                                    <div className="arrow">{this.props.section_label}</div>
                                </div>
                          </Link>




                      </div>



                    </div>


      </div>

        <div className="container-fluid">
        <div className="row no-gutters col-lg-10 offset-lg-1">

              {this.buildProjects()}
        </div>

        </div>
</Reveal>
    </div>



    );
  }
}

export default Highlight;
