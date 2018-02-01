import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import {AuthRoute} from '../util/route_util';

// Components
import LoginViewContainer from './session_views/login_view_container';
import SignupViewContainer from './user_views/signup_view_container';


const App = ({children}) => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Indie+Flower|Pacifico|Quicksand:300,400,500,700" rel="stylesheet"/>
    <section className="main-view">
      <Switch>
        <Route path="/signup" component={SignupViewContainer} />
        <Route path="/login" component={LoginViewContainer} />
      </Switch>
    </section>
  </div>
);


export default App;
