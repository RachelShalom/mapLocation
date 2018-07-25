import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';
import logo from './logo.svg';
import './App.css';
import MapContainer from "./mapContainer"

class App extends Component {
  state={
    locations:[]
  }
 

  render() {
    const location= { lat: 33.33280500000001, lng:  35.896244}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Tel Aviv</h1>
        </header>
        <div style={{width:'600px', height:"600px"}}>
        <MapContainer google={this.props.google}/>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA_BZAjIEzmJEbgfMmPQv7C5-fXOOt9IN4'
})(App)

