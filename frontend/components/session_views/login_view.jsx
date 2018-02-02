import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import SessionForm from './components/session_form';
import MainLogo from '..//generic/logos/main_logo';


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
  }

  // ==================================================
  // Callbacks
  // ==================================================
  populateStateField(field, value) {
    const letters = ("" + value).split("");
    let resultInput = "";

    const timer = setInterval(() => {
      resultInput += letters.shift();
      if (letters.length === 0) {
        clearInterval(timer, 0);
        return this.setState({[field]: resultInput});
      }
      this.setState({[field]: resultInput});
    }, 120);
  }

  populateFields(username, password) {
    this.populateStateField("username", username);

    // Ensures password begins typing after username since
    // these methods are asynchronous.
    setTimeout(() => {
      this.populateStateField("password", password);
    }, 1500);
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
    this.populateFields("demo_lovati", "password");
  }

  // ==================================================
  // Render
  // ==================================================
  renderLoginFooter() {
    return (
      <div className="toggle-footer">
        <p>Don't have an account?</p>
        <Link className="toggle-footer-link" to={"/signup"}>Sign up</Link>
      </div>
    );
  }

  renderMainFormContent() {
    return (
      <div className="login-view-main-content">
        <div className="logo-container">
          <MainLogo />
        </div>
        <SessionForm
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

  // TODO: Image goes here.
  renderLeft() {
    return <div/>;
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
