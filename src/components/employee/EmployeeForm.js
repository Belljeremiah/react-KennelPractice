import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeForm extends Component {
    // Setting state key values to empty strings
    state = {
        employeeName: "",
        employmentStatus: "",
        loadingStatus: false,
    };
// Creating an event handler to target the value of the input and update in real time
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    
    };
    // setting up a function to handle new employees that has an if else statement to check for empty strings and send out an alert if a field is empty.
    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.employeeName === "" || this.state.employmentStatus === "") {
            window.alert("Please input an employee name and status");    
        } else {
            this.setState({ loadingStatus: true});
            const employee = {
                name: this.state.employeeName,
                employmentStatus: this.state.employmentStatus,
            };

        // Create the Employee and redirect User back to the list of employees. 
        EmployeeManager.post(employee)
        .then(() => this.props.history.push("/employees"));
    }
};

render(){
    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                    type="text"
                    required
                    onChange={this.handleFieldChange}
                    id="employeeName"
                    placeholder="Employee Name"
                    />
                    <label htmlFor="employeeName">Name of Employee</label>
                    <input type="text"
                    required
                    onChange={this.handleFieldChange}
                    id="employmentStatus"
                    placeholder="Employment Status"
                    />
                    <label htmlFor="employeeStatus">Employee Status</label>
                </div>
                <div className="alignRight">
                    <button type="button"
                    disabled={this.state.loadingStatus}
                    onClick={this.constructNewEmployee}>Submit</button>
                </div>
            </fieldset>
        </form>
    </>
    )
    }
}

export default EmployeeForm;