import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeDetail extends Component {
    state = {
        name: "",
        employmentStatus: "",
        loadingStatus: true
    }

    // Use Life Cycle Hook Component Did Mount to set state
    componentDidMount(){
        console.log("EmployeeDetail: ComponentDidMount OH YEAH ITS MOUNTED!");
        // get id from Employee Manager using api call
        EmployeeManager.get(this.props.employeeId)
        .then((employee) => {
            this.setState({
                name: employee.name,
                employmentStatus: employee.employmentStatus,
                loadingStatus: false
            });
        });
    }
    handleDelete = () => {
        this.setState({loadingStatus: true})
        EmployeeManager.delete(this.props.employeeId)
        .then(() => this.props.history.push("/employee"))
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Name: <span className="card-employee">    {this.props.employee.name}</span></h3>
                    <p>Employee Status: {this.props.employee.employmentStatus}</p>
                    <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire!</button>
                    <button type="button"
                    onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>    
                </div>
            </div>
        );
    }
}

export default EmployeeDetail;