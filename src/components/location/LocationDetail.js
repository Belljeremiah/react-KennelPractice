// Imports so that my code can run as react and have what it needs to work
import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './Location.css'

// This is where I extend the properties of the Component method to the class (which is kind of like a super variable with object properties which is also a class) by doing this I can use the methods in Component from react on the object I create

class LocationDetail extends Component {
    // this is where I set state(the state of the class) which equates to a time of semipersistant manipulable storage that I create for the rest of this component to be applied to and used by.
    state = {
        name: "",
        address: "",
        city: "",
    }

    //Here is where I am accessing one of the methods inside of component from react it is called componentDidMount. cDM is used to get a reference to a state that is set and then give assignments to those key values that I set in state which mach my database object
    componentDidMount(){
        // Console log to use as a sort of in line debugger to make sure that each method is running and see it in real time on the console
        console.log("LocationDetail: ComponentDidMount");
        console.log(this.props)
        // LocationManager is going to grab a ref to the object and hold onto it with the id tag unique to it in the database and then set state to it so I can further manipulate it when necessary
        LocationManager.get(this.props.locationId)
        // chaining a .then on to set an anonymous function to run inside cDM to allow state to take a parameter and update its props to state when ran
        .then((location) => {
            this.setState({
                // THis is like setting the value to a variable but instead I am assigning value to the state I set earlier when this runs.
                name: location.name,
                address: location.address,
                city: location.city
            });
        });
    } 
    // This is another method from Component Import in react that lets me use a dom injector and updator all in one without having to actually build it. I am using this to append the dom by altering what is displayed after state is updated by passing props this is called render()
    render() {
        return (
            <div className="card">
                <div className="card-content">
        <h2>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h2>
    <h3>Address: {this.state.address}</h3>
    <small>City: {this.state.city}</small>
                </div>
            </div>
        );
    }
}

export default LocationDetail;