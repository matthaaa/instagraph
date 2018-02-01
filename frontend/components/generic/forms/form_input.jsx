import React from 'react';
import {Component} from 'react';


class FormInput extends Component {

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {
      type,
      placeholder,
      contentClassName,
      value,
      onChange,
    } = this.props;

    return (
      <div className={contentClassName}>
        <input
          className="form-input"
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
