import React from 'react';
import {Component} from 'react';


class FormInput extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderInput() {
    const {id, autoFocus, type, placeholder, value, onChange} = this.props;

    const isEmpty = value === "";
    const isPassword = type === "password";
    const className = !isEmpty && isPassword ? "form-input filled-password"
                                             : "form-input";

    return (
      <input
        id={id}
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
    const {id, autoFocus, placeholder, value, className, onChange, onKeyDown} = this.props;

    return (
      <textarea
        id={id}
        autoFocus={autoFocus}
        spellCheck={false}
        className={`form-input ${className}`}
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
