import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

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

  renderLoginFooter() {
    return (
      <div className="signup-view-login-footer">
        <p>Have an account?</p>
        <Link className="signup-footer-login-link" to={"/login"}>Log in</Link>
      </div>
    );
  }

  renderMainFormContent() {
    return (
      <div className="signup-view-main-content">
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

  renderRight() {
    return (
      <div className="signup-view-content">
        {this.renderMainFormContent()}
        {this.renderLoginFooter()}
      </div>
    );
  }

  // Image will go here.
  renderLeft() {
    return <div/>;
  }

  render() {
    return (
      <main className="logged-out-view">
        <div className="signup-view-container">
          {this.renderLeft()}
          {this.renderRight()}
        </div>
      </main>
    );
  }

};


export default SignupView;
