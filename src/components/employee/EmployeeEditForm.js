import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
      employeeName: "",
      status: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedEmployee = {
        id: this.props.match.params.employeeId,
        name: this.state.employeeName,
        status: this.state.employmentStatus
      };

      EmployeeManager.update(editedEmployee)
      .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        console.log(this.props)
      EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
          this.setState({
            employeeName: employee.name,
            status: employee.employmentStatus,
            loadingStatus: false,
          });
      });
    }

    render() {
        console.log(this.state)
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeeName">Employee Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="status"
                value={this.state.employmentStatus}
              />
              <label htmlFor="status">Employment Status</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EmployeeEditForm;