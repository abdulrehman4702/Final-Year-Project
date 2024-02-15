// GoogleMapPage.js
import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
const GoogleMapPage = () => {
  return (
    <Map google={this.props.google} zoom={14}>
      <Marker onClick={this.onMarkerClick} name={"Current location"} />
      <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: "https://www.google.com/maps/@33.7029007,72.8397314,15z?entry=ttu",
})(GoogleMapPage);
