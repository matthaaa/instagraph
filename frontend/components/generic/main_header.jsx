import React from 'react';
import {Component} from 'react';

// Components
import MainLogo from './logos/main_logo';


class MainHeader extends Component {

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
      <header>
        <MainLogo />
      </header>
    );
  }

};

export default MainHeader;
