import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Tag from './Tag';

import $ from 'jquery';


/**
 * This is a quote component used on the case study page
 */
class Tags extends Component {


  constructor(props) {
    super(props);
    let elements = [];
    let uid = [];








    this.state = {
      tags: this.props.tags,
      styles: [],
      dist: []

    };






  }





  buildTags(target_column){


    let tags = [];


      // determine the distribution of items


      let dist = [];
      for(let i = 0;i<4;i++){
        //console.log("col " + i)
        var c = [];
        for(let l=0;l<this.props.tags.length;l++){


          if(i == l%4) {
              c.push(i)
          }
        }
        dist.push(c);
      }


    // calculate the number of previous items

      let total = 0;
      for(let i = 0;i<target_column;i++){
        for(let l = 0;l<dist[i].length;l++){
            total++
        }
      }




      this.dist = dist;
      {

      for(let i = 0;i<dist[target_column].length;i++){





           tags.push(this.renderTag(i+total,  this.props.tags[i+total].filter));








      }

}


  return tags;


  }



  getTags(){
    let a = [];
    for(let i = 0;i<this.props.tags.length;i++){
        a.push(this.renderTag(i,  this.props.tags[i].filter))
    }

    return a;
  }
  componentDidMount(){


    this.$el = $(this.el);



  }

  renderTag(id,  value){


      return  <Tag copy={value}  onClick={() => this.handleTagClick(id)} />;


  }

  handleTagClick(id){




        let value = "/work/" + this.props.tags[id].uid;
        window.location = value;

  }

  render() {



    return (








    <div>



        <div className="tags row no-gutters">
          <div className="col-12 col-md-3 mr-auto">
            {this.buildTags(0)}

          </div>

          <div className="col-12 col-md-3 mr-auto">
          {this.buildTags(1)}
          </div>

          <div className="col-12 col-md-3 mr-auto">
          {this.buildTags(2)}
          </div>

          <div className="col-12 col-md-3 mr-auto">
            {this.buildTags(3)}
          </div>

        </div>

      </div>





    );
  }
}
/** @component */
export default Tags;
