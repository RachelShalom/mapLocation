import React, { Component } from 'react';
class Venue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeInfo: []
        }
    }
  
    //fetch information about a place by place id from foursquare API
    componentDidMount(){
      fetch('https://api.foursquare.com/v2/venues/'+this.props.venuesList[0].id+
      '?&client_id=KKUOPJE5CNANQU4FOS4KDC1ZDX45FQR5JDRQ4KCTBVOVHZCZ&'+
      'client_secret=ZAVRSOASDD4HPBXHSHZTCW0PCWNJZMGAMW4GUTG2LXQQF0KE&v=20180323').then(
        res => res.json()).then(val => {
            this.setState({placeInfo:[val.response.venue]})
         })      
    }

    render() {
        return (<div>
            {console.log(this.state.placeInfo)}
            {(this.state.placeInfo.length>0)&&
             <div>   
            <p>{this.state.placeInfo[0].name}</p>
            <p>{this.state.placeInfo[0].location.address}</p>
            <p>{this.state.placeInfo[0].contact.phone}</p>
            <a href={this.state.placeInfo[0].canonicalUrl}>click here for more details</a>
            </div>}
            {/* <p>{this.props.venuesList[0].location.address}</p>
            <p>{this.props.venuesList[0].categories[0].name}</p>
           */}
            <p></p>
            <p></p>
            
            
            </div>);
    }




}
export default Venue;
