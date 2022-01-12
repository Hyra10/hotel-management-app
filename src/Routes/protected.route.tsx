import React from 'react';
import { Redirect, Route, RouteProps,  } from 'react-router-dom';
import { path as routePaths } from './enum.routes'
import { UseAuth } from '../modules/Context/AuthContext/useAuthContext';
import { UserRolesEnum } from '../modules/Context/AuthContext/authContext.type';

const ProtectedRoute =(
  { 
    component, path, exact,
    level = UserRolesEnum.STUDENT
  }: RouteProps & { level?: UserRolesEnum }) => {
  const { userData } = UseAuth();

  if (typeof userData.userId === 'undefined') {
    return <Redirect to={routePaths.LOGIN} />
  }

  if(level < userData.userRoleId) {
    return <Redirect to={routePaths.HOME} />
  }

  return <Route exact={exact} component={component} path={path} />
};

export default ProtectedRoute;