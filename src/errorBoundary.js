//this component is copy pasted from reach docs
import React, { Component } from 'react';
import './errorBoundary.css'
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    // display fallback ui
    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
      // You can also log the error to an error reporting service
      console.error(error);
    }
  
    render() {
      if (this.state.errorInfo) {
        return (
        <div> 
          <h2>Oops something went wrong please refresh and try again</h2>
          <div className="morty">
            <div className="hair"></div>
            <div className="ears"></div>
            <div className="face"></div>
            <div className="eyes"></div>
            <div className="nose"></div>
            <div className="mouth"></div>
            <div className="lines"></div>
          </div>
        </div>)
      }
      
      
     // Normally, just render children
      return this.props.children;
    }  
  }
  
  export default ErrorBoundary;