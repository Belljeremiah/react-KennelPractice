import React, { Component } from "react"

class Login extends Component {

  // Set initial state if you do not set state you have nothing to update or to render inside the component. This is the first building block to effective creation.
  state = {
    email: "",
    password: ""
  }

  // Update state whenever an input field is edited so when this runs handleFieldChange can be called to handle an event attached to it to update state to the vale of the target event and then employ .setState set state to the value of state to change. 
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
// handleLogin function? event and run and then prevent deDefault of the function. 
  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
        "credentials",
        JSON.stringify({
          //setting up email and password values and putting them as string values or javascript as json.stringify 
            email: this.state.email,
            password: this.state.password
        })
    )
    this.props.history.push("/animals");
// Aaccessing the history props passsed to this from the parent component
  }
// using the render method to put a form on the dom with jsx code for HTML and running handleFieldChange to allow for the input fields and the object fields to update simultaneously
  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputEmail">Email address</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
                Sign in
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login