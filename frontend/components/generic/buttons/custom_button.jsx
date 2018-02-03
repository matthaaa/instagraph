import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class CustomButton extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderLink(onPress, className, path, text) {
    return (
      <Link
        className={"button link" + ` ${className}`}
        to={path}
        onClick={onPress ? onPress : null}>
        {text}
      </Link>
    );
  }

  renderButton(onPress, className, text) {
    return (
      <button className={"button" + ` ${className}`} onClick={onPress}>{text}</button>
    );
  }

  render() {
    const {isLink, className, onPress, path, text} = this.props;

    return isLink ? this.renderLink(onPress, className, path, text)
                  : this.renderButton(onPress, className, text);
  }

};


export default CustomButton;
