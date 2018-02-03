import React from 'react';
import {Component} from 'react';


class FormInput extends Component {

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {
      autoFocus,
      type,
      placeholder,
      contentClassName,
      value,
      onChange,
    } = this.props;

    const isEmpty = value === "";
    const isPassword = type === "password";
    const className = !isEmpty && isPassword ? "form-input filled-password"
                                             : "form-input";

    return (

      <div className={contentClassName}>
        <input
          autoFocus={autoFocus}
          className={className}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

};


export default FormInput;
