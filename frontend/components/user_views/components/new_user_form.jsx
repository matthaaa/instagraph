import React from 'react';
import {Component} from 'react';

// Components
import CustomButton from '../../generic/buttons/custom_button'

class NewUserForm extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderEmailInput(formUser, onUpdate) {
    return (
      <label>Email
        <input
          type="text"
          value={formUser.email}
          onChange={onUpdate('email')}
        />
      </label>
    );
  }

  renderUsernameInput(formUser, onUpdate) {
    return (
      <label>Username
        <input
          type="text"
          value={formUser.username}
          onChange={onUpdate('username')}
        />
      </label>
    );
  }

  renderPasswordInput(formUser, onUpdate) {
    return (
      <label>Password
        <input
          type="password"
          value={formUser.password}
          onChange={onUpdate('password')}
        />
      </label>
    );
  }

  render() {
    const {
      formUser,
      onUpdate,
      onSubmit,
    } = this.props;

    return (
      <div>
        <form>
          {this.renderEmailInput(formUser, onUpdate)}
          <br/>
          {this.renderUsernameInput(formUser, onUpdate)}
          <br/>
          {this.renderPasswordInput(formUser, onUpdate)}
          <br/>
          <CustomButton text={"Sign Up"} onPress={onSubmit} />
        </form>
      </div>
    );
  }

};

export default NewUserForm;
