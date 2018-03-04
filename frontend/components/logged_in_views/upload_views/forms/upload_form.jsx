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
    this.handleStopBubble = this.handleStopBubble.bind(this);
    this.state = {
      author_id: this.props.currentUser.id,
      img_url: "",
      description: "",
      uploadDisabled: true,
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

      if (response.body.secure_url !== '') {
        this.setState({
          img_url: response.body.secure_url,
          uploadDisabled: false,
        });
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createNewPost(this.state).then(
      this.props.onCloseModal()
    );
  }

  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleStopBubble(event) {
    if (!event) {
      const event = window.event;
    }

    event.cancelBubble = true;

    if (event.stopPropagation) {
      event.stopPropagation();
    }
  }

  // ==================================================
  // Render
  // ==================================================
  renderUploadedPhoto() {
    return (
      <img
        src={this.state.img_url}
        className="uploaded-preview"
      />
    );
  }

  renderDropzone() {
    return (
      <Dropzone
        className="upload-photo-dropzone"
        multiple={false}
        accept="image/*"
        onDrop={this.handleDrop}>
        <div className="upload-photo-dropzone-content">
          <img
            src="http://res.cloudinary.com/instagraph/image/upload/v1518209167/file.png"
            height={80}
            className="upload-image-icon"
          />
          <p className="upload-photo-text">Drag over an image or click</p>
          <p className="upload-photo-text">to select a file to upload!</p>
        </div>
      </Dropzone>
    );
  }

  renderPhotoContent() {
    if (this.state.img_url === "") {
      return this.renderDropzone();
    } else {
      return this.renderUploadedPhoto();
    }
  }

  render() {
    const {onCloseModal} = this.props;

    return(
      <form
        className="upload-photo-form-content"
        onClick={this.handleStopBubble}>
        {this.renderPhotoContent()}
        <FormInput
          type="textarea"
          className="upload-photo-description-input"
          value={this.state.description}
          onChange={this.handleUpdate("description")}
          placeholder={"Add a description..."}
        />
        <div className="upload-photo-form-buttons">
          <CustomButton
            disabled={this.state.uploadDisabled}
            className="photo-form-button upload"
            text={"Upload"}
            onPress={this.handleSubmit} />
          <CustomButton
            className="photo-form-button cancel"
            text={"Cancel"}
            onPress={onCloseModal} />
        </div>
      </form>
    );
  }

};

export default UploadForm;
