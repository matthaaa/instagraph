import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
import CustomButton from './buttons/custom_button';
import MainLogo from './logos/main_logo';


class MainHeader extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // ==================================================
  // Callbacks
  // ==================================================

  // TODO: Temporary Handler: remove after implementing menu bar
  // and add to a dropdown menu.
  handleLogout() {
    this.props.logout();
  }

  // ==================================================
  // Render
  // ==================================================
  renderLogo() {
    return (
      <Link className="header-logo-section" to={"/"}>
        <MainLogo type="header" />
      </Link>
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

  renderMenu(onToggleUploadView) {
    // TODO: Tnis is a temporary logout button; add menu buttons here.
    return (
      <div>
        <CustomButton
          className={"upload-photo-button header-menu-button"}
          text={"Upload"}
          onPress={onToggleUploadView}
        />
        <CustomButton
          className={"temporary-logout-button header-menu-button"}
          text={"Log out"}
          onPress={this.handleLogout}
          />
        <CustomButton
          isLink
          path={`/profiles/${this.props.currentUser.id}`}
          className={"user-profile-button header-menu-button"}
          text={"My Profile"}
        />
      </div>
    );
  }

  render() {
    const {onToggleUploadView} = this.props;

    return (
      <header className="main-header-container">
        <div className="main-header-content">
          {this.renderLogo()}
          {this.renderSearch()}
          {this.renderMenu(onToggleUploadView)}
        </div>
      </header>
    );
  }

};

export default MainHeader;
