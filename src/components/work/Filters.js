import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Tags from './Tags'
import { ParallaxProvider, Parallax } from 'react-skrollr'
/**
 * This is a quote component used on the case study page
 */
class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuStyle: {
        visibility: 'hidden',
        overflow:'hidden',
        height:0+'px'
      },
      isShown: 'false',
      filterBy:this.props.filterBy,
      filterLabel: this.props.filterLabel,
      arrow_rotation: {
        transform: 'rotate(0deg)'
      }

    };

  }

  handleTagClick(filter,uid){
    console.log("TAG HAS BEEN CLCIKED");


    this.setState(
      {
        filterBy: uid,
        filterLabel: filter,
        isShown: 'false',

        arrow_rotation: {
          transform: 'rotate(180deg)'

        }

      }
    )
    this.handleClick();
    window.location = uid;
    
    
  }

  handleClick(){
    console.log("Let's handle this click");
    if(this.state.isShown == false){
      this.setState({
        isShown: true,
        menuStyle:
          {
            border: "0px solid pink",
            visibility: 'hidden',
            transition: "all 1s",
            height:0 +'px',

          },
          arrow_rotation: {
            transform: 'rotate(0deg)'

          }
      });

    } else {
      this.setState({
        isShown: false,
        menuStyle:
          {
            border: "0px solid pink",
            visibility:'visible',
            transition: "all 500ms",
            height:250+'px'
          },
          arrow_rotation: {
            transform: 'rotate(-180deg)'
          }
      });
    }
  






  }
  render() {

    const menuStyle = {}
    return (





<Fade bottom>
      <div className="workFilters">

      <Parallax
    data={{
      'data-top-bottom':'transform[bounce]: translate(0, -300px); opacity: 0;',
      'data-top-top':'transform[bounce]: translate(0, 0px); opacity: 1;',
      'data-center-top':'transform[bounce]: translate(0, 0px); opacity: 1;transition:all 1s;'

    }}>
 <Fade bottom>
        <div>Show me</div>
        <div className="selectorElement" onClick={() => this.handleClick()}><div className="selector">{this.state.filterLabel}</div><span className="arrow-down" style={this.state.arrow_rotation} ></span></div>
        <div  className="tags-open" style={this.state.menuStyle}>
          <Tags elements={this.props.all_filters} selected={this.state.filterBy} onClick={(filter,value) => this.handleTagClick(filter,value)}/>
        </div>
</Fade>
        </Parallax>

      </div>
</Fade>
    );
  }
}
/** @component */
export default Filters;
