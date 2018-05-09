import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Tags from './Tags'

import $ from 'jquery';



class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuStyle: {




      },
      isShown: false,
      filterBy:this.props.filterBy,
      filterLabel: this.props.filterLabel,
      arrow_rotation: {
        transform: 'rotate(0deg)'
      }

    };

  }
/**
  Triggered when one of the tags are clicked
*/
  handleTagClick(filter,uid){
    console.log("handle click ++ ")
    console.log(this.state.height)


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
    console.log("handle click ")
    console.log(this.$el.css("height"))
    let height = this.$el.css("height");

    this.setState({

      menuStyle:
        {
          border: "0px solid pink",
          visibility:'visible',
          transition: "all 300ms",
          height:height,

        },

    });

{



    if(this.state.isShown == true){

      this.setState({
        isShown: false,
        menuStyle:
          {

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
        isShown: true,
        menuStyle:
          {

            visibility:'visible',
            transition: "all 300ms",
            height:    height
          },
          arrow_rotation: {
            transform: 'rotate(-180deg)'
          }
      });

    }





}
  }

  componentDidMount(){

      this.$el = $(this.el);










    this.setState({

      menuStyle:
        {

          visibility:'hidden',
          transition: "all 300ms",
          height:0+'px',

        },

    });


    $( window ).resize(
      () => this.handleResize()
    );

      this.handleResize();

  }

  handleResize(){

      let height;




        if(this.state.isShown == true){
            height = this.$el.css("height");





            this.setState({

              menuStyle:
                {



                      height:height
                }
            });


        }


  }
  render() {





    return (








      <div className="casestudy-filters">




          <div className="selector-element" onClick={() => this.handleClick()}>Show me<div className="selector">{this.state.filterLabel}</div><span className="arrow-down" style={this.state.arrow_rotation} ></span></div>
          <div className="tags-open" style={this.state.menuStyle}>
            <div ref={el => this.el = el} >


                <Tags tags={this.props.filters} onClick={() => this.handleTagClick()}/>
            </div>
          </div>

        </div>




    );
  }
}
/** @component */
export default Filters;
