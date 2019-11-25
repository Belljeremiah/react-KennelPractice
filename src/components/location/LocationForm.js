import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

// declaring a class naming it within the same conventions as the assignment for ease of reference
class LocationForm extends Component { 
    state = {
        locationName: "",
        address: "",
        city: "",
        loadingStatus: false
    };

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    makeNewLocation = event => {
        event.preventDefault();
        // conditional statement to ensure the user does not input empty fields for the object. Notifies them with an alert Box.
        if (this.state.locationName === "" || this.state.address === "" || this.state.city ==="") {
        window.alert("DOH! Fill in the fields or you are unworthy of donuts!");
         } else { 
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.locationName,
                address: this.state.address,
                city: this.state.city
            };
            // Using Api Handler to utilize Post method to put a new object on the array now
            LocationManager.post(location)
            .then(() => this.props.history.push("/locations"));
        }
    };

// Utilizing Render from React to produce a card so that this will populate on the DOM
render(){
// setting up a return of the coming data
    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="locationName"
                        placeholder="Location name"
                        />
                        <label htmlFor="locationName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="address"
                        />
                        <label htmlFor="address">Address</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="city"
                        placeholder="city"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewAnimal}
                        >Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}

}

export default LocationForm;