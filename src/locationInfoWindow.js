import React, { Component } from 'react';
import Venue from './venueCard';
import {InfoWindow } from 'react-google-maps';
class LocationInfoWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeInfo: []
        }
    }

       //fetch information about a place by place id from foursquare API
       componentDidMount() {
        fetch('https://api.foursquare.com/v2/venues/' + this.props.venuesList[0].id +
            '?&client_id=KKUOPJE5CNANQU4FOS4KDC1ZDX45FQR5JDRQ4KCTBVOVHZCZ&' +
            'client_secret=ZAVRSOASDD4HPBXHSHZTCW0PCWNJZMGAMW4GUTG2LXQQF0KE&v=20180323').then(
            (res) => {
                if (!res.ok) {throw new Error('Something went wrong'); }
                else{
                    return res.json()
                }
            }).then(val => {
                this.setState({ placeInfo: [val.response.venue] })
            }).catch(() => this.setState({ placeInfo: "Sorry no additional info is available" }));
    }

render(){
    {console.log(this.state.placeInfo)}
    {console.log(typeof this.state.placeInfo,this.state.placeInfo.length )}
    return( 
        <InfoWindow
        onCloseClick={() => this.props.onCloseClick()}>
        <div>
        <span>{this.props.title}</span>
        <Venue placeInfo={this.state.placeInfo}/>
        </div>
      </InfoWindow>
    
    
   );
}


}

export default LocationInfoWindow;