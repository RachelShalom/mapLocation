import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class MapContainer extends Component {
   render() {
   const Map = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <Map
          containerElement={ <div style={{ height: `700px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default MapContainer;


