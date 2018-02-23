import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Tag.css';
import Tag from './Tag';
import TagSelected from './TagSelected';
import Intro from './Intro';
import ProjectGrid from './ProjectGrid';

/**
 * This is a quote component used on the case study page
 */
class Tags extends Component {
  constructor(props) {
    super(props);
       
    this.state = {
      tags: this.props.elements,
      styles: ["selected","normal","normal","normal","normal","normal"],
      selected:'Everything'
    };
  }
  
  buildTags(){
    var tags = [];
    
    for(let i=0;i<this.state.tags.length;i++){
      tags.push(this.renderTag(i, this.state.tags[i],this.state.styles[i]));
      
    }
    return tags;
  }
  
  
  
  
  
  renderTag(id, value, style){
    if(style == "normal"){
      return  <Tag copy={value} style={style} onClick={() => this.handleTagClick(id)} />;
    
    } else {
      return  <TagSelected copy={value} style={style} onClick={() => this.handleTagClick(value)} />;
      
    }
  }

  handleTagClick(id){
    
    
    let tagStyles = this.state.styles.slice();
    tagStyles = tagStyles.map((x) => x = "normal");
   
    console.log(" we have a click " + id);
    
    console.log("Selected " + this.state.tags[id]);

    tagStyles[id] = "selected"
    
    this.setState({
        styles:tagStyles,
        selected: this.state.tags[id]
    })
    console.log(id)
  }
  
  render() {
      console.log(this.state.tags[0])

    return (


      


<Fade bottom>
      
  <div>
  <div className="container">
      <Intro copy="We cross sectors and merge mindsets to find creative impactful solutions for every kind of client"/> 
        
          <div className="tags">
          {this.buildTags()}
          </div>
          {console.log(this.state.tags)}
        </div>
        
        <div className="container">    
            <ProjectGrid projects={this.props.projects} show={this.state.selected}/>

            </div>
  </div>
</Fade>

    );
  }
}
/** @component */
export default Tags;
