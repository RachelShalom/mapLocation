import React, { Component } from 'react';
import './locationsLists.css';
class LocationsList extends Component {
    render() {
        return (
            <div>Hi I am a LocationsList

        <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='filter locations'
                    //   onChange={(event) => this.updateQuery(event.target.value)}
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
            </div>
        );
    }
}

export default LocationsList;