import React from 'react';
import {Component} from 'react';

// Components
import NewUserForm from './components/new_user_form';

class SignupView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
    this.props.signup(this.state);
  }

  // ==================================================
  // Render
  // ==================================================
  renderFormContent() {
    return (
      <div className="signup-view-content">
        <h1 className="logo-text">Instagraph</h1>
        <NewUserForm
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
        <div className="signup-view-container">
          {this.renderFormContent()}
        </div>
      </main>
    );
  }

};


export default SignupView;
