import React, { Component } from 'react';
import ImageGridTwoImages from './imagegrid/ImageGridTwoImages'
import ImageGridThreeImages from './imagegrid/ImageGridThreeImages'
import ImageGridTwoImagesVertical from './imagegrid/ImageGridTwoImagesVertical'


class ImageGrid extends Component {



  render() {
    const numberofimages = this.props.images.length;
    const type = this.props.type;

    const animation = "slideInUp";
    const animateOnce = "true";

      const right = {alignSelf: "flex-end"};
    


      if(numberofimages == 2 && type != "vertical"){


          return(
            <ImageGridTwoImages images={this.props.images}/>

          )
      }

      else if(type == "vertical"){

          return(

                    <ImageGridTwoImagesVertical images={this.props.images}/>

        )
      }


      else {

        return(
          <ImageGridThreeImages images={this.props.images}/>

        )
      }

  }
}

export default ImageGrid;
