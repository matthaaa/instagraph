import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import NewUserForm from './components/new_user_form';
import CustomButton from '..//generic/buttons/custom_button';
import MainLogo from '..//generic/logos/main_logo';


class SignupView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      full_name: "",
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.clearErrors();
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
      <div className="toggle-footer fadeIn">
        <p>Have an account?</p>
        <Link className="toggle-footer-link" to={"/login"}>Log in</Link>
      </div>
    );
  }

  renderMainFormContent() {
    return (
      <div className="signup-view-main-content fadeIn">
        <div className="logo-container">
          <MainLogo />
        </div>
        <CustomButton
          isLink
          path={"/login/demo"}
          text={"Log in as Demo"}
        />
        {this.renderOrBar()}
        <NewUserForm
          errors={this.props.errors}
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

  // TODO: Image goes here.
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
