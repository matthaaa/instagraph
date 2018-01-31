import React from 'react';
import {Component} from 'react';

// Components
import Button from '../generic/buttons/Button'

class LoginView extends Component {

  // ==================================================
  // Callbacks
  // ==================================================

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

  }


  // ==================================================
  // Render
  // ==================================================

  renderUsernameInput() {
    return (
      <label>Username
        <input type="text"/>
      </label>
    );
  }

  renderPasswordInput() {
    return (
      <label>Password
        <input type="password"/>
      </label>
    );
  }

  render() {
    return (
      <div>
        <h1>This is the login view.</h1>
        <form>
          {this.renderUsernameInput()}
          <br/>
          {this.renderPasswordInput()}
          <br/>
          <Button text={"Log In"} onPress={this.handleSubmit} />
        </form>
      </div>
    );
  }

};

export default LoginView;
