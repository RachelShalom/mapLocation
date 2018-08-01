import React, { Component } from 'react';
import './App.css';
import LocationsList from './locationsList';

class App extends Component {
  state={
     locations: [
      {title: 'Taqueria', location: {  lat: 32.0628761, lng: 34.7765329}},
      {title: 'Molly Blooms', location: { lat: 32.0728099, lng: 34.7870064}},
      {title: 'Buxa Bar', location: { lat:32.063881 , lng:34.773164 }},
      {title: 'Kuli Alma', location: {lat: 32.0622202, lng: 34.7748855}},
      {title: 'Sputnik Bar', location: {lat: 32.062969, lng: 34.7731424}},
      {title: 'Carmel Market', location: {lat: 32.0681957, lng: 34.7683496}},
      {title: 'The old man and the sea', location: {lat: 32.0529989,lng: 34.7500188}},
      {title: 'The Breakfast Club', location: {lat:32.063058, lng:34.769731}}
    ]

  }
 

  render() {
    return (
      <div className="App">
        <main>
        <LocationsList locations={this.state.locations}/>
      
        </main>
        
      </div>
    );
  }
}
export default App;
