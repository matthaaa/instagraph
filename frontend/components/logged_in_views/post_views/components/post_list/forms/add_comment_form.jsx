import React from 'react';
import {Component} from 'react';

// Components
import FormInput from '../../../../../generic/forms/form_input';


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
    this.handlePressEnter = this.handlePressEnter.bind(this);
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

  handleSubmit(event) {
    this.props.addComment(this.state.comment);
    this.setState({
      comment: Object.assign(this.state.comment, {
        body: "",
      })
    })
  }

  handlePressEnter(event) {
    if ((event.which == 13 || event.keyCode == 13) && event.shiftKey == false) {
      event.preventDefault();
      this.handleSubmit();
    }
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {className, formId} = this.props;
    console.log(formId);

    return (
      <form
        ref={el => this.commentForm = el}
        className={`new-comment-form-content ${className}`}>
        <FormInput
          id={formId}
          autoFocus
          type="textarea"
          contentClassName="new-comment-form-input-container"
          className="new-comment-form-input"
          placeholder={"Add a comment..."}
          value={this.state.comment.body}
          onChange={this.handleUpdate("body")}
          onKeyDown={this.handlePressEnter}
        />
      </form>
    );
  }

};

export default AddCommentForm;
