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
  handleStopBubble(e) {
    if (!e) {
      const e = window.event;
    }

    e.cancelBubble = true;

    if (e.stopPropagation) {
      e.stopPropagation();
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
