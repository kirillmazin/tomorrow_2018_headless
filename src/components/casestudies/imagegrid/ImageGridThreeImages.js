import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal'
class ImageGridThreeImages extends Component {



  render() {
      const aspect_ratio_1 = this.props.images[0].aspect_ratio;
      const aspect_ratio_2 = this.props.images[1].aspect_ratio;
      const aspect_ratio_3 = this.props.images[2].aspect_ratio;


      const imageVertical_1 = {backgroundImage: "url(" + this.props.images[0].url + ")"}
      const imageVertical_2 = {backgroundImage: "url(" + this.props.images[1].url + ")"}
     const imageVertical_3 = {backgroundImage: "url(" + this.props.images[2].url + ")"}








      const image_height_1 = {

        'paddingTop': 100/aspect_ratio_1+'%',
         display:'block'
      }


      const image_height_2 = {

        'paddingTop': 100/aspect_ratio_2+'%',
         display:'block'
      }

      const image_height_3 = {

        'paddingTop': 100/aspect_ratio_3+'%',
         display:'block'
      }



    return (












    <div class="image-grid component-margin">


  <Reveal effect="fadeInUpCustom">


        <div className="row no-gutters">


            <div className="col-12 col-md-6  shift-bottom-200">


              <div className="image-tile" style={image_height_1}>
                  <div className="image" style={imageVertical_1}>
                          <img src={this.props.images[0].url} />
                  </div>
              </div>


          </div>



            <div className="col-12 col-md-6">


              <div className="image-tile" style={image_height_2}>
                  <div className="image" style={imageVertical_2} >
                        <img src={this.props.images[1].url} />
                  </div>
              </div>


              </div>
          </div>
          <div className="row no-gutters  justify-content-end">
          <div className="col-12 col-md-6">


            <div className="image-tile" style={image_height_2}>
                <div className="image" style={imageVertical_3} >
                        <img src={this.props.images[2].url} />

                </div>
            </div>


            </div>
          </div>




</Reveal>




    </div>


    );
  }
}

export default ImageGridThreeImages;
