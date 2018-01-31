import React from 'react';
import {Component} from 'react';

// Components
import Button from '../generic/buttons/Button';
import SessionForm from './components/session_form';

class LoginView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ==================================================
  // Callbacks
  // ==================================================

  handleSubmit() {
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>This is the login view.</h1>
        <SessionForm onSubmit={this.handleSubmit} />
      </div>
    );
  }

};

export default LoginView;
