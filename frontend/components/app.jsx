import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

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
        <ProtectedRoute exact path="/" component={HomeFeedContainer} />
        <AuthRoute exact path="/signup" component={SignupViewContainer} />
        <AuthRoute exact path="/login" component={LoginViewContainer} />
      </Switch>
    </section>
  </div>
);


export default App;
