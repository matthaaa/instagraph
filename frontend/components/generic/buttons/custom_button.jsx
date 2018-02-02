import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class CustomButton extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderLink(onPress, path, text) {
    return (
      <Link
        className="button link"
        to={path}
        onClick={onPress}>
        {text}
      </Link>
    );
  }

  renderButton(onPress, path, text) {
    return (
      <button className="button" onClick={onPress}>{text}</button>
    );
  }

  render() {
    const {isLink, onPress, path, text} = this.props;

    return isLink ? this.renderLink(onPress, path, text)
                  : this.renderButton(onPress, text);
  }

};


export default CustomButton;
