import React from 'react';
import {Component} from 'react';

// Components
import MainHeader from '../../generic/main_header';


class HomeFeedView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestUsers();
  }

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {currentUser} = this.props;
    console.log(currentUser);

    return (
      <div>
        <MainHeader user={currentUser} />
        <h1>{currentUser.full_name}</h1>
        <h1>Main Feed Goes Here!</h1>
        <br/>
        <h1>Pretend a picture is here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <img className="post-photo-grid-item" src="https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg"/>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
        <h1>And here.</h1>
        <br/>
      </div>
    );
  }

};

export default HomeFeedView;
