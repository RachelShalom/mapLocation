import React, { Component } from 'react';
import MapContainer from "./mapContainer"
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './locationsLists.css';
class LocationsList extends Component {
    state = {
        query: '',
        venue:'',
        markerId:''
      }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }
    clearQuery = () => {
        this.setState({ query: '' })
    }
    //Fetch venue information from foursquare api and chnge the state to the current marker is
    getVenueDetails=(lat,lng,index)=>{fetch('https://api.foursquare.com/v2/venues/search?ll='+lat+','+lng
    +'&&client_id=KKUOPJE5CNANQU4FOS4KDC1ZDX45FQR5JDRQ4KCTBVOVHZCZ&client_secret=ZAVRSOASDD4HPBXHSHZTCW0PCWNJZMGAMW4GUTG2LXQQF0KE&v=20180323')
    .then(res=>res.json()).then(val=>{
        console.log(val.response.venues[0].name)
        this.setState({venue:val.response.venues[0].name, markerId:index})
    }).catch((e)=>console.log(e));}
    
    render() {
        let showingPlaces;
        //if the user typed anything the
        if(this.state.query){
            // it filters search by the user input
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingPlaces = this.props.locations.filter((location) => match.test(location.title));
            //otherwise the list of places is not filtered
        }else{
            showingPlaces=this.props.locations;
        }
        //this is self explanatory it is sorting the places by name using the sort-by library
        showingPlaces.sort(sortBy('name'));
        return (
            <div className="container">
                <div>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='filter locations'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ul className="locations-list">
                {/*this shows the filtered results(places) to the screen*/}
                    {
                        showingPlaces.map((location, index) => (
                            <li key={index} className='location-list-item' 
                            //the function get the lat lng and marker id 
                            onClick={()=>this.getVenueDetails(location.location.lat,location.location.lng,index)}>
                                <div className='location-details'>
                                    <p>{location.title}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {this.state.venue&&<p>{this.state.venue}</p>}
                </div>
      
                <MapContainer locations={showingPlaces} markerId={this.setState.markerId}/>
            </div>
        );
    }
}

export default LocationsList;