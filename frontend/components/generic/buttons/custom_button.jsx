import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class CustomButton extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderLink(onPress, className, path, text) {
    const {disabled, disabledStyle} = this.props;
    const customStyle = disabled ? `${disabledStyle}` + ` ${className}` :
                                   ` ${className}`

    return (
      <Link
        className={`button link ${disabledStyle} ${className}`}
        to={path}
        onClick={onPress ? onPress : null}>
        {text}
      </Link>
    );
  }

  renderButton(onPress, className, text) {
    const {disabled, disabledStyle} = this.props;
    const customStyle = disabled ? `${disabledStyle}` + ` ${className}` :
                                   ` ${className}`

    return (
      <button
        disabled={disabled}
        className={`button ${disabledStyle} ${className}`}
        onClick={onPress}>
        {text}
      </button>
    );
  }

  render() {
    const {isLink, className, onPress, path, text} = this.props;

    return isLink ? this.renderLink(onPress, className, path, text)
                  : this.renderButton(onPress, className, text);
  }

};

CustomButton.defaultProps = {
  className: "",
  disabled: false,
  disabledStyle: null,
}


export default CustomButton;
