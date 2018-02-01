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
  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  // ==================================================
  // Render
  // ==================================================
  renderFormContent() {
    return (
      <div className="login-view-form-content">
        <SessionForm
          formUser={this.state}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }

  render() {
    return (
      <main className="logged-out-view">
        <div className="login-view-content">
          {this.renderFormContent()}
        </div>
      </main>
    );
  }
};

export default LoginView;
