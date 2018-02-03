import React from 'react';
import {Component} from 'react';


class ErrorText extends Component {

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
    const {text} = this.props;

    return (
      <p className="error-message-text">{text}</p>
    );
  }

};

export default ErrorText;
