// Pulling Component and Link from react Native. ALso importing AnimalManager or my API handler in for use later
import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

// Declaring a class/object with the ability to use Component Methods from React
class AnimalDetail extends Component {
// Setting State which is the state of the app in its current use. So this is setting state for AnimalDetail the class I declared earlier so when I need to set Props for the Animal Card I can do that here.
  state = {
      name: "",
      breed: "",
      loadingStatus: true
  }

  // This is a method that runs to load data from a remote endpoin in the json. in this case animal/id then I set the state to have animal/name animal/breed from json server as well. This also allows for another render to occur and makes for a double invocation fo Render which can lead to errors later on but is used for the exercise instead of constructor()
  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    // This gathers that id from my API manager in the modules section.
    AnimalManager.get(this.props.animalId)
    .then((animal) => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        loadingStatus: false
      });
    });
  }
  
  // This resets state to invoke the delete method written from animalManager and invokes loadingstatus to allow for a pause for data to collate and impede users from hitting delete before it is fully loades as an object on the dom
  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete(this.props.animalId)
    .then(() => this.props.history.push("/animals"))
}
  // This is what is invoked after this AnimalDetail is ran and is the path for the Route to follow and render to the DOM it is being fed the props state from the previous function.
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}
// Generic export allowing this module to be imported with any statement identifier
export default AnimalDetail;