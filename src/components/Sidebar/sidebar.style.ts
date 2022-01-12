import { createUseStyles } from 'react-jss';
import { defaultColor, primaryColor } from '../../utils/styles/colors';

const sideBarIcons = {
  padding: '20px 20px 20px 15px',
  color: defaultColor.white,
  display: 'flex',
  alignItems: 'center',

  '&:hover': {
    backgroundColor: primaryColor.p5,
    color: primaryColor.p1,
    textDecoration: 'none'
  },

  '&.active': {
    backgroundColor: primaryColor.p5,
    color: primaryColor.p1,
    textDecoration: 'none'
  },

  '& span': {
    marginLeft: 20,
  },

  '& svg': {
    flexShrink: 0,
  },
};

export default createUseStyles({
  sideBar: {
    height: '100%',
    width: ({ position }) => position,
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    backgroundColor: primaryColor.p1,
    transition: '0.5s',
    'overflow-x': 'hidden',
    whiteSpace: 'nowrap',
    // borderRight: `1px solid ${defaultColor.lightGrey}`,
  },

  sidebarContent: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    '& .logout': sideBarIcons,
    '& a': sideBarIcons,
  },

  hamburguerMenu: {
    display: 'flex',
    justifyContent: 'center',
    padding: 15,
    color: defaultColor.white
  },
});

