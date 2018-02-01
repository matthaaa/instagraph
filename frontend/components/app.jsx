import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {AuthRoute} from '../util/route_util';

// Components
import LoginViewContainer from './session_views/login_view_container';
import SignupViewContainer from './user_views/signup_view_container';


const App = ({children}) => (
  <div>
    <h1>REACT</h1>
    <Switch>
      <Route path="/login" component={LoginViewContainer} />
      <Route path="/signup" component={SignupViewContainer} />
    </Switch>
  </div>
);


export default App;
