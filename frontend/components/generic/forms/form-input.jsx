import React from 'react';
import {Component} from 'react';


class FormInput extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {
      type,
      placeholder,
      value,
      onChange,
    } = this.props;

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

};

export default FormInput;
