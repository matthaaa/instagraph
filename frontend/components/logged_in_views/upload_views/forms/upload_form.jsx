import React from 'react';
import {Component} from 'react';


class UploadForm extends Component {

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
    return(
      <form className="upload-photo-form" >
        <label>
          <FormInput
            type="textarea"
            className="upload-photo-input"
          />
        </label>
      </form>
    );
  }

};

export default UploadForm;
