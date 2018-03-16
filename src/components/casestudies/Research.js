import React, { Component } from 'react';
import Researchnumber from './Researchnumber'
import Reveal from 'react-reveal/Reveal'


class Research extends Component {
  generateResearchModules(items){
    let all_numbers = [];
      for(let i=0;i<items.length;i++){
        let o = {};
        o.data = items[i].data[0].text;
        o.data_description = items[i].data_description[0].text;
        all_numbers.push(<Researchnumber number={o.data} description={o.data_description}/>)
      }
      return all_numbers
  }




  render() {

    console.log(this.props.research_items);
    return (






      <div className="research component-margin">


        <Reveal effect="fadeInUpCustom">
        <div className="row  no-gutters">
        <div  className="col-lg-3 offset-lg-1">
          <h2 className="section-title"><i>{this.props.title}</i></h2 >
        </div>

        <div className="col-lg-8 stats row no-gutters">

            {this.generateResearchModules(this.props.research_items)}




        </div>

       </div>
       </Reveal>
        </div>






    );
  }
}

export default Research;
