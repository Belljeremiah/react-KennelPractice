import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerForm extends Component {
    state = {
        ownerName: "",
        number: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // Creating a method {actions that can be performed on objects} with a local scope {the predefined barriers of something in code such as these curly braces giving scope to my comment in a comment} that will handle updating state, set loadingStatus, and createLocation Object, invoke the OwnerManager POST that I built in modules and update it on the list array 
newOwnerConstructor = evt => {
    evt.preventDefault();
    if (this.state.ownerName === "" || this.state.address === "" || this.state.city === "") {
        window.alert("UHRMAHGURD You Forgot to fill out an INPUT FIELD WHY!!!???");
    } else {
        this.setState({ loadingStatus: true});
        const owner = {
            name: this.state.ownerName,
            number: this.state.phoneNumber,
        };

        // Use the Post Luke!
        OwnerManager.post(owner)
        .then(() => this.props.history.push("/owners"));
    }
};

render(){

    return(
        <>
        <form>
            <fieldset>
                <div className="formgrid">
                    <input type="text" required onChange={this.handleFieldChange}
                    id="ownerName"
                    placeholder="Owner Name"
                    />
                    <label htmlFor="ownerName">Owner Name</label>
                    <input type="text"
                    required onChange={this.handleFieldChange}
                    id="phoneNumber"
                    placeholder="Phone Number"
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                </div>
                <div className="alignRight">
                    <button type="button"
                    disabled={this.state.loadingStatus}
                    onClick={this.newOwnerConstructor}>Submit
                    </button>
                </div>
            </fieldset>
        </form>
        </>
    )
}

}

export default OwnerForm;
