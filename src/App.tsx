import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { setAccessToken } from './utils/accessToken';
import injectSheet from 'react-jss';
import globalStyles from './app.style';
import { path } from './Routes/enum.routes'
import LoginComponent from './modules/Login/login.component';
import LoadingComponent from './components/Loading/loading.component';
import MainLayoutRoutes from './Routes/MainLayout/mainLayout.routes';
import UnprotectedRoute from './Routes/unprotected.route';
import RegistrationComponent from './modules/Registration/registration.component';
import ForgotComponent from './modules/Forgot/forgot.component';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    }).then(async res => {
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingComponent />
  }

  return (
    <Router>
      <Switch>
        <UnprotectedRoute exact path={path.LOGIN} component={LoginComponent} />
        <UnprotectedRoute exact path={path.REGISTRATION} component={RegistrationComponent} />
        <UnprotectedRoute exact path={path.FORGOT} component={ForgotComponent} />
        <UnprotectedRoute exact path={path.FORGOT} component={LoginComponent} />
        <MainLayoutRoutes />
        <Redirect to={path.HOME} />
      </Switch>
    </Router>
  );
};

export default injectSheet(globalStyles)(App);
