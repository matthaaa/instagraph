import React from 'react';
import {Component} from 'react';


// Components
// import CustomButton from '../../generic/buttons/custom_button'
import FormInput from '../../../generic/forms/form_input'
// import FormErrors from '../../generic/forms/form_errors';


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
    const {formPost, onUpdate} = this.props;
    console.log(formPost);

    return(
      <form className="upload-photo-form">
        <input
          onChange={onUpdate("img_url")}
          className="upload-photo-url-input" type="file"
        />
        <label className="upload-photo-description-input">Description
          <FormInput
            type="textarea"
            className="upload-photo-input"
            value={formPost.description}
            onChange={onUpdate("description")}
          />
        </label>
      </form>
    );
  }

};

export default UploadForm;
