import React from 'react';
import {Component} from 'react';

// Components
import CustomButton from '../../generic/buttons/custom_button'
import FormInput from '../../generic/forms/form_input'


class NewUserForm extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderEmailInput(formUser, onUpdate) {
    return (
      <FormInput
        type="text"
        placeholder={"Email"}
        value={formUser.email}
        onChange={onUpdate('email')}
      />
    );
  }

  renderUsernameInput(formUser, onUpdate) {
    return (
      <FormInput
        type="text"
        placeholder={"Username"}
        value={formUser.username}
        onChange={onUpdate('username')}
      />
    );
  }

  renderPasswordInput(formUser, onUpdate) {
    return (
      <FormInput
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
        <form className="signup-form">
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
