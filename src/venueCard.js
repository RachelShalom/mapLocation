import React, { Component } from 'react';
class Venue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeInfo: []
        }
    }

    // //fetch information about a place by place id from foursquare API
    // componentDidMount() {
    //     fetch('https://api.foursquare.com/v2/venues/' + this.props.venuesList[0].id +
    //         '?&client_id=KKUOPJE5CNANQU4FOS4KDC1ZDX45FQR5JDRQ4KCTBVOVHZCZ&' +
    //         'client_secret=ZAVRSOASDD4HPBXHSHZTCW0PCWNJZMGAMW4GUTG2LXQQF0KE&v=20180323').then(
    //         (res) => {
    //             if (!res.ok) {throw new Error('Something went wrong'); }
    //             else{
    //                 return res.json()
    //             }
    //         }).then(val => {
    //             this.setState({ placeInfo: [val.response.venue] })
    //         }).catch(() => this.setState({ placeInfo: "Sorry no additional info is available" }));
    // }

    render() {
        return (<div>
            {console.log(this.props.placeInfo)}
            {console.log(typeof this.props.placeInfo,this.props.placeInfo.length )}
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
