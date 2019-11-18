import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employee">Don Knotts</span></h3>
          <p>Employee Status: Might Be Fired</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;