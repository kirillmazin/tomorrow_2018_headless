import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import PersonTile from './PersonTile';
class People extends Component {

  getPersonTiles(people){
      let allPeople = [];
    for(let i=0;i<people.length;i++){

        allPeople.push(<PersonTile data={people[i]}/>)

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
      console.log(">>>> PEOPLE");
    console.log(this.props.people);
    return (




      <div className="component-margin">


              <Reveal effect="fadeInUpCustom">

          


              <div className="row no-gutters">{this.getPersonTiles(this.props.people)}</div>

              </Reveal>

    </div>


    );
  }
}

export default People;
