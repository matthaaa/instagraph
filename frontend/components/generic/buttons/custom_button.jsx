import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class CustomButton extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderLink(onPress, text) {
    return (
      <Link
        className="button link"
        to={"/login"}
        onClick={onPress}>
        {text}
      </Link>
    );
  }

  renderButton(onPress, text) {
    return (
      <button className="button" onClick={onPress}>{text}</button>
    );
  }

  render() {
    const {isLink, onPress, text} = this.props;

    return isLink ? this.renderLink(onPress, text)
                  : this.renderButton(onPress, text);
  }

};


export default CustomButton;
