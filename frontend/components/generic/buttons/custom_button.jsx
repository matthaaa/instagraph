import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class CustomButton extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderLink(onPress, className, path, text, disabled) {
    const disabledStyle = disabled ? " disabled-button" : null;

    return (
      <Link
        disabled={disabled}
        className={"button link" + `${disabledStyle}` + ` ${className}`}
        to={path}
        onClick={onPress ? onPress : null}>
        {text}
      </Link>
    );
  }

  renderButton(onPress, className, text, disabled) {
    const disabledStyle = disabled ? " disabled-button" : null;

    return (
      <button
        disabled={disabled}
        className={"button" + `${disabledStyle}` + ` ${className}`}
        onClick={onPress}>
        {text}
      </button>
    );
  }

  render() {
    const {isLink, disabled, className, onPress, path, text} = this.props;

    return isLink ? this.renderLink(onPress, className, path, text, disabled)
                  : this.renderButton(onPress, className, text, disabled);
  }

};

CustomButton.defaultProps = {
  disabled: false,
}


export default CustomButton;
