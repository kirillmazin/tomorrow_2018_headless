import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
import Tags from './Tags'
import { ParallaxProvider, Parallax } from 'react-skrollr'
import $ from 'jquery';


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


    let expand_by = 0;
    if(this.state.isShown == true){

      this.setState({
        isShown: false,
        menuStyle:
          {
            border: "1px solid pink",
            visibility: 'hidden',
            transition: "all 1s",
            height:0 +'px',

          },
          arrow_rotation: {
            transform: 'rotate(0deg)'

          }

      });
      expand_by = -this.state.height;
    } else {

      this.setState({
        isShown: true,
        menuStyle:
          {
            border: "1px solid pink",
            visibility:'visible',
            transition: "all 300ms",
            height:this.state.height
          },
          arrow_rotation: {
            transform: 'rotate(-180deg)'
          }
      });
      expand_by = parseInt( this.state.height);
    }


  //  this.props.onMenuExpand(this.state.height);



    this.props.onMenuExpand(expand_by);



  }

  componentDidMount(){

      this.$el = $(this.el);

      let height =
    this.$el.css("height");

    
    this.state.height= height;

    this.setState({

      menuStyle:
        {
          border: "1px solid pink",
          visibility:'visible',
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
      let start_visibility = 'visible';
      let end_visibility = 'hidden';
      let height;




        if(this.state.isShown == true){
            height = this.$el.css("height");

            this.setState({
              height:height
            });

            this.setState({

              menuStyle:
                {



                  height:this.state.height
                }
            });


        } else {
          this.setState({
            menuStyle:
              {
                visibility:'visible',

              }
          });

            height = this.$el.css("height");
            this.setState({
              height:height
            });


            this.setState({
              menuStyle:
                {
                  visibility:'hidden',
                  height:0+'px'

                }
            });
        }


  }
  render() {

    const menuStyle = {}

    return (






      <div className="work-filters">


 <Reveal effect="fadeInUpCustom">
        <div>Show me</div>
        <div className="selector-element" onClick={() => this.handleClick()}><a href="#"><div className="selector">{this.state.filterLabel}</div><span className="arrow-down" style={this.state.arrow_rotation} ></span></a></div>
        <div className="tags-open" style={this.state.menuStyle} >
          <div ref={el => this.el = el}>
          <Tags elements={this.props.all_filters} selected={this.state.filterBy} onClick={(filter,value) => this.handleTagClick(filter,value)}/>
          </div>
        </div>
</Reveal>


      </div>

    );
  }
}
/** @component */
export default Filters;
