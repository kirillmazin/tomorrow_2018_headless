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
      arrow_rotation: {
        transform: 'rotate(0deg)'
      }

    };

  }

  handleTagClick(value){

    this.setState(
      {
        filterBy: value,
        isShown: 'false',

        arrow_rotation: {
          transform: 'rotate(180deg)'

        }

      }
    )
    this.handleClick();
    window.location = value;
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
            height:150+'px'
          },
          arrow_rotation: {
            transform: 'rotate(-180deg)'
          }
      });
    }
    console.log(this.state.isShown);






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
        <div>show me</div>
        <div><div className="selector" onClick={() => this.handleClick()}>{this.state.filterBy}</div><span className="arrow-down" style={this.state.arrow_rotation}></span></div>
        <div  className="tags-open" style={this.state.menuStyle}>
          <Tags elements={["everything","government","strategy"]} selected={this.state.filterBy} onClick={(value) => this.handleTagClick(value)}/>
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
