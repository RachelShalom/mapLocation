import React, { Component } from 'react';
class Venue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeInfo: []
        }
    }


    render() {
        return (<div>
            {(this.props.placeInfo.length ===1) &&
                <div>
                    <p>{this.props.placeInfo[0].name}</p>
                    <p>{this.props.placeInfo[0].categories[0].name}</p>
                    <p>{this.props.placeInfo[0].location.address}</p>
                    <p>{this.props.placeInfo[0].contact.phone}</p>
                    <a href={this.props.placeInfo[0].canonicalUrl}>View on Foursquare</a>
                </div>}
            {(typeof this.props.placeInfo === "string") && <p>{this.props.placeInfo} :(</p>}
        </div>);
    }




}
export default Venue;
