import React from 'react';
import {Button, Component} from 'react';

class CustomButton extends Component {

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================

  render() {
    const {onPress, text} = this.props;

    return (
      <button className="button" onClick={onPress}>{text}</button>
    );
  }

};

export default CustomButton;
