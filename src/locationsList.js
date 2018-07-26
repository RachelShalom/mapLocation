import React, { Component } from 'react';
import MapContainer from "./mapContainer"
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
                        this.props.locations.map((location, index) => (
                            <li key={index} className='location-list-item'>
                                <div className='location-details'>
                                    <p>{location.title}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <MapContainer locations={this.props.locations}/>
            </div>
        );
    }
}

export default LocationsList;