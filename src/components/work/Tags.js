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
      styles: [],
      selected:'Everything'
    };
    //this.state.tags.push("selected")
    
      
    this.state.styles.push("selected");
    for(let i=0;i<this.props.elements.length-1;i++){
    
      this.state.styles.push("normal")
    //  this.state.tags.push("normal")
  } 

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
   
  

    tagStyles[id] = "selected"
    
    this.setState({
        styles:tagStyles,
        selected: this.state.tags[id]
    })
    console.log(id)
  }
  
  render() {
      
    
    
  
      let mytext = "We cross sectors and merge mindsets to find creative impactful solutions for every kind of client";
    return (


      


<Fade bottom>
      
  <div>
  <div className="container">

      <Intro introtext={mytext}/> 
        
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
