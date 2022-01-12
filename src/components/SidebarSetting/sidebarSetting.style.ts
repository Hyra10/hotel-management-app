import { createUseStyles } from 'react-jss';
import { defaultColor, primaryColor } from '../../utils/styles/colors';
import { headerNavBar, settingNavbar, sidebar } from '../../app.style';
import { defaultContainer } from '../../utils/styles/styleUtils';

const activeLink = {
  backgroundColor: primaryColor.p1,
  color: defaultColor.white,
  textDecoration: 'none'
}

export default createUseStyles({
  navbar: {
    backgroundColor: defaultColor.white,
    position: 'fixed',
    left: sidebar.widthClosed,
    top: headerNavBar.height,
    height: '100%',
    width: settingNavbar.width,
    boxShadow: defaultContainer.boxShadow,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,

    '& >span': {
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
      borderTop: `1px solid ${defaultColor.lightGrey}`,
      borderBottom: `1px solid ${defaultColor.lightGrey}`,
    },

    '& a': {
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      color: primaryColor.p1,
      fontWeight: 'bold',

      '&:hover': activeLink,
      '&.active': activeLink,

      '& span': {
        marginLeft: 5,
      },
    },
  },
});
