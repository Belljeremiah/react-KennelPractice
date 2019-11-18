import React, { Component } from 'react'
// Attempting to build a render function for my location card with react
class LocationCard extends Component {
    render() {
    return (
        <div className="card">
            <div className="card-content">
                <h2>Location: <span className="card-location">Hoboken</span></h2>
                <p>Area: New Jersey</p>
            </div>
        </div>
    );
  }
}

export default LocationCard;