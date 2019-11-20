import React, { Component } from 'react'
// Attempting to build a render function for my location card with react
class LocationCard extends Component {
    render() {
    return (
        <div className="card">
            <div className="card-content">
    <h2>Location: <span className="card-location">{this.props.location.name}</span></h2>
    <p>Address: {this.props.location.address}</p>
                <p>City:  {this.props.location.city}</p>
            </div>
        </div>
    );
  }
}

export default LocationCard;