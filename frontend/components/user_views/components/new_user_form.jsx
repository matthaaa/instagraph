import React from 'react';
import {Component} from 'react';

// Components
import CustomButton from '../../generic/buttons/custom_button';
import FormInput from '../../generic/forms/form_input';
import ErrorText from '../../generic/forms/error_text';


class NewUserForm extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderEmailInput(formUser, onUpdate) {
    return (
      <FormInput
        type="text"
        contentClassName={"signup-input"}
        placeholder={"Email"}
        value={formUser.email}
        onChange={onUpdate('email')}
      />
    );
  }

  renderNameInput(formUser, onUpdate) {
    return (
      <FormInput
        type="text"
        contentClassName={"signup-input"}
        placeholder={"Full Name"}
        value={formUser.full_name}
        onChange={onUpdate('full_name')}
      />
    );
  }

  renderUsernameInput(formUser, onUpdate) {
    return (
      <FormInput
        type="text"
        contentClassName={"signup-input"}
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
        contentClassName={"signup-input"}
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
          {this.renderNameInput(formUser, onUpdate)}
          {this.renderUsernameInput(formUser, onUpdate)}
          {this.renderPasswordInput(formUser, onUpdate)}
          <div className="error-messages">

          </div>
          <div className="signup-form-button">
            <CustomButton text={"Sign Up"} onPress={onSubmit} />
          </div>
        </form>
      </div>
    );
  }

};


export default NewUserForm;
