import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {AuthRoute} from '../util/route_util';

// Components
import MainHeader from './generic/main_header';
import HomeFeedContainer from './logged_in_views/post_views/home_feed_container';
import LoginViewContainer from './session_views/login_view_container';
import SignupViewContainer from './user_views/signup_view_container';


const App = ({children}) => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Indie+Flower|Pacifico|Quicksand:300,400,500,700" rel="stylesheet"/>
    <MainHeader/>
    <section className="main-view">
      <Switch>
        <Route path="/signup" component={SignupViewContainer} />
        <Route path="/login" component={LoginViewContainer} />
        <Route path="/" component={HomeFeedContainer} />
      </Switch>
    </section>
  </div>
);


export default App;
