import React, { FC, ChangeEvent, useEffect } from 'react';
import useStyles from './header.style';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { path } from '../../Routes/enum.routes';
import { UseAuth } from '../../modules/Context/AuthContext/useAuthContext';
import { Usegct } from '../../modules/Context/useGlobalContext';
import { RiHotelLine } from 'react-icons/ri';
import { UserRolesEnum } from '../../modules/Context/AuthContext/authContext.type';

const HeaderComponent: FC = () => {
  const classes = useStyles();
  const { userData } = UseAuth();
  const usegct = Usegct();

  useEffect(() => {
    if(usegct?.hotels?.length > 0) {
      const firstHotel = usegct.hotels[0];
      usegct.setHotelId(+firstHotel.value);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usegct.hotels])

  const onHotelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    usegct.setHotelId(+e.target.value);
  }

  return (
    <>
      <header className={classes.header}>
        <div />
        <div className={classes.rightSide}>
            { userData.userRoleId !== UserRolesEnum.ADMIN &&
              <div>
                <RiHotelLine size={25} />
                <select onChange={onHotelChange}>
                  {usegct.hotels?.map(x => 
                    <option key={x.value} value={x.value}>{x.name}</option>
                  )}
                </select>
              </div>
            }
            
            <Link className={classes.navItem} to={path.USER}>
              <FiUser size={25} />
              <span>{userData.userName}</span>
            </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
