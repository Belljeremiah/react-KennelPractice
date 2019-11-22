// This is where I import React into the application and use it to extend method props onto new classes that I will create
import React, { Component } from 'react';
// This is another method that I am importing from React that allows me to use Link functionality from this part of the code under my button in the rerturn after Animal Card.
import { Link } from 'react-router-dom';

// Here I am declaring a class and extending the properties of Component from React onto the class/object that I am creating
class AnimalCard extends Component {
  // render() is a method for establishing elements on the DOM and displaying them. React automatically allows elements to be objects and creates them and renders them easily but they are immutable.
  render() {
    // Here I am telling the render function to display these elements on the dom and to run them when it is ran
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
         {/* Adding Text into Dom and passing it props as if I were passing an argument to a function but giving it the value of the props.animal.name */}
          <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
         {/* This is the link method functionality I imported earlier in the code. When the button is clicked it links it to the value of the URL/animals/(value of props.animal.id) */}
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default AnimalCard;