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
      <div className="error-messages-list">
        <div key={idx} className="error-message-container">
          {this.renderError(sessionError)}
        </div>
      </div>
    ));
  }

  render() {
    const {errors} = this.props;

    if (errors.session) {
      return errors.session.length !== 0 ? this.renderErrorList(errors) : <div />
    }
  }

};

export default FormErrors;
