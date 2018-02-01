import React from 'react';
import {Component} from 'react';

// Components
import Button from '../../generic/buttons/Button'

class NewUserForm extends Component {

  // ==================================================
  // Render
  // ==================================================

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
        <h1>This is the Session Form Component.</h1>
        <form>
          {this.renderUsernameInput(formUser, onUpdate)}
          <br/>
          {this.renderPasswordInput(formUser, onUpdate)}
          <br/>
          <Button text={"Sign Up"} onPress={onSubmit} />
        </form>
      </div>
    );
  }

};

export default NewUserForm;
