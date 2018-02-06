import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
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
      <form className="upload-photo-form-content">
        <Dropzone
          className="upload-photo-dropzone"
          multiple={false}
          accept="image/*"
          onDrop={onUpdate("img_url")}>
          <p>Drag over an image or click to select a file to upload!</p>
        </Dropzone>
        <label className="upload-photo-description-input">Description
          <FormInput
            type="textarea"
            className="upload-photo-description-input"
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
