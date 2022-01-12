
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiBox, FiEye, FiInfo, FiShoppingBag, FiUser } from 'react-icons/fi';
import { RiHotelBedLine, RiHotelLine } from 'react-icons/ri';
import { path } from '../../Routes/enum.routes';
import useStyles from './sidebarSetting.style';
import { UseAuth } from '../../modules/Context/AuthContext/useAuthContext';
import { UserRolesEnum } from '../../modules/Context/AuthContext/authContext.type';

const settingIconSize = 20;

const SidebarSettingComponent = () => {
  const classes = useStyles();
  const { userData } = UseAuth();

  return (
    <div className={classes.navbar}>
      { (userData.userRoleId <= UserRolesEnum.PROFESOR) &&
        <>
          <span>Configuracion Global</span>
          <NavLink to={path.SETTINGS_ROOMTYPE}>
            <FiBox size={settingIconSize} /> <span>Tipos de Cuartos</span>
          </NavLink>
          <NavLink to={path.SETTINGS_ROOMBED}>
            <RiHotelBedLine size={settingIconSize} /> <span>Camas</span>
          </NavLink>
          <NavLink to={path.SETTINGS_ROOMVIEW}>
            <FiEye size={settingIconSize} /> <span>Vista de Cuartos</span>
          </NavLink>
          <NavLink to={path.SETTINGS_ROOMSTATUS}>
            <FiInfo size={settingIconSize} /> <span>Estado de Cuartos</span>
          </NavLink>
          <NavLink to={path.SETTINGS_SERVICESTATUS}>
            <FiInfo size={settingIconSize} /> <span>Estado de Servicios</span>
          </NavLink>
          <NavLink to={path.SETTINGS_RESERVATIONSTATUS}>
            <FiInfo size={settingIconSize} /> <span>Estado de Reservaciones</span>
          </NavLink>

          <span>Configuracion por Profesor</span>
          { (userData.userRoleId === UserRolesEnum.PROFESOR) &&
            <>
              <NavLink to={path.SETTINGS_ROOM}>
                <FiBox size={settingIconSize} /> <span>Cuartos</span>
              </NavLink>
              <NavLink to={path.SETTINGS_SERVICES}>
                <FiShoppingBag size={settingIconSize} /> <span>Servicios</span>
              </NavLink>

              <NavLink to={path.SETTINGS_HOTEL}>
                <RiHotelLine size={settingIconSize} /> <span>Hoteles</span>
              </NavLink>
            </>
          }
          <NavLink to={path.SETTINGS_USERS}>
            <FiUser size={settingIconSize} />
            <span>{userData.userRoleId === UserRolesEnum.PROFESOR ? 'Estudiantes' : 'Profesores'}</span>
          </NavLink>
        </>
      }
    </div>
  )
}

export default SidebarSettingComponent