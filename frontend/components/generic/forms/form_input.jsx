import React from 'react';
import {Component} from 'react';


class FormInput extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderInput() {
    const {autoFocus, type, placeholder, value, onChange} = this.props;

    const isEmpty = value === "";
    const isPassword = type === "password";
    const className = !isEmpty && isPassword ? "form-input filled-password"
                                             : "form-input";

    return (
      <input
        autoFocus={autoFocus}
        spellCheck={false}
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

  renderTextarea() {
    const {autoFocus, placeholder, value, className, onChange, onKeyDown} = this.props;

    return (
      <textarea
        autoFocus={autoFocus}
        spellCheck={false}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    )
  }

  render() {
    const {type, contentClassName} = this.props;
    const render = type === "textarea" ? this.renderTextarea() : this.renderInput();

    return (
      <div className={contentClassName}>
        {render}
      </div>
    );
  }

};


export default FormInput;
