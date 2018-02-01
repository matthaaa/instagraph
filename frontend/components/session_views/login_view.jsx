import React from 'react';
import {Component} from 'react';

// Components
import SessionForm from './components/session_form';

class LoginView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // ==================================================
  // Callbacks
  // ==================================================

  handleSubmit() {
    e.preventDefault();
    this.props.login(this.state);
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div>
        <h1>This is the login view.</h1>
        <SessionForm
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }

};

export default LoginView;
