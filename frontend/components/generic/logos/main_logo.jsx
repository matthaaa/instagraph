import React from 'react';
import {Component} from 'react';


class MainLogo extends Component {

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {type} = this.props;
    const className = type === "header" ? "header-logo-text"
                                        : "logo-text";

    return (
      <h1 className={className}>Instagraph</h1>
    );
  }

};

export default MainLogo;
