import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Components
import LoginView from './session_views/login_view';


const App = ({children}) => (
  <div>
    <h1>REACT</h1>
    <Switch>
      <Route path="/login" component={LoginView} />
    </Switch>
  </div>
);

export default App;
