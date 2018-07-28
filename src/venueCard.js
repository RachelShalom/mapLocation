import React, { Component } from 'react';
class Venue extends Component {
    state={
        placeInfo:[]
    }
    
    
    componentDidMount(){
      fetch('https://api.foursquare.com/v2/venues/'+this.props.venuesList[0].id+
      '?&client_id=KKUOPJE5CNANQU4FOS4KDC1ZDX45FQR5JDRQ4KCTBVOVHZCZ&'+
      'client_secret=ZAVRSOASDD4HPBXHSHZTCW0PCWNJZMGAMW4GUTG2LXQQF0KE&v=20180323').then(
        res => res.json()).then(val => {
            console.log(val.response.venue)
            this.setState({placeInfo:[val.response.venue]})
        })      
    }

    render() {
        return (<div>
         
            <p>{this.state.placeInfo[0].name}</p>
            <p>{this.props.venuesList[0].location.address}</p>
            <p>{this.props.venuesList[0].categories[0].name}</p>
          
            <p></p>
            <p></p>
            
            
            </div>);
    }




}
export default Venue;
