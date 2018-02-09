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

    if (!isVisible) return null;

    return(
      <div
        onClick={onCloseModal}
        className={mainClassName}>
        <UploadFormContainer onCloseModal={onCloseModal} />
      </div>
    );
  }

};

export default PostUploadView;
