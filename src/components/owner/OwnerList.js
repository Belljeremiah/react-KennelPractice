import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager';

class OwnerList extends Component {
    state = {
        owners: [],
    }
    
    // Declaring a function that runs state and puts the data into state from the api call
    componentDidMount(){
        console.log("Owner LIST: OwnerDidMount");
        // Here is where we grab the Owner data from API and put it in state to be made into props
        OwnerManager.getAllOwners()
        .then((ownersArray) => {
            this.setState ({
                owners: ownersArray
            })
        })
    }

    deleteOwner = id => {
        OwnerManager.deleteOwner(id)
        .then(() => {
          OwnerManager.getAllOwners()
          .then((newOwners) => {
            this.setState({
                owners: newOwners
            })
          })
        })
      }

    render(){
        console.log("OWNER LIST: Render");
        console.log(this.state.owners)
        return (
            <React.Fragment>
            <section className="section-content">
                <button type="button"
                className="btn"
                onClick={() => {this.props.history.push("/owners/new")}}>Add Owner</button>
            </section>
            <div className="container-cards">
                {this.state.owners.map(owner => 
                <OwnerCard 
                key={owner.id} 
                owner={owner} 
                deleteOwner={this.deleteOwner}
                {...this.props}
                />)}
            </div>
            </React.Fragment>
        )
    }
}

export default OwnerList