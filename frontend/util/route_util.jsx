// import React from 'react';
// import {connect} from 'react-redux';
// import {Route, Redirect, withRouter} from 'react-router-dom';
// import configureStore from '../store/store';
//
// const store = configureStore();
//
// const Auth = ({component: Component, path, loggedIn}) => (
//   <Route path={path} render={(props) => (
//     !loggedIn ? (<Component {...props}/>) : (<Redirect to="/" />)
//   )}/>
// );
//
// const Protected = ({component: Component, path, loggedIn}) => (
//   <Route path={path} render={(props) => (
//      loggedIn ? (<Component {...props}/>) : (<Redirect to="/login"/>)
//   )}/>
// );
//
// const mapStateToProps = state => {
//   return {loggedIn: Boolean(store.getState().session.currentUser)};
// }
//
// export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
// export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
