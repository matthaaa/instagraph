import React from 'react';
import {Component} from 'react';

// Components
import FormInput from '../../../../../../../generic/forms/form_input';


class AddCommentForm extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        body: "",
        user_id: this.props.currentUser.id,
      }
    };
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleUpdate(field) {
    return (event) => {
      this.setState({
        comment: Object.assign(this.state.comment, {
          body: event.target.value,
        })
      });
    }
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    return (
      <form className="new-comment-form-content">
        <FormInput
          type="textarea"
          contentClassName="new-comment-form-input-container"
          placeholder={"Add a comment..."}
          value={this.state.comment.body}
          onChange={this.handleUpdate}
        />
      </form>
    );
  }

};

export default AddCommentForm;
