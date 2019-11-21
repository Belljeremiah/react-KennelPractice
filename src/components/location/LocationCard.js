import React, { Component } from 'react'
import { Link } from "react-router-dom";
// Attempting to build a render function for my location card with react
class LocationCard extends Component {
    render() {
    return (
        <div className="card">
            <div className="card-content">
            <h2>Location: <span className="card-location">{this.props.location.name}</span></h2>
            <p>Address: {this.props.location.address}</p>
            <p>City:  {this.props.location.city}</p>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>ERADICATE AREA!</button>
            <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
            </div>
        </div>
    );
  }
}

export default LocationCard;