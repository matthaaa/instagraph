import React from 'react';
import {Component} from 'react';


// Components
import CustomButton from '../../../generic/buttons/custom_button'
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
    const {formPost, onSubmit, onUpdate} = this.props;

    return(
      <form className="upload-photo-form">
        <input
          type="file"
          onChange={onUpdate("img_url")}
          className="upload-photo-url-input"
        />
        <label className="upload-photo-description-input">Description
          <FormInput
            type="textarea"
            className="upload-photo-input"
            value={formPost.description}
            onChange={onUpdate("description")}
          />
        </label>
        <div className="upload-photo-form-button">
          <CustomButton text={"Upload"} onPress={onSubmit} />
        </div>
      </form>
    );
  }

};

export default UploadForm;
