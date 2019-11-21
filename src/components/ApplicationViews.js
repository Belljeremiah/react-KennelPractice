// Similar to how our Main.JS was used for nutshell and other applications Application View is where we actually call or set the users view of the application in each new state. Simple imports pull the data from the other modules and populate it together in established methods. Using Render to set the final output.
import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
// This defines the start of new code that has either been auto-linked or established as needed with alterations to the code.
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'

// THis is the first set class for displaying on the dom. It functions as a COMPONENT which is a method that I have pulled from React native. By extending the props of Component from React to ApplicationViews as a class/object I can utilize the premade functions and methods inside of Component inside of React.
class ApplicationViews extends Component {
// Here I render the actual application onto the Dom by feeding the argument/parameter of props into the anonymous function that is set equal to render and return or display the appropriate Route as set by the Link Paths already established further in the Application.
  render() {
    return (
      // I honestly Do not know what React.Fragment is doing.... From what Research is telling me it allows me to group a list of children without adding nodes to the DOM. You can also write this as <></> or empty tags and that is fine but does not support attributes or keys...?
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} 
          // THis is a spread operator that seperates out all the key values in the object and sets them all as props.
          {...props}
          />
        }} />
        {/* The exact path operates kind of like a .then and tells the render to go all the way through to the exact path end of the json file instead of just loading a preemptive immature page */}
        <Route exact path="/locations" render={(props) => {
            return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
          {...props}/>
        }} />
        <Route path="/employees" render={(props) => {
            return <EmployeeList />
        }} />
        <Route path="/owners" render={(props) => {
            return <OwnerList />
        }} />
      </React.Fragment>
    )
}}

export default ApplicationViews;