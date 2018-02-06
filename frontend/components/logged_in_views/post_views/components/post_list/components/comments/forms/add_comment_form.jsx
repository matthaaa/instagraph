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
        post_id: this.props.post.id,
        user_id: this.props.currentUser.id,
      }
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleUpdate(field) {
    return (event) => {
      this.setState({
        comment: Object.assign(this.state.comment, {
          [field]: event.target.value,
        })
      });
    }
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    console.log(this.state.comment);
    return (
      <form className="new-comment-form-content">
        <FormInput
          type="textarea"
          contentClassName="new-comment-form-input-container"
          placeholder={"Add a comment..."}
          value={this.state.comment.body}
          onChange={this.handleUpdate("body")}
        />
      </form>
    );
  }

};

export default AddCommentForm;
