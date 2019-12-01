import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeList extends Component {
    state = {
        employees: [],
    }
    
    // Declaring a function that runs state and puts the data into state from the api call
    componentDidMount(){
        console.log("EMPLOYEE LIST: EmployeeDidMount");
        // Here is where we grab the Employee data from API and put it in state to be made into props
        EmployeeManager.getAllEmployees()
        .then((employeesArray) => {
            this.setState ({
                employees: employeesArray
            })
        })
    }
    
    deleteEmployee = id => {
        EmployeeManager.delete(id)
        .then(() => {
          EmployeeManager.getAllEmployees()
          .then((newEmployees) => {
            this.setState({
                employees: newEmployees
            })
          })
        })
      }

    render(){
        console.log("EMPLOYEE LIST: Render");

        return (
            <React.Fragment>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {this.props.history.push("/employees/new")}}>
                    New Employee / Rehire
                </button>
            </section>
            <div className="container-cards">
                {this.state.employees.map(employee => <EmployeeCard {...this.props}
                key={employee.id} 
                employee={employee}
                deleteEmployee={this.deleteEmployee}
                {...this.props}
                />)}
            </div>
            </React.Fragment>
        )
    }
}

export default EmployeeList