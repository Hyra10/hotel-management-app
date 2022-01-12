import React, { FC } from 'react';
import Header from '../../components/Header/header.component';
import Sidebar from '../../components/Sidebar/sidebar.component';
import { appStyles } from '../../app.style'
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../protected.route';
import { path } from '../enum.routes';
import ReservationComponent from '../../modules/Reservation/reservation.component';
import ClientComponent from '../../modules/Client/client.component';
import ProfesorLogComponent from '../../modules/Report/report.component';
import ServiceReservationComponent from '../../modules/ServiceReservation/ServiceReservation.component';
import AdminComponent from '../../modules/Admin/admin.component';
import UserComponent from '../../modules/User/user.component';
import SettingRoutes from '../../Routes/Settings/setting.routes';
import { UserRolesEnum } from '../../modules/Context/AuthContext/authContext.type';


const MainLayoutRoutes: FC = ({ children }) => {
  const classes = appStyles();

  return (
    <>
      <Sidebar/>
      <Header/>
      <div className={classes.content}>
        <Route path={[ '/', path.HOME, path.CLIENT,
          path.RESERVATION, path.ADMIN, path.USER, path.CHECKOUT, path.LOG ]}
        >
          <Switch>
            <ProtectedRoute exact path={path.HOME} component={ReservationComponent} />
            <ProtectedRoute exact path={path.CLIENT} component={ClientComponent} />
            <ProtectedRoute exact path={path.RESERVATION} component={ServiceReservationComponent} />
            <ProtectedRoute exact path={path.ADMIN} component={AdminComponent} />
            <ProtectedRoute exact path={path.USER} component={UserComponent} />
            <ProtectedRoute exact path={path.LOG} component={ProfesorLogComponent} />
            <SettingRoutes />
          </Switch>
        </Route>
      </div>
    </>
  )
}

export default MainLayoutRoutes