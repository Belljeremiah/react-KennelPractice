import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-owner">{this.props.owner.name}</span></h3>
          <p>Owner Phone Number: {this.props.owner.phoneNumber} </p>
          <button type="button" onClick={() => this.props.deleteOwners(this.props.owner.id)}>REMOVE OWNER!</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;