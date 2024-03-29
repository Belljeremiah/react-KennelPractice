import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager';

class LocationList extends Component {
    // This si where I define State. I will fill it with other methods and components so that it will tell this component what to render
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

    deleteLocation = id => {
        LocationManager.delete(id)
        .then(() => {
          LocationManager.getAllLocations()
          .then((newLocations) => {
            this.setState({
                locations: newLocations
            })
          })
        })
      }
debugger
    render(){
        console.log("Location LIST: Render");
        console.log(this.state.locations)
        return (
            <React.Fragment>
            <section className="section-content">
             <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/locations/new")}}>
                Open New Location
             </button>
            </section>
            <div className="container-cards">
                {this.state.locations.map(location => 
                <LocationCard 
                key={location.id} 
                location={location} 
                deleteLocation={this.deleteLocation}
                />
                )}
            </div>
            </React.Fragment>
        )
    }
}

export default LocationList;