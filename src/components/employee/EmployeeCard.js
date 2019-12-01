import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-employee">    {this.props.employee.name}</span></h3>
          <p>Employee Status: {this.props.employee.employmentStatus}</p>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire!</button>
          <button type="button"
          onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
          <button type="button"
           onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>    
        </div>
      </div>
    );
  }
}

export default EmployeeCard;