import React from 'react';
import Modal from 'react-modal';
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
      <Modal
        isOpen={isVisible}
        className={mainClassName}>
        <UploadFormContainer
          onCloseModal={onCloseModal}
        />
      </Modal>
    );
  }

};

export default PostUploadView;
