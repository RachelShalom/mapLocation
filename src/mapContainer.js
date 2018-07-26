/*global google*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {  withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from 'react-google-maps';

class MapContainer extends Component {

  state={
    openInfoWindowMarkerId: ''
  }
  handleToggleOpen = (markerId) => {
    this.setState({
        openInfoWindowMarkerId: markerId
    });
}
  handleToggleClose = (markerId) => {
    this.setState({
        openInfoWindowMarkerId: ''
    });
}

   render() {
     let markers=  this.props.locations.map((L,index) => {
       return (
         <Marker key={index} position={L.location} title={L.title} onClick={() => this.handleToggleOpen(index)}>
           {this.state.openInfoWindowMarkerId===index &&
             <InfoWindow
               onCloseClick={() => this.handleToggleClose()}>
               <span>{L.title}</span>
             </InfoWindow>
           }
         </Marker>)
     })
   

     
    

     const Map = withScriptjs(withGoogleMap(props => 
       <GoogleMap
         defaultCenter={{lat: 32.0852999, lng: 34.78176759999999 }}
         defaultZoom={13}>
         {/* Add the Markers to the map */}
         {markers}
         )}
       </GoogleMap>

     ));
  
   return(
      <div>
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_BZAjIEzmJEbgfMmPQv7C5-fXOOt9IN4"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `800px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default MapContainer;


