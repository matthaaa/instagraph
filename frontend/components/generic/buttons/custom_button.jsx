import React from 'react';
import {Component} from 'react';


class CustomButton extends Component {

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
