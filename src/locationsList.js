/*global google*/
/* eslint-disable no-undef */
import React, { Component } from 'react';
import MapContainer from "./mapContainer"
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './locationsLists.css';
import { List, Input, Segment, Container } from 'semantic-ui-react'
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
    //this is called when user clicks the X in the info window
      handleInfoWindowClose = () => {
        this.setState({
            markerId: ''
        });
    }
    
    //Fetch venue information from foursquare api and chnge the state to the current marker index. 
    //this function is called when user click on the plave name in the list or on the place marker in the map
    fetchVenueDetails = (lat, lng, index) => {
        fetch('https://api.foursquare.com/v2/venues/search?ll=' + lat + ',' + lng
            + '&&client_id=KKUOPJE5CNANQU4FOS4KDC1ZDX45FQR5JDRQ4KCTBVOVHZCZ&client_secret=ZAVRSOASDD4HPBXHSHZTCW0PCWNJZMGAMW4GUTG2LXQQF0KE&v=20180323')
        .then(res => res.json()).then(val => {
            this.setState({ venue: val.response.venues, markerId: index })
        }).catch((e) => console.log(e));
    }
    
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
            <Container>
            <div className="container">
                <div className="item">
                <Segment inverted>
                    <Input inverted
                        className='search-contacts'
                        type='text'
                        placeholder='filter locations'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </Segment>
                <List divided >
                {/*this shows the filtered results(places) to the screen*/}
                    {
                        showingPlaces.map((location, index) => (
                            <List.Item key={index} 
                            //the function get the lat lng and marker id 
                            onClick={()=>this.fetchVenueDetails(location.location.lat,location.location.lng,index)}>
                                <div className='location-details'>
                                <List.Header as='a'>{location.title}</List.Header>
                                </div>
                            </List.Item>
                        ))
                    }
                </List>
                {this.state.venue&&<p>{this.state.venue[0].name}</p>}
                </div>
                <div>
                <MapContainer locations={showingPlaces} onInfoWindowClose={this.handleInfoWindowClose}
                onMarkerClick={this.fetchVenueDetails}
                 markerId={this.state.markerId} venue={this.state.venue}/>
                 </div>
            </div>
            </Container>
        );
    }
}

export default LocationsList;