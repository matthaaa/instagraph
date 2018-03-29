import React from 'react';
import {Component} from 'react';


class AppPreview extends Component {

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
    return (
      <div className="app-preview-container">
        <div className="app-preview-image">
          <img
            className="app-preview-monitor"
            src="https://s3-us-west-2.amazonaws.com/instagraph-aa/blank+monitor.png"
          />
          <img
            className="app-preview-screenshot"
            src="https://s3-us-west-2.amazonaws.com/instagraph-aa/preview.gif"
          />
        </div>
      </div>
    );
  }

};

export default AppPreview;
