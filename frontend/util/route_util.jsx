import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';
import configureStore from '../store/store';


const Auth = ({component: Component, exact, path, loggedIn}) => (
  <Route exact={exact} path={path} render={(props) => (
    !loggedIn ? <Component {...props}/> : <Redirect to="/" />
  )}/>
);

const Protected = ({component: Component, exact, path, loggedIn}) => (
  <Route exact={exact} path={path} render={(props) => (
    loggedIn ? <Component {...props}/> : <Redirect to="/signup"/>
  )}/>
);

const mapStateToProps = ({session})=> {
  return {loggedIn: !!session.currentUser};
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
