
import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import LocationInfoWindow from './locationInfoWindow'
import ErrorBoundary from './errorBoundary'


class MapContainer extends Component {

  state={
    markerId: this.props.markerId,
    center:this.props.mapCenter
  }
  //if the parent sends a new mapcenter and a marker IDprop then it should update the map component before it is rendered
  componentWillReceiveProps(nextProps){
    if(nextProps.mapCenter !== this.props.mapCenter){
        this.setState({center:nextProps.mapCenter});
    }
    if(nextProps.markerId !== this.props.markerId){
        this.setState({markerId:nextProps.markerId});
    }
  }

   render() {
     let markers=  this.props.locations.map((L,index) => 
         <Marker tabindex={0} key={index} position={L.location} alt="marker" icon={((this.props.markerId===index)&&'http://maps.google.com/mapfiles/ms/icons/blue-dot.png')||('http://maps.google.com/mapfiles/ms/icons/red-dot.png')}
         title={L.title} onClick={() => this.props.onMarkerClick(L.location.lat,L.location.lng,index)}>
         {/*if the index in the state equals to the current Marker index then  show the the info window for this marker*/}
           {(this.state.markerId===index) &&
           <LocationInfoWindow venuesList={this.props.venue} title={L.title }onCloseClick={this.props.onInfoWindowClose} /> 
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
        <ErrorBoundary>
        <Map
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={ <div style={{ height: `650px`, width: '100%' }}aria-label="google-maps map" /> }
          mapElement={ <div className="mapElement" style={{ height: `100%`, width:'100%' }}role="application"  /> }
        />
         </ErrorBoundary>
      </div>
   );
  }
}
export default MapContainer;


