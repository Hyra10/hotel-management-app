import React from 'react';
import { Redirect, Route, RouteProps,  } from 'react-router-dom';
import { path as routePaths } from './enum.routes'
import { UseAuth } from '../modules/Context/AuthContext/useAuthContext';

const UnprotectedRoute =(
  { 
    component, path, exact,
  }: RouteProps) => {
  const { userData } = UseAuth();

  if (typeof userData.userId !== 'undefined') {
    return <Redirect to={routePaths.HOME} />
  }

  return <Route exact={exact} component={component} path={path} />
};

export default UnprotectedRoute;