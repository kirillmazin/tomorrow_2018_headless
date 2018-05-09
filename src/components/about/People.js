import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import PersonTile from './PersonTile';
import PersonTileNoBio from './PersonTileNoBio';
import Bio from './Bio';
import $ from 'jquery';

class People extends Component {





  handleClick(id){



      this.setState({
          activeBio:id
      })
  }
  getPersonTiles(people){
    let allPeople = [];


    for(let i=0;i<people.length;i++){



    if(this.props.people[i].show_bio == "yes"){
        allPeople.push(<PersonTile id={i} data={people[i]} />)
      } else {
          allPeople.push(<PersonTileNoBio id={i} data={people[i]} />)

      }
    }

    return allPeople;

  }




  render(props) {




    const style = {

        backgroundImage: "url(" + this.props.image + ")"





    }



    const image_height = {
      border:'0px solid red',
      'paddingTop': 100/this.props.aspect_ratio+'%',
       display:'block'
    }


    return (

<div>

        <div className="container-fluid">
            <div className="col-md-10 offset-md-1">
                <div className="component-margin">

                        <div className="row no-gutters">

                            {this.getPersonTiles(this.props.people)}

                        </div>

                </div>
              </div>

</div>






  </div>

    );
  }
}

export default People;
