import React from 'react';
import {Component} from 'react';

// Components
import UploadFormContainer from './forms/upload_form_container';


class PostUploadView extends Component {

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {isVisible, onCloseModal} = this.props;
    const mainClassName = isVisible ? "main-post-upload-form" : "hidden";

    return(
      <div
        isOpen={isVisible}
        onClick={onCloseModal}
        className={mainClassName}>
        <UploadFormContainer />
      </div>
    );
  }

};

export default PostUploadView;
