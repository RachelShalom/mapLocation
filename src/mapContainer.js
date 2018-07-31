
import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker,InfoWindow } from 'react-google-maps';
import Venue from './venueCard';

class MapContainer extends Component {

  state={
    markerId: '',
    center:this.props.mapCenter
  }
  //if the parent sends a new mapcenter prop then it should update the map component before it is rendered
  componentWillReceiveProps(nextProps){
    if(nextProps.mapCenter !== this.props.mapCenter){
        this.setState({center:nextProps.mapCenter});
    }
}

   render() {
     let markers=  this.props.locations.map((L,index) => 
         <Marker tabindex={0} key={index} position={L.location} alt="marker" icon={((this.props.markerId===index)&&'http://maps.google.com/mapfiles/ms/icons/blue-dot.png')||('http://maps.google.com/mapfiles/ms/icons/red-dot.png')}
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
          containerElement={ <div style={{ height: `650px`, width: '100%' }}aria-label="google-maps map" /> }
          mapElement={ <div className="mapElement" style={{ height: `100%`, width:'100%' }}role="application"  /> }
        />
      </div>
   );
  }
}
export default MapContainer;


