import React, { Component } from 'react';
import ImageGridTwoImages from './imagegrid/ImageGridTwoImages'
import ImageGridTwoImagesFlopped from './imagegrid/ImageGridTwoImagesFlopped'
import ImageGridThreeImages from './imagegrid/ImageGridThreeImages'
import ImageGridTwoImagesVertical from './imagegrid/ImageGridTwoImagesVertical'
import ImageGridTwoImagesHorizontal from './imagegrid/ImageGridTwoImagesHorizontal'

class ImageGrid extends Component {



  render() {
    const numberofimages = this.props.images.length;
    const type = this.props.grid_type;





      if(numberofimages == 2 && type == "two_squares_b_c"){

          return(
            <ImageGridTwoImages images={this.props.images}/>

          )
      }

      if(numberofimages == 2 && type == "two_squares_flopped_g"){


          return(
            <ImageGridTwoImagesFlopped images={this.props.images} />

          )
      }

      if(type == "horizontal_f"){


          return(

            <ImageGridTwoImagesHorizontal images={this.props.images}/>

          )
      }

      if(numberofimages == 3 && type == "two_squares_b_c"){


          return(
            <ImageGridThreeImages images={this.props.images}/>

          )
      }


      else {

        return(
            <ImageGridTwoImages images={this.props.images}/>

        )
      }

  }
}

export default ImageGrid;
