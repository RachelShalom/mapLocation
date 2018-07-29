/*global google*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {withGoogleMap, GoogleMap, Marker,InfoWindow } from 'react-google-maps';
import Venue from './venueCard';

class MapContainer extends Component {

  state={
    markerId: '',
    center:{lat: 32.067993, lng: 34.768596 }
  }

   render() {
     let markers=  this.props.locations.map((L,index) => 
         <Marker key={index} position={L.location}  icon={((this.props.markerId===index)&&'http://maps.google.com/mapfiles/ms/icons/blue-dot.png')||('http://maps.google.com/mapfiles/ms/icons/red-dot.png')}
         title={L.title} onClick={() => this.props.onMarkerClick(L.location.lat,L.location.lng,index)}>
         {/*if the index in the state equals to the current Marker index then  show the the info window for this marker*/}
           {(this.props.markerId===index) &&
             <InfoWindow
               onCloseClick={() => this.props.onInfoWindowClose()}>
               <div>
               <span>{L.title}</span>
               <Venue venuesList={this.props.venue}/>
               </div>
             </InfoWindow>
           }
         </Marker>
     )
     const Map = withGoogleMap(props => 
       <GoogleMap
         center={this.state.center}
         defaultZoom={13}>
         {/* Add the Markers to the map */}
         {markers}
       </GoogleMap>

     );
  
   return(
      <div>
        <Map
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `600px`, width: '500px' }} /> }
          mapElement={ <div className="mapElement" style={{ height: `100%`, width:'100%' }} /> }
        />
      </div>
   );
  }
}
export default MapContainer;


