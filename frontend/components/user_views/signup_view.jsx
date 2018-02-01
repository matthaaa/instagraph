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

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div>
        <h1>This is the sign up view.</h1>
        <NewUserForm
          formUser={this.state}
          onUpdate={this.handleUpdate}
          onSubmit={(e) => this.handleSubmit(e)}
        />
      </div>
    );
  }

};


export default SignupView;
