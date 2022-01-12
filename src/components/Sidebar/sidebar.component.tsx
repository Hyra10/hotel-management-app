import React, { FC } from 'react';
import useStyles from './sidebar.style';
import { 
  FiUsers, FiMenu, FiX, FiLogOut,
  FiSettings, FiGrid, FiCalendar, FiAlignLeft
} from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { sidebar } from '../../app.style';
import { path } from '../../Routes/enum.routes';
import { useHistory } from 'react-router-dom'
import { UseAuth } from '../../modules/Context/AuthContext/useAuthContext';
import { UserRolesEnum } from '../../modules/Context/AuthContext/authContext.type';

const Sidebar: FC = () => {
  const [position, setPosition] = React.useState(sidebar.widthClosed);
  const history = useHistory();
  const useAuth = UseAuth();

  const toggleMenu = () => {
    setPosition(
      position === sidebar.widthClosed
        ? sidebar.widthOpened
        : sidebar.widthClosed,
    );
  };

  const logOut = async () => {
    await useAuth.logOut();
    history.replace(path.LOGIN);
  }

  const classes = useStyles({ position });

  return (
    <div className={classes.sideBar}>
      <div className={classes.sidebarContent}>
        <div>
          <div className={classes.hamburguerMenu} onClick={() => toggleMenu()}>
            {position === sidebar.widthClosed ? (
              <FiMenu size={sidebar.iconSize} />
            ) : (
              <FiX size={sidebar.iconSize} />
            )}
          </div>
          { (useAuth.userData.userRoleId >= UserRolesEnum.PROFESOR) &&
          <>
            <NavLink to={path.HOME}>
              <FiGrid size={sidebar.iconSize} /> <span>Reservas</span>
            </NavLink>
            <NavLink to={path.RESERVATION}>
              <FiCalendar size={sidebar.iconSize} /> <span>Servicios</span>
            </NavLink>
            <NavLink to={path.CLIENT}>
              <FiUsers size={sidebar.iconSize} /> <span>Clientes</span>
            </NavLink>
            { useAuth.userData.userRoleId === UserRolesEnum.PROFESOR &&
              <NavLink to={path.LOG}>
              <FiAlignLeft size={sidebar.iconSize} /> <span>Reportes</span>
              </NavLink>
            }
            </>
          }
          { (useAuth.userData.userRoleId <= UserRolesEnum.PROFESOR) &&
            <NavLink to={path.SETTINGS_ROOMTYPE}>
              <FiSettings size={sidebar.iconSize} /> <span>Configuracion</span>
            </NavLink>
          }
          
        </div>
        <div>
          <div className='logout' onClick={logOut} >
            <FiLogOut size={sidebar.iconSize} /> <span>Salirse</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
