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
  renderLogo() {
    return (
      <div className="header-logo-section">
        <MainLogo />
      </div>
    );
  }

  renderSearch() {
    return (
      <h1>We finna put a search bar here</h1>
    );
  }

  renderMenu() {
    return (
      <h1>And the menu go here tho</h1>
    );
  }

  render() {
    return (
      <header className="main-header-container">
        <div className="main-header-content">
          {this.renderLogo()}
          {this.renderSearch()}
          {this.renderMenu()}
        </div>
      </header>
    );
  }

};

export default MainHeader;
