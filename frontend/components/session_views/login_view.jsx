import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import SessionForm from './components/session_form';
import MainLogo from '..//generic/logos/main_logo';
import AppPreview from '../generic/app_preview';


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
  // Lifecycle
  // ==================================================
  componentDidMount() {
    if (this.props.isDemo) {
      this.handleDemo();
    }
    this.props.clearErrors();
  }

  // ==================================================
  // Callbacks
  // ==================================================
  populateStateField(field, value) {
    const letters = ("" + value).split("");
    let resultInput = "";

    const timer = setInterval(() => {
      resultInput += letters.shift();

      this.setState({[field]: resultInput});

      if (letters.length === 0) {
        clearInterval(timer, 0);
      }
    }, 120);
  }

  populateFieldAndLogin(username, password) {
    const usernameDuration = 120 * username.length + 50;
    const passwordDuration = 120 * password.length + 50;
    const totalDuration = usernameDuration + passwordDuration;

    this.populateStateField("username", username);

    // Ensures password begins typing after username since
    // these methods are asynchronous.
    setTimeout(() => {
      this.populateStateField("password", password);
    }, (usernameDuration));

    // Ensures login happens after demo has updated the state.
    setTimeout(() => {
      this.handleDemoLogin();
    }, (totalDuration));
  }

  // ==================================================
  // Event Handlers
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

  handleDemo() {
    // TODO: Add demo user to secrets or hide credentials in some way.
    this.populateFieldAndLogin("demo_lovati", "password");
  }

  handleDemoLogin() {
    this.props.login(this.state);
  }

  // ==================================================
  // Render
  // ==================================================
  renderLoginFooter() {
    return (
      <div className="toggle-footer fadeIn">
        <p>Don't have an account?</p>
        <Link className="toggle-footer-link" to={"/signup"}>Sign up</Link>
      </div>
    );
  }

  renderMainFormContent() {
    return (
      <div className="login-view-main-content fadeIn">
        <div className="logo-container">
          <MainLogo />
        </div>
        <SessionForm
          errors={this.props.errors}
          formUser={this.state}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
        />
      <a
        className="instagram-link"
        href="http://instagram.com"
      >
        {'Looking for Instagram?'}
      </a>
      </div>
    );
  }

  renderRight() {
    return (
      <div className="login-view-content">
        {this.renderMainFormContent()}
        {this.renderLoginFooter()}
      </div>
    );
  }

  renderLeft() {
    return (
      <div className="signup-view-preview">
        <AppPreview />
      </div>
    );
  }

  render() {
    return (
      <main className="logged-out-view">
        <div className="login-view-container">
          {this.renderLeft()}
          {this.renderRight()}
        </div>
      </main>
    );
  }
};


export default LoginView;
