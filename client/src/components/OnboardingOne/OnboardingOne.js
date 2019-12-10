import React, { Component } from "react";
import "./OnboardingOne.css";
import InputTextField from "../InputTextField/InputTextField.js";
import logo from "../../../../assets/images/login_logo.png";

// Class Based React Component
class OnboardingOne extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "OnboardingOne"
    };
  }

  // Runs after Component is loaded in the broswer
  componentDidMount() {}

  // Runs after a component has been updated
  componentDidUpdate() {}

  // Runs right before a component is removed from the DOM
  componentWillUnmount() {}

  render() {
    return (
      <div className={this.state.classList}>
        <div className="OnboardingOne__logo-container">
          <img className="OnboardingOne__logo" src={logo} alt="" />
        </div>

        <h1>Step One</h1>
        <div className="OnboardingOne__input-field-container">
          <InputTextField type="text" name="name" placeholder="Name"></InputTextField>
        </div>
        <div className="OnboardingOne__input-field-container">
          <InputTextField type="text" name="email" placeholder="Email"></InputTextField>
        </div>
        <div className="OnboardingOne__input-field-container">
          <InputTextField type="text" name="password" placeholder="Password"></InputTextField>
        </div>
        <div className="OnboardingOne__input-field-container">
          <InputTextField
            type="text"
            name="confirm password"
            placeholder="Confirm Password"
          ></InputTextField>
        </div>
      </div>
    );
  }
}

export default OnboardingOne;