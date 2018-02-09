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
  constructor(props) {
    super(props);
    this.state = {
      author_id: "",
      img_url: "",
      description: "",
    };
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleUploadImage(filed[0]);
  }

  handleUploadImage(file) {
    const uploadPreset = window.cloudinary_options.upload_preset;
    const uploadUrl = `https://api.cloudinary.com/v1_1/${window.cloudinary_options.cloud_name}/upload`;

    const upload = request.post(uploadUrl)
                        .field('upload_preset', uploadPreset)
                        .field('file', file);

    upload.end((err, response) => {

      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleSubmit() {
    this.props.createNewPost(
      this.state.author_id,
      this.state.description,
      this.state.img_url,
    );
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {formPost, onSubmit, onUpdate, onCloseModal} = this.props;

    return(
      <form className="upload-photo-form-content">
        <Dropzone
          className="upload-photo-dropzone"
          multiple={false}
          accept="image/*"
          onDrop={this.handleDrop}>
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
        <div className="upload-photo-form-buttons">
          <CustomButton className="upload-photo-form-button" text={"Upload"} onPress={onSubmit} />
          <CustomButton className="upload-photo-form-button" text={"Cancel"} onPress={onCloseModal} />
        </div>
      </form>
    );
  }

};

export default UploadForm;
