import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    console.log(this.props.owner.id)
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-owner">{this.props.owner.name}</span></h3>
          <p>Owner Phone Number: {this.props.owner.phoneNumber} </p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>REMOVE OWNER!</button>
          <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default OwnerCard;