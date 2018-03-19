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
      <div className="main-header-section">
        <Link className="header-logo-section" to={"/"}>
          <img
            className="home-icon"
            src="http://res.cloudinary.com/instagraph/image/upload/v1518200298/home-icon.png"
            height={40}
            />
          <MainLogo type="header" />
        </Link>
      </div>
    );
  }

  renderSearch() {
    // TODO: Tnis is a placeholder; add input here when
    //       implementing search.
    return (
      <div className="main-header-section header-search-bar">
        <h2 className="search-placeholder">Search</h2>
      </div>
    );
  }

  renderMenu(onToggleUploadView) {
    const {uploadViewIsVisible, currentUser} = this.props;
    const uploadText = uploadViewIsVisible ? "Cancel Upload" : "Upload";
    const currentUserIsLoaded = this.props.currentUser.id === undefined ? false : true;

    // TODO: Tnis is a temporary logout button; add menu buttons here.
    return (
      <div className="main-header-section main-header-right">
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
          disabled={currentUserIsLoaded}
          path={currentUser.id ? `/profiles/${currentUser.id}` : "/"}
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
