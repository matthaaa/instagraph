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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ==================================================
  // Callbacks
  // ==================================================

  handleSubmit() {
    // TODO
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <div>
        <h1>This is the sign up view.</h1>
        <NewUserForm
          requestUser={this.props.requestUser}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }

};

export default SignupView;
