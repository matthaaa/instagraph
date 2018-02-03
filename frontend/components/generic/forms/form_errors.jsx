import React from 'react';
import {Component} from 'react';


class FormErrors extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  renderError(sessionError) {
    return (
      <p className="error-message-text">{sessionError}</p>
    );
  }

  renderErrorList(errors) {
    return errors.session.map((sessionError, idx) => (
      <div key={idx} className="error-message-container">
        {this.renderError(sessionError)}
      </div>
    ));
  }

  renderLoginErrors(errors) {
    if (errors.length === 2) {
      // Prompts for only a username if both fields are blank.
      return this.renderError(errors[1])
    } else {
      return this.renderError(errors[0])
    }
  }

  render() {
    const {type, errors} = this.props;

    console.log(this.props);

    console.log(type === "login");
    console.log(!!type);
    console.log(type);

    const errorList = !!type && (type === "login") ?
                this.renderLoginErrors(errors) :
                this.renderErrorList(errors);

    return (
      <div className="error-messages-list">
        {errorList}
      </div>
    );
  }

};

export default FormErrors;
