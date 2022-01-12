import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BedComponent from '../../modules/Settings/modules/Bed/bed.component';
import HotelComponent from '../../modules/Settings/modules/Hotel/hotel.component';
import UsersComponent from '../../modules/Settings/modules/User/user.component';
import ReservationStatusComponent from '../../modules/Settings/modules/ReservationStatus/reservationStatus.component';
import RoomStatusComponent from '../../modules/Settings/modules/RoomStatus/roomstatus.component';
import RoomTypeComponent from '../../modules/Settings/modules/RoomType/roomtype.component';
import RoomViewComponent from '../../modules/Settings/modules/RoomView/roomView.component';
import ServiceStatusComponent from '../../modules/Settings/modules/ServiceStatus/serviceStatus.component';
import { path } from '../enum.routes';
import ProtectedRoute from '../protected.route'
import useStyles from './setting.routes.style';
import SidebarSettingComponent from '../../components/SidebarSetting/sidebarSetting.component';
import { UserRolesEnum } from '../../modules/Context/AuthContext/authContext.type';
import RoomComponent from '../../modules/Room/room.component';
import ServiceComponent from '../../modules/Service/service.component';

const SettingRoutes = () => {
  const classes = useStyles();

  return (
    <div className={classes.settingWrapper}>
      <SidebarSettingComponent />

      <Route path={[path.SETTINGS_ROOMVIEW, path.SETTINGS_ROOMTYPE, path.SETTINGS_ROOMSTATUS,
      path.SETTINGS_ROOMBED, path.SETTINGS_RESERVATIONSTATUS, path.SETTINGS_SERVICESTATUS,
      path.SETTINGS_HOTEL, path.SETTINGS_USERS, path.SETTINGS_ROOM, path.SETTINGS_SERVICES]}>
        <Switch>
          <ProtectedRoute
            exact
            path={path.SETTINGS_SERVICES}
            component={ServiceComponent}
            level={UserRolesEnum.PROFESOR}/>
          <ProtectedRoute
            exact
            path={path.SETTINGS_ROOM}
            component={RoomComponent}
            level={UserRolesEnum.PROFESOR}/>
          <ProtectedRoute
            exact
            path={path.SETTINGS_ROOMVIEW}
            component={RoomViewComponent}
            level={UserRolesEnum.PROFESOR}/>
          <ProtectedRoute
            exact
            path={path.SETTINGS_ROOMTYPE}
            component={RoomTypeComponent}
            level={UserRolesEnum.PROFESOR}/>
          <ProtectedRoute
            exact
            path={path.SETTINGS_ROOMSTATUS}
            component={RoomStatusComponent}
            level={UserRolesEnum.PROFESOR}/>
          <ProtectedRoute
            exact
            path={path.SETTINGS_ROOMBED}
            component={BedComponent}
            level={UserRolesEnum.PROFESOR}/>
          <ProtectedRoute
            exact
            path={path.SETTINGS_RESERVATIONSTATUS}
            component={ReservationStatusComponent}
            level={UserRolesEnum.PROFESOR}/>
          <ProtectedRoute
            exact
            path={path.SETTINGS_SERVICESTATUS}
            component={ServiceStatusComponent}
            level={UserRolesEnum.PROFESOR}/>
          <ProtectedRoute
            exact
            path={path.SETTINGS_HOTEL}
            component={HotelComponent}
            level={UserRolesEnum.PROFESOR} />
          <ProtectedRoute
            exact
            path={path.SETTINGS_USERS}
            component={UsersComponent}
            level={UserRolesEnum.PROFESOR} />
        </Switch>
      </Route>
    </div>
  )
}

export default SettingRoutes