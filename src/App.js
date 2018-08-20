import React, { Component } from 'react';
import './App.css';
import LocationsList from './locationsList';
import ErrorBoundary from './errorBoundary'

class App extends Component {
  state={
     locations: [
      {title: 'Taqueria', location: {  lat: 32.0628761, lng: 34.7765329}},
      {title: 'Molly Blooms', location: { lat: 32.0728099, lng: 34.7870064}},
      {title: 'Buxa Bar', location: { lat:32.063881 , lng:34.773164 }},
      {title: 'Kuli Alma', location: {lat: 32.0622202, lng: 34.7748855}},
      {title: 'Sputnik Bar', location: {lat: 32.0627887,lng:34.7729471}},
      {title: 'Carmel Market', location: {lat: 32.0681957, lng: 34.7683496}},
      {title: 'The old man and the sea', location: {lat: 32.0529989,lng: 34.7500188}},
      {title: 'The Breakfast Club', location: {lat:32.0628041,lng:34.769562}},
      {title: 'Salam Bombay', location: {lat:32.0627946,lng:34.7731907}},
      {title: 'Bicicletta', location: {lat:32.0664642,lng:34.770651}},
      {title: 'Radio bar', location: {lat:32.062979, lng:34.7749842}},
      {title: 'TLV fashion mall', location: {lat:32.0691893,lng:34.7846722}},
      {title: 'Sarona Market', location: {lat:32.0714132,lng:34.7869144}},
      {title: 'Habima square', location: {lat:32.0726217,lng:34.7795626}},
      {title: 'Vitrina', location: {lat:32.0761387,lng:34.781586}},
      {title: 'Benedict', location: {lat:32.0634055,lng:34.772939}},
      {title: 'Cafe Zorik', location: {lat:32.0937463,lng:34.785007}},
      {title: 'cafe castel', location: {lat:32.0910895,lng:34.7829045}}
    ]

  }
 

  render() {
    return (
      <ErrorBoundary>
        <div className="App">
          <main>

            <LocationsList locations={this.state.locations} />
          </main>

        </div>
      </ErrorBoundary>
    );
  }
}
export default App;
