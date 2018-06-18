import React, { Component } from 'react';


import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import BrowserCorner from '../../imgs/ui/browser-corner.svg';
import {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} from 'react-raphael';
import $ from 'jquery';






const diagram_aspect_ratio = 1800/1400;
const color_off = "#BCBEC0";
const color_on  = "#58595B";
const stroke_width_off = "2.29";
const stroke_width_on = "4.29";
const stroke_effort = "9.159";
class Process extends Component {

  constructor(props){
    super(props);


    this.state = {



        header_style:{
          backgroundColor:'rgba(0,0,0,0)',

        },

        active_content_left:0,
        active_content_right:2,
        content_style:{

          opacity:0
        },
        window_width:0,
        description_learn:{
          opacity: 0,
          transition: "opacity 500ms"
        },
        description_make:{
          opacity: 0,
          transition: "opacity 500ms"
        },
        description_deliver:{
          opacity: 0,
          transition: "opacity 500ms"
        },
        description_test:{
          opacity: 0,
          transition: "opacity 500ms"
        },
        deliver_anim_state:'',
        connector_anim_state:'line1',
        test_anim_state:'',
        arrow_learn_color:color_off,
        arrow_learn_stroke: stroke_width_off,
        word_learn_color: color_off,

        arrow_make_color:color_off,
        arrow_make_stroke: stroke_width_off,
        word_make_color: color_off,

        arrow_deliver_color:color_off,
        arrow_deliver_stroke: stroke_width_off,
        word_deliver_color: color_off,

        arrow_test_color:color_off,
        arrow_test_stroke: stroke_width_off,
        word_test_color: color_off,




    }
  }

  hide_all_descriptions(){
  this.state = {

    description_learn:{
      opacity: 0,
      transition: "opacity 500ms"
    },
    description_make:{
      opacity: 0,
      transition: "opacity 500ms"
    },
    description_deliver:{
      opacity: 0,
      transition: "opacity 500ms"
    },
    description_test:{
      opacity: 0,
      transition: "opacity 500ms"
    }
  }



  }


  handleWordEnter(word){






  if(word == "learn"){
   this.setState({
     learn_anim_state:"line1",
     description_learn:{
       opacity: 1,
       transition: "opacity 500ms"
     },
      arrow_learn_color:color_on,
      arrow_learn_stroke: stroke_width_on,
      word_learn_color: color_on,
    })
  }

  if(word == "make"){
   this.setState({
     make_anim_state:"line1",
      description_make:{
        opacity: 1,
        transition: "opacity 500ms"
      },
      arrow_make_color:color_on,
      arrow_make_stroke: stroke_width_on,
      word_make_color: color_on,
    })
  }

  if(word == "deliver"){
   this.setState({
          deliver_anim_state:"line1",
      description_deliver:{
        opacity: 1,
        transition: "opacity 500ms"
      },
      arrow_deliver_color:color_on,
      arrow_deliver_stroke: stroke_width_on,
      word_deliver_color: color_on,
    })
  }

  if(word == "test"){
   this.setState({
     test_anim_state: "line2",
      description_test:{
        opacity: 1,
        transition: "opacity 500ms"
      },
      arrow_test_color:color_on,
      arrow_test_stroke: stroke_width_on,
      word_test_color: color_on,
    })
  }







  }

  handleWordLeave(word){


    if(word == "learn"){

    this.setState({
      learn_anim_state:'',
      description_learn:{
        opacity: 0,
        transition: "opacity 500ms"
      },
      arrow_learn_color:color_off,
      arrow_learn_stroke: stroke_width_off,
      word_learn_color: color_off

    })
  }



  if(word == "make"){
   this.setState({
     make_anim_state:'',
      description_make:{
        opacity: 0,
        transition: "opacity 500ms"
      },
      arrow_make_color:color_off,
      arrow_make_stroke: stroke_width_off,
      word_make_color: color_off,
    })
  }


  if(word == "deliver"){
   this.setState({
     deliver_anim_state:"",
      description_deliver:{

        opacity: 0,
        transition: "opacity 500ms"
      },
      arrow_deliver_color:color_off,
      arrow_deliver_stroke: stroke_width_off,
      word_deliver_color: color_off,
    })
  }


  if(word == "test"){

   this.setState({
     test_anim_state:'',
      description_test: {

        opacity: 0,
        transition: "opacity 500ms"
      },
      arrow_test_color:color_off,
      arrow_test_stroke: stroke_width_off,
      word_test_color: color_off,
    })
  }

}


  handleMouseEnter(id){




      if(id < 2){
      this.setState({
        active_content_left: id,
        content_style:{

          opacity:1
        }
      })
    } else {


      this.setState({
        active_content_right: id,

        content_style:{

          opacity:1,
          transition: "opacity 500ms"
        }
      })
    }

  }

  handleMouseLeave(id){
      console.log("handle mouse leave " + id);
      this.setState({
        content_style:{

          opacity:0
        }
      })
  }

  handleResize(){
    const w = $(window).width();
    const h = w/diagram_aspect_ratio;
    console.log(w);
    this.setState({

      width: w,
      height: h,
      view_box: "0 0 1800 1400"
    })





  }
  componentDidMount() {



    this.$el = $(this.el);



    $( window ).resize(
      ()=>this.handleResize()
    );


  this.handleResize();
  }


  render(props) {


    const style = {

        backgroundImage: "url(" + this.props.image + ")"





    }

    const sectional_content = [
        "We spend time getting to know your customers, staff, partners, product, and you. Because trust and understanding is the beginning, middle, and end of everything good.",
        "We use intention and narrative to translate raw ideas into real life. Design is the way we think things through, drawing our way to solutions that will function and thrive in the real world of your customers.",
        "As we build it, we try to break it, whatever that ‘it’ might be — a digital product, a strategic framework, a masterful story, or just a shiny idea. We keep learning, building, checking, and stress testing until we’ve got a solution that’s as strong as it is flexible. ",
        "The people who set the strategy stay at the table until the last decision is made. Because achieving impact means understanding what’s really needed. And delivering it."



    ]



    const image_height = {
      border:'0px solid red',
      'paddingTop': 100/this.props.aspect_ratio+'%',
       display:'block'
    }
    console.log("WIDTH TYPE " + this.props.width_type);
    let width_type;

    if(this.props.width_type == "full"){
        width_type = "col-12";

    } else if(this.props.width_type == "three_quarters_left"){
        width_type = "col-lg-9";
    }
    else if(this.props.width_type == "three_quarters_right"){
        width_type = "col-lg-9 offset-lg-3";
    }

    else if(this.props.width_type == "half_right"){
        width_type = "col-lg-6";
    }

    else if(this.props.width_type == "half_left"){
        width_type = "col-lg-6 offset-lg-6";
    }





    return (



<div>


        <div className="svg-graphic process">


          <svg viewBox="0 0 1500 800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">






            <g id="diagram_desktop_top" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="left_portion" transform="translate(115.000000, 118.000000)" stroke="#666666" stroke-width="2.223">
                    <g id="arrow_bottom" transform="translate(0.000000, 367.000000)">
                        <polyline id="Stroke-15" points="0.9282 23.1475 12.3362 0.2545 35.2302 11.6635"></polyline>
                        <path className="line-dots-clockwise" stroke-width={stroke_width_on}  d="M555.4946,2.0625 C552.7266,10.9615 549.5336,19.6735 545.9376,28.1745 C542.3416,36.6745 538.3446,44.9635 533.9696,53.0185 C529.5946,61.0725 524.8406,68.8915 519.7336,76.4525 C514.6256,84.0115 509.1636,91.3135 503.3716,98.3315 C497.5796,105.3495 491.4576,112.0845 485.0286,118.5145 C478.5996,124.9435 471.8636,131.0655 464.8456,136.8575 C457.8276,142.6505 450.5256,148.1115 442.9656,153.2185 C435.4056,158.3265 427.5866,163.0805 419.5326,167.4555 C411.4786,171.8305 403.1896,175.8285 394.6886,179.4225 C386.1876,183.0185 377.4756,186.2115 368.5766,188.9805 C359.6766,191.7485 350.5896,194.0905 341.3396,195.9835 C332.0886,197.8765 322.6736,199.3205 313.1196,200.2915 C303.5656,201.2605 293.8706,201.7575 284.0606,201.7575 C274.2496,201.7575 264.5566,201.2605 255.0016,200.2915 C245.4476,199.3205 236.0326,197.8765 226.7826,195.9835 C217.5316,194.0905 208.4446,191.7485 199.5446,188.9805 C190.6446,186.2115 181.9326,183.0185 173.4326,179.4225 C164.9326,175.8285 156.6426,171.8305 148.5886,167.4555 C140.5346,163.0805 132.7156,158.3265 125.1556,153.2185 C117.5956,148.1115 110.2936,142.6505 103.2756,136.8575 C96.2576,131.0655 89.5216,124.9435 83.0926,118.5145 C76.6636,112.0845 70.5406,105.3495 64.7486,98.3315 C58.9566,91.3135 53.4946,84.0115 48.3876,76.4525 C43.2806,68.8915 38.5266,61.0725 34.1516,53.0185 C29.7766,44.9635 25.7796,36.6745 22.1836,28.1745 C18.5886,19.6735 15.3946,10.9615 12.6266,2.0625" id="Stroke-17"></path>
                    </g>
                    <g id="arrow_top" transform="translate(12.000000, 0.000000)">
                        <polyline id="Stroke-11" points="555.71 178.5664 544.301 201.4594 521.408 190.0504"></polyline>
                        <path className="line-dots-clockwise" stroke-width={stroke_width_on}  d="M0.6265,200.0303 C3.3945,191.1313 6.5885,182.4193 10.1835,173.9183 C13.7795,165.4183 17.7765,157.1283 22.1515,149.0743 C26.5265,141.0193 31.2805,133.2013 36.3875,125.6403 C41.4955,118.0813 46.9575,110.7793 52.7495,103.7613 C58.5415,96.7433 64.6635,90.0083 71.0925,83.5783 C77.5215,77.1493 84.2575,71.0263 91.2755,65.2343 C98.2935,59.4423 105.5955,53.9813 113.1555,48.8733 C120.7155,43.7653 128.5345,39.0123 136.5885,34.6373 C144.6425,30.2613 152.9325,26.2643 161.4325,22.6693 C169.9335,19.0743 178.6455,15.8803 187.5445,13.1123 C196.4445,10.3433 205.5315,8.0023 214.7825,6.1083 C224.0325,4.2163 233.4475,2.7723 243.0015,1.8013 C252.5565,0.8323 262.2505,0.3353 272.0605,0.3353 C281.8715,0.3353 291.5655,0.8323 301.1195,1.8013 C310.6735,2.7723 320.0885,4.2163 329.3395,6.1083 C338.5895,8.0023 347.6765,10.3433 356.5765,13.1123 C365.4765,15.8803 374.1885,19.0743 382.6885,22.6693 C391.1895,26.2643 399.4785,30.2613 407.5325,34.6373 C415.5865,39.0123 423.4055,43.7653 430.9655,48.8733 C438.5255,53.9813 445.8275,59.4423 452.8455,65.2343 C459.8635,71.0263 466.5995,77.1493 473.0285,83.5783 C479.4575,90.0083 485.5805,96.7433 491.3725,103.7613 C497.1645,110.7793 502.6265,118.0813 507.7335,125.6403 C512.8405,133.2013 517.5945,141.0193 521.9695,149.0743 C526.3445,157.1283 530.3415,165.4183 533.9375,173.9183 C537.5335,182.4193 540.7265,191.1313 543.4945,200.0303" id="Stroke-13"></path>
                    </g>
                </g>
                <g id="right_portion" transform="translate(817.000000, 118.000000)" stroke="#666666" stroke-width="2.223">
                    <g id="arrow_top" transform="translate(12.000000, 0.000000)">
                        <polyline id="Stroke-19" points="555.6958 178.5664 544.2868 201.4594 521.3938 190.0504"></polyline>
                        <path className="line-dots-clockwise" stroke-width={stroke_width_on} d="M0.6118,200.0303 C3.3808,191.1313 6.5738,182.4193 10.1698,173.9183 C13.7638,165.4183 17.7618,157.1283 22.1368,149.0743 C26.5118,141.0193 31.2658,133.2013 36.3738,125.6403 C41.4808,118.0813 46.9428,110.7793 52.7348,103.7613 C58.5268,96.7433 64.6488,90.0083 71.0778,83.5783 C77.5078,77.1493 84.2428,71.0263 91.2608,65.2343 C98.2798,59.4423 105.5808,53.9813 113.1398,48.8733 C120.7008,43.7653 128.5198,39.0123 136.5738,34.6373 C144.6288,30.2613 152.9178,26.2643 161.4188,22.6693 C169.9188,19.0743 178.6308,15.8803 187.5298,13.1123 C196.4298,10.3433 205.5168,8.0023 214.7668,6.1083 C224.0178,4.2163 233.4328,2.7723 242.9868,1.8013 C252.5418,0.8323 262.2358,0.3353 272.0468,0.3353 C281.8558,0.3353 291.5498,0.8323 301.1048,1.8013 C310.6598,2.7723 320.0738,4.2163 329.3248,6.1083 C338.5758,8.0023 347.6628,10.3433 356.5618,13.1123 C365.4618,15.8803 374.1738,19.0743 382.6738,22.6693 C391.1738,26.2643 399.4648,30.2613 407.5178,34.6373 C415.5728,39.0123 423.3908,43.7653 430.9518,48.8733 C438.5108,53.9813 445.8128,59.4423 452.8318,65.2343 C459.8488,71.0263 466.5858,77.1493 473.0138,83.5783 C479.4428,90.0083 485.5658,96.7433 491.3578,103.7613 C497.1498,110.7793 502.6118,118.0813 507.7188,125.6403 C512.8268,133.2013 517.5798,141.0193 521.9548,149.0743 C526.3308,157.1283 530.3278,165.4183 533.9238,173.9183 C537.5178,182.4193 540.7128,191.1313 543.4798,200.0303" id="Stroke-21"></path>
                    </g>
                    <g id="arrow_bottom"  transform="translate(0.000000, 369.000000)">
                        <polyline id="Stroke-23" points="0.9136 23.3711 12.3216 0.4771 35.2156 11.8861"></polyline>
                        <path className="line-dots-clockwise" stroke-width={stroke_width_on} d="M555.48,0.0625 C552.712,8.9615 549.518,17.6735 545.923,26.1745 C542.328,34.6745 538.331,42.9635 533.955,51.0185 C529.58,59.0725 524.827,66.8915 519.719,74.4525 C514.612,82.0115 509.15,89.3135 503.358,96.3315 C497.566,103.3495 491.443,110.0845 485.014,116.5145 C478.585,122.9435 471.849,129.0655 464.832,134.8575 C457.813,140.6505 450.511,146.1115 442.952,151.2185 C435.391,156.3265 427.573,161.0805 419.518,165.4555 C411.464,169.8305 403.174,173.8285 394.674,177.4225 C386.173,181.0185 377.461,184.2115 368.562,186.9805 C359.663,189.7485 350.576,192.0905 341.325,193.9835 C332.074,195.8765 322.66,197.3205 313.105,198.2915 C303.55,199.2605 293.856,199.7575 284.046,199.7575 C274.236,199.7575 264.542,199.2605 254.987,198.2915 C245.433,197.3205 236.018,195.8765 226.767,193.9835 C217.517,192.0905 208.43,189.7485 199.53,186.9805 C190.63,184.2115 181.918,181.0185 173.418,177.4225 C164.918,173.8285 156.628,169.8305 148.574,165.4555 C140.52,161.0805 132.701,156.3265 125.14,151.2185 C117.581,146.1115 110.28,140.6505 103.261,134.8575 C96.243,129.0655 89.507,122.9435 83.078,116.5145 C76.649,110.0845 70.527,103.3495 64.735,96.3315 C58.943,89.3135 53.481,82.0115 48.374,74.4525 C43.266,66.8915 38.512,59.0725 34.137,51.0185 C29.762,42.9635 25.764,34.6745 22.169,26.1745 C18.574,17.6735 15.38,8.9615 12.612,0.0625" id="Stroke-25"></path>
                    </g>
                </g>
                <text id="Learn"  class="svg-type" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
                    <tspan x="318" y="381">Learn</tspan>
                </text>
                <text id="Prototype" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
                    <tspan x="258" y="471">Prototype</tspan>
                </text>
                <text id="Design" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
                    <tspan x="998" y="339">Design</tspan>
                </text>
                <text id="Build" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
                    <tspan x="1023" y="425">Build</tspan>
                </text>
                <text id="Test" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
                    <tspan x="1039" y="510">Test</tspan>
                </text>
                <path d="M723,404 L778,404" id="connector" className="line1" stroke="#666666" stroke-width={stroke_width_on}></path>
            </g>







          </svg>






        </div>
        <div className="process-description copy-description">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 offset-1">
              <p>Brands make it (or break it) with every interaction — and every customer. We give our clients the tools to make the most of each moment.</p>
          </div>
          <div className="col-4 offset-2">
              <p>  Brands make it (or break it) with every interaction — and every customer. We give our clients the tools to make the most of each moment.</p>
            </div>
            </div>
          </div>

          </div>


        <div className="svg-graphic effort">
          <svg viewBox="0 0 1500 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="diagram_desktop_chart" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="diagram" transform="translate(105.000000, 73.000000)">
                    <path  d="M1296.2905,108.082 L1269.1925,108.082 C1254.7305,108.082 1241.5105,99.911 1235.0425,86.976 L1205.2405,27.372 C1198.7725,14.436 1185.5525,6.267 1171.0905,6.267 L848.3615,6.267 C833.8995,6.267 820.6795,14.436 814.2125,27.372 L809.8635,36.068 C803.3955,49.003 790.1765,57.174 775.7145,57.174 L528.1385,57.174 L517.5325,57.174 L195.3805,57.174 C180.9185,57.174 167.6985,65.345 161.2305,78.28 L156.8825,86.976 C150.4155,99.911 137.1945,108.082 122.7325,108.082 L44.8395,108.082" id="stroke_development" stroke="#67C7C4" stroke-width={stroke_effort} stroke-linecap="round" stroke-linejoin="round"></path>
                    <path  d="M1296.2905,108.082 L1160.7495,108.082 L1143.7795,108.082 L1092.8715,57.174 L1041.9645,108.082 L991.0565,57.174 L940.1485,108.082 L889.2405,57.174 L838.3325,108.082 L825.6055,108.082 L592.0375,108.082 C577.5755,108.082 564.3545,99.911 557.8875,86.976 L528.0855,27.372 C521.6185,14.436 508.3975,6.267 493.9355,6.267 L443.2915,6.267 L424.2015,6.267 L186.8955,6.267 C172.4345,6.267 159.2135,14.436 152.7465,27.372 L122.9435,86.976 C116.4765,99.911 103.2555,108.082 88.7935,108.082 L44.8395,108.082" id="stroke_research" stroke="#F27165" stroke-width={stroke_effort} stroke-linecap="round" stroke-linejoin="round"></path>
                    <path  d="M44.8394,108.082 L197.2374,108.082 C211.2954,108.082 222.6914,96.686 222.6914,82.628 L222.6914,31.72 C222.6914,17.662 234.0874,6.267 248.1454,6.267 C262.2034,6.267 273.5994,17.662 273.5994,31.72 L273.5994,82.628 C273.5994,96.686 284.9954,108.082 299.0534,108.082 C313.1104,108.082 324.5064,96.686 324.5064,82.628 L324.5064,31.72 C324.5064,17.662 335.9034,6.267 349.9614,6.267 C364.0184,6.267 375.4154,17.662 375.4154,31.72 L375.4154,82.628 C375.4154,96.686 386.8114,108.082 400.8684,108.082 C414.9264,108.082 426.3224,96.686 426.3224,82.628 L426.3224,31.72 C426.3224,17.662 437.7184,6.267 451.7764,6.267 C465.8344,6.267 477.2304,17.662 477.2304,31.72 L477.2304,57.141 C477.2304,71.198 488.6264,82.594 502.6844,82.594 L889.2404,82.594 C903.2984,82.594 914.6944,71.198 914.6944,57.141 L914.6944,31.72 C914.6944,17.662 926.0904,6.267 940.1494,6.267 C954.2064,6.267 965.6024,17.662 965.6024,31.72 L965.6024,82.628 C965.6024,96.686 976.9984,108.082 991.0564,108.082 C1005.1134,108.082 1016.5104,96.686 1016.5104,82.628 L1016.5104,31.72 C1016.5104,17.662 1027.9064,6.267 1041.9644,6.267 C1056.0224,6.267 1067.4184,17.662 1067.4184,31.72 L1067.4184,82.628 C1067.4184,96.686 1078.8144,108.082 1092.8714,108.082 C1106.9304,108.082 1118.3254,96.686 1118.3254,82.628 L1118.3254,31.72 C1118.3254,17.662 1129.7224,6.267 1143.7794,6.267 C1157.8374,6.267 1169.2344,17.662 1169.2344,31.72 L1169.2344,82.628 C1169.2344,96.686 1180.6304,108.082 1194.6884,108.082 L1296.2904,108.082" id="stroke_design" stroke="#6E99D0" stroke-width={stroke_effort} style={{mixBlendMode: "multiply"}} stroke-linecap="round" stroke-linejoin="round"></path>
                    <g id="arrow" stroke="#231F20" stroke-width="1.112">
                        <path d="M9.0757,0.9297 L9.0757,113.4477" id="Stroke-4"></path>
                        <polyline id="Stroke-5" points="0.5908 9.415 9.0758 0.93 17.5598 9.415"></polyline>
                    </g>
                    <path d="M314.7793,164.168 C314.7793,167.996 317.8823,171.099 321.7103,171.099 C325.5383,171.099 328.6413,167.996 328.6413,164.168 C328.6413,160.341 325.5383,157.237 321.7103,157.237 C317.8823,157.237 314.7793,160.341 314.7793,164.168" id="legend_design" fill="#6E99D0"></path>
                    <path d="M442.4639,164.168 C442.4639,167.996 445.5669,171.099 449.3949,171.099 C453.2229,171.099 456.3249,167.996 456.3249,164.168 C456.3249,160.341 453.2229,157.237 449.3949,157.237 C445.5669,157.237 442.4639,160.341 442.4639,164.168" id="legend_development" fill="#67C7C4"></path>
                    <path d="M39.5659,164.168 C39.5659,167.996 42.6689,171.099 46.4969,171.099 C50.3239,171.099 53.4269,167.996 53.4269,164.168 C53.4269,160.341 50.3239,157.237 46.4969,157.237 C42.6689,157.237 39.5659,160.341 39.5659,164.168" id="legend_research" fill="#F27655"></path>
                </g>
                <text id="research-&amp;-strategy" font-family="AkkuratStd-Light, Akkurat Std" font-size="25.4539" font-weight="300" letter-spacing="0.1796312" fill="#F27655">
                    <tspan x="171" y="244">research &amp; strategy</tspan>
                </text>
                <text id="design" font-family="AkkuratStd-Light, Akkurat Std" font-size="25.4539" font-weight="300" letter-spacing="0.1796312" fill="#6E99D0">
                    <tspan x="443" y="244">design</tspan>
                </text>
                <text id="development" font-family="AkkuratStd-Light, Akkurat Std" font-size="25.4539" font-weight="300" letter-spacing="0.1796312" fill="#67C7C4">
                    <tspan x="572" y="244">development</tspan>
                </text>
                <text id="effort" transform="translate(89.500000, 153.000000) rotate(-90.000000) translate(-89.500000, -153.000000) " font-family="AkkuratStd-Light, Akkurat Std" font-size="25.4539" font-weight="300" letter-spacing="0.1796312" fill="#231F20">
                    <tspan x="56.5" y="162.5">effort</tspan>
                </text>
            </g>




          </svg>




        </div>

        <div className="svg-description-mobile copy-description">
          <div className="container-fluid">
          <div className="col-12">
                Brands make it (or break it) with every interaction — and every customer. We give our clients the tools to make the most of each moment.
            </div>
            </div>
        </div>


<div className="svg-graphic mobile">

  <svg version="1.1" viewBox="0 0 700 1400" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="diagram_mobile" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect id="bg" fill="#FFFFFF" fill-rule="nonzero" x="0" y="-176" width="700" height="1800"></rect>
        <g id="bottom_portion" transform="translate(350.000000, 1031.000000) rotate(90.000000) translate(-350.000000, -1031.000000) translate(66.000000, 746.500000)" stroke="#666666" stroke-width="2.223">
            <g id="arrow_top" transform="translate(12.000000, 0.000000)">
                <polyline id="Stroke-19" points="555.6958 178.5664 544.2868 201.4594 521.3938 190.0504"></polyline>
                <path className="line-dots-clockwise" stroke-width={stroke_width_on} d="M0.6118,200.0303 C3.3808,191.1313 6.5738,182.4193 10.1698,173.9183 C13.7638,165.4183 17.7618,157.1283 22.1368,149.0743 C26.5118,141.0193 31.2658,133.2013 36.3738,125.6403 C41.4808,118.0813 46.9428,110.7793 52.7348,103.7613 C58.5268,96.7433 64.6488,90.0083 71.0778,83.5783 C77.5078,77.1493 84.2428,71.0263 91.2608,65.2343 C98.2798,59.4423 105.5808,53.9813 113.1398,48.8733 C120.7008,43.7653 128.5198,39.0123 136.5738,34.6373 C144.6288,30.2613 152.9178,26.2643 161.4188,22.6693 C169.9188,19.0743 178.6308,15.8803 187.5298,13.1123 C196.4298,10.3433 205.5168,8.0023 214.7668,6.1083 C224.0178,4.2163 233.4328,2.7723 242.9868,1.8013 C252.5418,0.8323 262.2358,0.3353 272.0468,0.3353 C281.8558,0.3353 291.5498,0.8323 301.1048,1.8013 C310.6598,2.7723 320.0738,4.2163 329.3248,6.1083 C338.5758,8.0023 347.6628,10.3433 356.5618,13.1123 C365.4618,15.8803 374.1738,19.0743 382.6738,22.6693 C391.1738,26.2643 399.4648,30.2613 407.5178,34.6373 C415.5728,39.0123 423.3908,43.7653 430.9518,48.8733 C438.5108,53.9813 445.8128,59.4423 452.8318,65.2343 C459.8488,71.0263 466.5858,77.1493 473.0138,83.5783 C479.4428,90.0083 485.5658,96.7433 491.3578,103.7613 C497.1498,110.7793 502.6118,118.0813 507.7188,125.6403 C512.8268,133.2013 517.5798,141.0193 521.9548,149.0743 C526.3308,157.1283 530.3278,165.4183 533.9238,173.9183 C537.5178,182.4193 540.7128,191.1313 543.4798,200.0303" id="Stroke-21"></path>
            </g>
            <g id="arrow_bottom"  transform="translate(0.000000, 369.000000)">
                <polyline id="Stroke-23" points="0.9136 23.3711 12.3216 0.4771 35.2156 11.8861"></polyline>
                <path className="line-dots-clockwise" stroke-width={stroke_width_on} d="M555.48,0.0625 C552.712,8.9615 549.518,17.6735 545.923,26.1745 C542.328,34.6745 538.331,42.9635 533.955,51.0185 C529.58,59.0725 524.827,66.8915 519.719,74.4525 C514.612,82.0115 509.15,89.3135 503.358,96.3315 C497.566,103.3495 491.443,110.0845 485.014,116.5145 C478.585,122.9435 471.849,129.0655 464.832,134.8575 C457.813,140.6505 450.511,146.1115 442.952,151.2185 C435.391,156.3265 427.573,161.0805 419.518,165.4555 C411.464,169.8305 403.174,173.8285 394.674,177.4225 C386.173,181.0185 377.461,184.2115 368.562,186.9805 C359.663,189.7485 350.576,192.0905 341.325,193.9835 C332.074,195.8765 322.66,197.3205 313.105,198.2915 C303.55,199.2605 293.856,199.7575 284.046,199.7575 C274.236,199.7575 264.542,199.2605 254.987,198.2915 C245.433,197.3205 236.018,195.8765 226.767,193.9835 C217.517,192.0905 208.43,189.7485 199.53,186.9805 C190.63,184.2115 181.918,181.0185 173.418,177.4225 C164.918,173.8285 156.628,169.8305 148.574,165.4555 C140.52,161.0805 132.701,156.3265 125.14,151.2185 C117.581,146.1115 110.28,140.6505 103.261,134.8575 C96.243,129.0655 89.507,122.9435 83.078,116.5145 C76.649,110.0845 70.527,103.3495 64.735,96.3315 C58.943,89.3135 53.481,82.0115 48.374,74.4525 C43.266,66.8915 38.512,59.0725 34.137,51.0185 C29.762,42.9635 25.764,34.6745 22.169,26.1745 C18.574,17.6735 15.38,8.9615 12.612,0.0625" id="Stroke-25"></path>
            </g>
        </g>
        <g id="top_portion" transform="translate(350.000000, 353.000000) rotate(90.000000) translate(-350.000000, -353.000000) translate(66.000000, 68.500000)" stroke="#666666" stroke-width="2.223">
            <g id="arrow_bottom" transform="translate(0.000000, 367.000000)">
                <polyline id="Stroke-15" points="0.9282 23.1475 12.3362 0.2545 35.2302 11.6635"></polyline>
                <path className="line-dots-clockwise" stroke-width={stroke_width_on}  d="M555.4946,2.0625 C552.7266,10.9615 549.5336,19.6735 545.9376,28.1745 C542.3416,36.6745 538.3446,44.9635 533.9696,53.0185 C529.5946,61.0725 524.8406,68.8915 519.7336,76.4525 C514.6256,84.0115 509.1636,91.3135 503.3716,98.3315 C497.5796,105.3495 491.4576,112.0845 485.0286,118.5145 C478.5996,124.9435 471.8636,131.0655 464.8456,136.8575 C457.8276,142.6505 450.5256,148.1115 442.9656,153.2185 C435.4056,158.3265 427.5866,163.0805 419.5326,167.4555 C411.4786,171.8305 403.1896,175.8285 394.6886,179.4225 C386.1876,183.0185 377.4756,186.2115 368.5766,188.9805 C359.6766,191.7485 350.5896,194.0905 341.3396,195.9835 C332.0886,197.8765 322.6736,199.3205 313.1196,200.2915 C303.5656,201.2605 293.8706,201.7575 284.0606,201.7575 C274.2496,201.7575 264.5566,201.2605 255.0016,200.2915 C245.4476,199.3205 236.0326,197.8765 226.7826,195.9835 C217.5316,194.0905 208.4446,191.7485 199.5446,188.9805 C190.6446,186.2115 181.9326,183.0185 173.4326,179.4225 C164.9326,175.8285 156.6426,171.8305 148.5886,167.4555 C140.5346,163.0805 132.7156,158.3265 125.1556,153.2185 C117.5956,148.1115 110.2936,142.6505 103.2756,136.8575 C96.2576,131.0655 89.5216,124.9435 83.0926,118.5145 C76.6636,112.0845 70.5406,105.3495 64.7486,98.3315 C58.9566,91.3135 53.4946,84.0115 48.3876,76.4525 C43.2806,68.8915 38.5266,61.0725 34.1516,53.0185 C29.7766,44.9635 25.7796,36.6745 22.1836,28.1745 C18.5886,19.6735 15.3946,10.9615 12.6266,2.0625" id="Stroke-17"></path>
            </g>
            <g id="arrow_top" transform="translate(12.000000, 0.000000)">
                <polyline id="Stroke-11" points="555.71 178.5664 544.301 201.4594 521.408 190.0504"></polyline>
                <path className="line-dots-clockwise" stroke-width={stroke_width_on} d="M0.6265,200.0303 C3.3945,191.1313 6.5885,182.4193 10.1835,173.9183 C13.7795,165.4183 17.7765,157.1283 22.1515,149.0743 C26.5265,141.0193 31.2805,133.2013 36.3875,125.6403 C41.4955,118.0813 46.9575,110.7793 52.7495,103.7613 C58.5415,96.7433 64.6635,90.0083 71.0925,83.5783 C77.5215,77.1493 84.2575,71.0263 91.2755,65.2343 C98.2935,59.4423 105.5955,53.9813 113.1555,48.8733 C120.7155,43.7653 128.5345,39.0123 136.5885,34.6373 C144.6425,30.2613 152.9325,26.2643 161.4325,22.6693 C169.9335,19.0743 178.6455,15.8803 187.5445,13.1123 C196.4445,10.3433 205.5315,8.0023 214.7825,6.1083 C224.0325,4.2163 233.4475,2.7723 243.0015,1.8013 C252.5565,0.8323 262.2505,0.3353 272.0605,0.3353 C281.8715,0.3353 291.5655,0.8323 301.1195,1.8013 C310.6735,2.7723 320.0885,4.2163 329.3395,6.1083 C338.5895,8.0023 347.6765,10.3433 356.5765,13.1123 C365.4765,15.8803 374.1885,19.0743 382.6885,22.6693 C391.1895,26.2643 399.4785,30.2613 407.5325,34.6373 C415.5865,39.0123 423.4055,43.7653 430.9655,48.8733 C438.5255,53.9813 445.8275,59.4423 452.8455,65.2343 C459.8635,71.0263 466.5995,77.1493 473.0285,83.5783 C479.4575,90.0083 485.5805,96.7433 491.3725,103.7613 C497.1645,110.7793 502.6265,118.0813 507.7335,125.6403 C512.8405,133.2013 517.5945,141.0193 521.9695,149.0743 C526.3445,157.1283 530.3415,165.4183 533.9375,173.9183 C537.5335,182.4193 540.7265,191.1313 543.4945,200.0303" id="Stroke-13"></path>
            </g>
        </g>
        <path d="M350,719 L350,664" id="connector" className="line-dots-counterclockwise" stroke="#666666" stroke-width={stroke_width_on}></path>
        <text id="Design" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
            <tspan x="252.5" y="976">Design</tspan>
        </text>
        <text id="Build" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
            <tspan x="276.5" y="1062">Build</tspan>
        </text>
        <text id="Test" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
            <tspan x="292.5" y="1147">Test</tspan>
        </text>
        <text id="Learn" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
            <tspan x="268.5" y="332">Learn</tspan>
        </text>
        <text id="Prototype" font-family="AkkuratStd-Light, Akkurat Std" font-size="66.699" font-weight="300" letter-spacing="-0.113" fill="#231F20">
            <tspan x="208.5" y="422">Prototype</tspan>
        </text>
    </g>




  </svg>


</div>

<div className="svg-description-mobile copy-description">
  <div className="container-fluid">
  <div className="col-12">
        Brands make it (or break it) with every interaction — and every customer. We give our clients the tools to make the most of each moment.
    </div>
    </div>
</div>


</div>


    );
  }
}

export default Process;
