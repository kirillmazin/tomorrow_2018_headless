import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Tag.css';
import Tag from './Tag';
import TagSelected from './TagSelected';

import ProjectGrid from './ProjectGrid';

/**
 * This is a quote component used on the case study page
 */
class Tags extends Component {


  constructor(props) {
    super(props);
    let elements = [];
    let uid = [];
    for(let i=0;i<this.props.elements.length;i++){
        elements.push(this.props.elements[i].filter)
        uid.push(this.props.elements[i].uid);

    }

    this.state = {
      tags: elements,
      styles: [],
      uid: uid,
      selected:this.props.selected
    };
  




    for(let i=0;i<this.props.elements.length;i++){
      if(this.props.selected == this.props.elements[i].uid){
        this.state.styles.push("selected");
      } else {
        this.state.styles.push("normal");
      }
    //  this.state.tags.push("normal")
  }

  }





  buildTags(target_column){
    var tags = [];


      // determine the distribution of items
      let dist = [];
      for(let i = 0;i<4;i++){
        //console.log("col " + i)
        var c = [];
        for(let l=0;l<this.state.tags.length;l++){


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


      for(let i = 0;i<dist[target_column].length;i++){


              tags.push(this.renderTag(i+total,  this.state.tags[i+total],this.state.styles[i+total]));








      }






    return tags;
  }





  renderTag(id,  value, style){

    if(style == "normal"){
      return  <Tag copy={value} style={style} onClick={() => this.handleTagClick(id)} />;

    } else {
    //  console.log("SELECTED "+ value);
      return  <TagSelected copy={value} style={style} />;

    }
  }

  handleTagClick(id){


    let tagStyles = this.state.styles.slice();
    tagStyles = tagStyles.map((x) => x = "normal");



    tagStyles[id] = "selected"

    this.setState({
        styles:tagStyles,
        selected: this.state.tags[id]
    })

  //  console.log("ID ");
  //  console.log(this.state.uid[id]);
    this.props.onClick(this.props.elements[id].filters, this.props.elements[id].uid);
  }

  render() {





    return (





<Fade bottom>


    <div className="container">



        <div className="tags row">
          <div className="col-sm-12 col-lg-3 mr-auto">
            {this.buildTags(0)}
          </div>

          <div className="col-sm-12 col-lg-3 mr-auto">
          {this.buildTags(1)}
          </div>

          <div className="col-sm-12 col-lg-3 mr-auto">
          {this.buildTags(2)}
          </div>

          <div className="col-sm-12 col-lg-3 mr-auto">
            {this.buildTags(3)}
          </div>

        </div>

      </div>



</Fade>

    );
  }
}
/** @component */
export default Tags;
