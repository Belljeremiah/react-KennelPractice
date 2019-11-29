import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';


class OwnerDetail extends Component {

  state = {
      name: "",
      phoneNumber: "",
  }

  componentDidMount(){
    console.log("OwnerDetail: ComponentDidMount");
    //get(id) from OwnerManager and hang on to the data; put it into state
    OwnerManager.get(this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        phoneNumber: owner.phoneNumber
      });
    });
  }

  render() {
      console.log("Awesome Diagnostics with Rose and JB", this.props)
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Phone Number: {this.state.phoneNumber}</p>
            <button type="button">Edit</button>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;