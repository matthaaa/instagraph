import React from 'react';
import {Component} from 'react';

// Components
import UploadForm from './forms/upload_form';


class PostUploadView extends Component {

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
      <div>
        <UploadForm />
      </div>
    );
  }

};

export default PostUploadView;
