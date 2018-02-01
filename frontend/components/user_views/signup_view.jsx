import React from 'react';
import {Component} from 'react';

// Components
import NewUserForm from './components/new_user_form';
import CustomButton from '..//generic/buttons/custom_button';

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

  handleDemo() {
    // TODO: Implement Demo login.
  }

  // ==================================================
  // Render
  // ==================================================
  renderOrBar() {
    return (
      <div className="or-bar">
        <div className="plain-line"/>
        <p className="or-text">OR</p>
        <div className="plain-line"/>
      </div>
    );
  }

  renderFormContent() {
    return (
      <div className="signup-view-content">
        <h1 className="logo-text">Instagraph</h1>
        <CustomButton text={"Demo Login"} onPress={this.handleDemo} />
        {this.renderOrBar()}
        <NewUserForm
          formUser={this.state}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
        />
        <div className="disclaimer">
          <p>By signing up, you agree to our</p>
          <p>Terms & Privacy Policy.</p>
        </div>
      </div>
    );
  }

  renderLoginFooter() {
    return (
      <div className="signup-view-login-footer">
        <p>Have an account?</p>
        <link>Log in</link>
      </div>
    );
  }

  render() {
    return (
      <main className="logged-out-view">
        <div className="signup-view-container">
          {this.renderFormContent()}
          {this.renderLoginFooter()}
        </div>
      </main>
    );
  }

};


export default SignupView;
