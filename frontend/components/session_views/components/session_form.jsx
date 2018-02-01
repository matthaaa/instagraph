import React from 'react';
import {Component} from 'react';

// Components
import Button from '../../generic/buttons/Button'

class SessionForm extends Component {

  // ==================================================
  // Render
  // ==================================================

  renderUsernameInput(formUser, onUpdate) {
    return (
      <input
        type="text"
        placeholder={"Username"}
        value={formUser.username}
        onChange={onUpdate('username')}
      />
    );
  }

  renderPasswordInput(formUser, onUpdate) {
    return (
      <input
        type="password"
        placeholder={"Password"}
        value={formUser.password}
        onChange={onUpdate('password')}
      />
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
          {this.renderUsernameInput(formUser, onUpdate)}
          <br/>
          {this.renderPasswordInput(formUser, onUpdate)}
          <br/>
          <Button text={"Log In"} onPress={onSubmit} />
        </form>
      </div>
    );
  }

};

export default SessionForm;
