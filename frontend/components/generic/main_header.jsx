import React from 'react';
import {Component} from 'react';

// Components
import CustomButton from './buttons/custom_button';
import MainLogo from './logos/main_logo';


class MainHeader extends Component {

  // ==================================================
  // Callbacks
  // ==================================================

  // TODO: Temporary Handler: remove after implementing menu bar.
  handleLogout() {

  }

  // ==================================================
  // Render
  // ==================================================
  renderLogo() {
    return (
      <div className="header-logo-section">
        <MainLogo type="header" />
      </div>
    );
  }

  renderSearch() {
    // TODO: Tnis is a placeholder; add input here when
    //       implementing search.
    return (
      <div className="header-search-bar">
        <h2 className="search-placeholder">Search</h2>
      </div>
    );
  }

  renderMenu() {
    // TODO: Tnis is a temporary logout button; add menu buttons here.
    return (
      <CustomButton />
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
