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
    }
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

  // ==================================================
  // Render
  // ==================================================
  render() {
    return(
      <div>
        <UploadForm
          formPost={this.state}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }

};

export default PostUploadView;
