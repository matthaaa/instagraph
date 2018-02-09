import React from 'react';
import {Component} from 'react';


class PostShowView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.handleStopBubble = this.handleStopBubble.bind(this);
  }

  // ==================================================
  // Callbacks
  // ==================================================
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
  render() {
    const {post, onExit} = this.props;

    if (post === undefined) return null;

    return (
      <div
        onClick={onExit}
        className="post-show-container">
        <div className="post-show-content" onClick={this.handleStopBubble}>
          {post.description}
        </div>
      </div>
    );
  }

};

export default PostShowView;
