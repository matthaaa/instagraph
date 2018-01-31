import React from 'react';
import {Component} from 'react';

// Components
import Button from '../../generic/buttons/Button'

class NewUserForm extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // ==================================================
  // Lifecycle Methods
  // ==================================================

  componentWillMount() {
    // this.props.requestUser(this.props);
    // console.log(this.props);
  }

  // ==================================================
  // Callbacks
  // ==================================================

  handleUpdate(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    }
  }

  // ==================================================
  // Render
  // ==================================================

  renderUsernameInput() {
    return (
      <label>Username
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUpdate('username')}
        />
      </label>
    );
  }

  renderPasswordInput() {
    return (
      <label>Password
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleUpdate('password')}
        />
      </label>
    );
  }

  render() {
    const {onSubmit} = this.props;

    console.log(this.props);

    return (
      <div>
        <h1>This is the Session Form Component.</h1>
        <form>
          {this.renderUsernameInput()}
          <br/>
          {this.renderPasswordInput()}
          <br/>
          <Button text={"Sign Up"} onPress={onSubmit} />
        </form>
      </div>
    );
  }

};

export default NewUserForm;
