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
      {title: 'Sputnik Bar', location: {lat: 32.062969, lng: 34.7731424}},
      {title: 'Carmel Market', location: {lat: 32.0681957, lng: 34.7683496}},
      {title: 'The old man and the sea', location: {lat: 32.0529989,lng: 34.7500188}},
      {title: 'The Breakfast Club', location: {lat:32.063058, lng:34.769731}},
      {title: 'Salam Bombai', location: {lat:32.063017, lng:34.773053}},
      {title: 'Bicicletta', location: {lat:32.066763, lng:34.770543}},
      {title: 'Radio bar', location: {lat:32.063372, lng:34.775124}},
      {title: 'TLV fashion mall', location: {lat:32.068135, lng: 34.783701}},
      {title: 'Sarona Market', location: {lat:32.071948,lng:34.786990}},
      {title: 'Habima square', location: {lat:32.072913, lng:34.779671}},
      {title: 'Vitrina', location: {lat:32.076677, lng:34.781839}},
      {title: 'Benedict', location: {lat:32.090240, lng:34.773748}},
      {title: 'Cafe Zorik', location: {lat:32.094112, lng:34.784993}},
      {title: 'Room Service Bar', location: {lat:32.092549, lng: 34.776173}}
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
