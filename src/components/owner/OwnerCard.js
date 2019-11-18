import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-owner">Timothy Leary</span></h3>
          <p>Type of Owner: Mostly Dogs</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;