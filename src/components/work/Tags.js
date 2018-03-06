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

    this.state = {
      tags: this.props.elements,
      styles: [],
      selected:this.props.selected
    };
    //this.state.tags.push("selected")




    for(let i=0;i<this.props.elements.length;i++){
      if(this.props.selected == this.props.elements[i]){
        this.state.styles.push("selected");
      } else {
        this.state.styles.push("normal");
      }
    //  this.state.tags.push("normal")
  }

  console.log("styles " + this.state.styles);

  }





  buildTags(){
    var tags = [];

    for(let i=0;i<this.state.tags.length;i++){
      console.log("--- " + this.state.styles[i]);
      tags.push(this.renderTag(i, this.state.tags[i],this.state.styles[i]));

    }


    return tags;
  }





  renderTag(id, value, style){
    if(style == "normal"){
      return  <Tag copy={value} style={style} onClick={() => this.handleTagClick(id)} />;

    } else {
      console.log("SELECTED "+ value);
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

    this.props.onClick(this.state.tags[id]);
  }

  render() {





    return (





<Fade bottom>

  <div>
  <div className="container">



          <div className="tags">
          {this.buildTags()}
          </div>

        </div>

        <div className="container">

            </div>
  </div>
</Fade>

    );
  }
}
/** @component */
export default Tags;
