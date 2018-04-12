import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Reveal from 'react-reveal/Reveal'
import mapMarker from './map_marker_white_dot.svg';

const demoFancyMapStyles = require("./map_style.json");

const MyMapComponent = withScriptjs(withGoogleMap((props) =>


  <GoogleMap
    defaultZoom={11}
      defaultOptions={{ styles: demoFancyMapStyles }}
    defaultCenter={{ lat: 37.861968, lng: -122.297472}}

  >
    {props.isMarkerShown && <Marker

      position={{ lat: 37.861968, lng: -122.297472}}
      title={'my marker'}
      icon={mapMarker}

      />}
  </GoogleMap>


))


export default MyMapComponent;
