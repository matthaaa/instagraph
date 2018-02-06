import React from 'react';
import {Component} from 'react';

// Components
import UploadForm from './forms/upload_form';


class PostUploadView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      author_id: this.props.currentUser.id,
      img_url: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Event Handlers
  // ==================================================
  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("NOT YET IMPLEMENTED");
    // this.props.createPost(this.state);
  }

  // handleSubmit(e){
  //   e.preventDefault();
  //
  //   const formData = new FormData();
  //
  //   formData.append("image[image_url]", this.state.img_url);
  //   formData.append("image[description]", this.state.description);
  //
  //   this.props.createPost(formData);
  // }
  //
  // handleFileChange(e){
  //   const reader = new FileReader();
  //
  //   // TODO: Implement multi-photo uploads?
  //   const fileList = e.currentTarget.files;
  //   const first_img = fileList[0];
  //
  //   reader.onloadend = () => (
  //     this.setState({img_url: reader.result, imageFile: first_img})
  //   );
  //
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({image_url:"", imageFile: null});
  //   }
  //
  // }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return(
      <div>
        <UploadForm
          formPost={this.state}
          onSubmit={this.handleSubmit}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }

};

export default PostUploadView;
