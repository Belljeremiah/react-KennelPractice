// Similar to how our Main.JS was used for nutshell and other applications Application View is where we actually call or set the users view of the application in each new state. Simple imports pull the data from the other modules and populate it together in established methods. Using Render to set the final output.
import { Route, Redirect } from "react-router-dom"
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
import AnimalForm from './animal/AnimalForm'
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeForm from "./employee/EmployeeForm"
import LocationForm from "./location/LocationForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"

// THis is the first set class for displaying on the dom. It functions as a COMPONENT which is a method that I have pulled from React native. By extending the props of Component from React to ApplicationViews as a class/object I can utilize the premade functions and methods inside of Component inside of React.
class ApplicationViews extends Component {
   // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

// Here I render the actual application onto the Dom by feeding the argument/parameter of props into the anonymous function that is set equal to render and return or display the appropriate Route as set by the Link Paths already established further in the Application.
  render() {
    return (
      // I honestly Do not know what React.Fragment is doing.... From what Research is telling me it allows me to group a list of children without adding nodes to the DOM. You can also write this as <></> or empty tags and that is fine but does not support attributes or keys...?
      <React.Fragment>
        {/* This is the home Path routing to the Home button on NavBar and the base path */}
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* These are my routers for animal Cards etc. I pass props to their childe elements in this case AnimalList which allows access to the three props of history, match and another I cannot remember maybe ID? history.push is what we are after for the exercise functionality. */}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
            } else {
            return <Redirect to="/login" />
            }
        }} />
        
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} 
          // THis is a spread operator that seperates out all the key values in the object and sets them all as props. Includes History and match we want history for history.push router property.
          {...props}
          />
        }} />
        {/* the (\d+)/edit allows for the edit path I have set up and passes the spread operator seperates out the passed props into useable sections it also iterates through the array */}
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }}
        />
        
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        {/* The exact path operates kind of like a .then and tells the render to go all the way through to the exact path end of the json file instead of just loading a preemptive immature page */}
        
        {/* These are for the Locations */}
        <Route exact path="/locations" render={(props) => {
            return <LocationList />
        }} />
        
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}
          {...props}/>
        }} />

        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        
        {/* These are my routers for the Employees Module */}
        <Route exact path="/employees" render={(props) => {
            return <EmployeeList {...props} />
        }} />

        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        
        {/* This is my route path for Owners It still lacks delete functionality and creation functionality. And Edit... I suck but I am trying. */}
        <Route path="/owners" render={(props) => {
            return <OwnerList />
        }} />

        {/* Route path for get Animals with Employees which will be an embed that allows for a fetch call that returns both */}
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        
        {/* Route Path for login functionality routes for URL to login screen Need Regex */}
        <Route path="/login" component={Login} />
      {/* This is the React.Fragment wrappers closing tag which allows all of these Routers to function it can also be writeen as <></> but has some limitations in that form. Specifically use of attributes classes */}
      </React.Fragment>
    )
}}

export default ApplicationViews;