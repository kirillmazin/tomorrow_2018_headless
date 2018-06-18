import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import PersonTile from './PersonTile';

import Bio from './Bio';
import $ from 'jquery';

class Bios extends Component {

  getPersonTiles(people){
    let allPeople = [];
    for(let i=0;i<people.length;i++){

        allPeople.push(<PersonTile data={people[i]}/>)

    }

    return allPeople;

  }
componentDidMount() {
//    this.$bios = $(this.el);
  //  this.$bios.css("display","none");


}
componentDidUpdate(){


//  console.log("+++ top " + $(window).scrollTop());
  //this.$bios.css("top",$(window).scrollTop());


//  this.$bios.css("display","block");

}
  getBios(people){
    let allBios = [];


    for(let i=0;i<people.length;i++){

        allBios.push(<Bio data={people[i]}/>)

    }
    return allBios;
  }


  getBio(people){
    let allBios = [];




        allBios.push(
          <Bio data={people}/>
        );



    return allBios;

  }

  handleClose(){
    //console.log("handle close")

    //  this.$bios.css("display","none");
  console.log("handle close " + this.props)
  //  console.log(this.props)
      this.props.onClick();
    //  this.$bios.css("display","none");
    //  this.$bios.css("opacity",0.5);
  }
  render(props) {





    const style = {

        backgroundImage: "url(" + this.props.image + ")"





    }





    return (



<div className="bios border" ref={bios => this.el = bios} style={this.props.bioState}>
  <div className="close-bios" onClick={() => this.handleClose()}>Close</div>
  <div  className="col-md-8 offset-md-2 border">


    <div>
          <div className="col-md-6 col-lg-4 person_tile pr-md-4">
            <Reveal effect="fadeInUpCustom">
              <div className="large-image" style={image_height}>











                <div class="image" style={style}>

                      <img src={this.props.data.img.url} />
                    </div>
            </div>

              </Reveal>
            </div>

              <div className="col-12 person_tile pr-md-4">
                  <Reveal effect="fadeInUpCustom">
                  <div className="staff_name">
                  {this.props.data.name}
                  </div>

                    <div className="staff_title">{this.props.data.title}</div>


                    <p className="bio">{this.props.data.bio}</p>
                    <a href={linkedIn}>LinkedIn</a>
                    </Reveal>




        </div>
    </div>



  </div>
</div>

    );
  }
}

export default Bios;
