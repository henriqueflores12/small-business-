import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
// import {Map1} from '../router/Map1'
import LocationOnIcon from "@material-ui/icons/LocationOn";


const MarkerComponent = ({ text }) => <div>{text}</div>;

class Map1 extends Component {
  static defaultProps = {
    center: {
      lat: 30.267153,
      lng: -97.743057
    },
    zoom: 11
  };

  render() {
    console.log("PROCESS .ENV", process.env.REACT_APP_Map);
    console.log(this.props, "ooooooooooooooooooooo");
    return !this.props.location ? (
      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MarkerComponent lat={this.props.lat} lng={this.props.lng} />
        </GoogleMapReact>
        {/* <div><h1>{this.props.name}</h1></div>
  <div>{this.props.location.state.description}</div>
    <div>{this.props.location.state.hours}</div>
    <div>{this.props.location.state.address}</div> */}
      </div>
    ) : (
      // Important! Always set the container height explicitly
      <div id="detail-map" style={{ height: "30vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:process.env.REACT_APP_MAP_KEY }}
          defaultCenter={{
            lat: this.props.location.state.lat,
            lng: this.props.location.state.lng
          }}
          defaultZoom={this.props.zoom}
        >
          <LocationOnIcon
            lat={this.props.location.state.lat}
            lng={this.props.location.state.lng}
          />

          {/* <MarkerComponent
            lat={this.props.location.state.lat}
            lng={this.props.location.state.lng}
            
          /> */}
        </GoogleMapReact>
        <div>
          <h1>{this.props.location.state.name}</h1>
        </div>
        <div>{this.props.location.state.description}</div>
        <div>{this.props.location.state.hours}</div>
        <div>{this.props.location.state.address}</div>
      </div>
    );
  }
}

export default Map1;
