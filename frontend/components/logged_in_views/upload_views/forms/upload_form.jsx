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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.state = {
      author_id: this.props.currentUser.id,
      img_url: "",
      description: "",
    };
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleDrop(files) {
    this.handleUploadImage(files[0]);
  }

  handleUploadImage(file) {
    const uploadPreset = window.cloudinary_options.upload_preset;
    const uploadUrl = `https://api.cloudinary.com/v1_1/${window.cloudinary_options.cloud_name}/image/upload`;

    let upload = request.post(uploadUrl)
                        .field('upload_preset', uploadPreset)
                        .field('file', file);

    upload.end((err, response) => {

      if (err) {
        console.error(err);
      }
      console.log(response.body.secure_url);

      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url,
        });
      }
    });

    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createNewPost(this.state);
  }

  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }


  // ==================================================
  // Render
  // ==================================================
  render() {
    const {onCloseModal} = this.props;

    return(
      <form className="upload-photo-form-content">
        {this.state.img_url === '' ? null :
        <div>
          <img src={this.state.uploadedFileCloudinaryUrl} />
        </div>}
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
            value={this.state.description}
            onChange={this.handleUpdate("description")}
          />
        </label>
        <div className="upload-photo-form-buttons">
          <CustomButton className="upload-photo-form-button" text={"Upload"} onPress={this.handleSubmit} />
          <CustomButton className="upload-photo-form-button" text={"Cancel"} onPress={onCloseModal} />
        </div>
      </form>
    );
  }

};

export default UploadForm;
