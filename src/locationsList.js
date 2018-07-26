import React, { Component } from 'react';
import MapContainer from "./mapContainer"
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import './locationsLists.css';
class LocationsList extends Component {
    state = {
        query: ''
      }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }
    clearQuery = () => {
        this.setState({ query: '' })
    }
    
    render() {
        let showingPlaces;
        if(this.state.query){
            const match = new RegExp(escapeRegExp(this.state.query), 'i');
            showingPlaces = this.props.locations.filter((location) => match.test(location.title));
        }else{
            showingPlaces=this.props.locations;
        }
        showingPlaces.sort(sortBy('name'));
        return (
            <div>Hi I am a LocationsList

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
                    {
                        showingPlaces.map((location, index) => (
                            <li key={index} className='location-list-item'>
                                <div className='location-details'>
                                    <p>{location.title}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <MapContainer locations={showingPlaces}/>
            </div>
        );
    }
}

export default LocationsList;