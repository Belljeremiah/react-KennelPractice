import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager';

class LocationList extends Component {
    state = {
        locations: [],
    }
    
    // Declaring a function that runs state and puts the data into state from the api call
    componentDidMount(){
        console.log("LOCATION LIST: LocationDidMount");
        // Here is where we grab the Location data from API and put it in state to be made into props
        LocationManager.getAllLocations()
        .then((locationsArray) => {
            this.setState({
                locations: locationsArray
            })
        })
    }

    render(){
        console.log("Location LIST: Render");

        return (
            <div className="container-cards">
                {this.state.locations.map(location => <LocationCard key={location.id} location={location} />)}
            </div>
        )
    }
}

export default LocationList