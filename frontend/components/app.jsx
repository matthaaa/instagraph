import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {AuthRoute} from '../util/route_util';

// Components
import LoginViewContainer from './session_views/login_view_container';
import SignupViewContainer from './user_views/signup_view_container';


const App = ({children}) => (
  <div>
    <section className="main-view">
      <Switch>
        <Route path="/login" component={LoginViewContainer} />
        <Route path="/signup" component={SignupViewContainer} />
      </Switch>
    </section>
  </div>
);


export default App;
