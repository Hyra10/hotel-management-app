import { createUseStyles } from 'react-jss';
import { headerNavBar } from '../../app.style';
import { defaultColor, primaryColor } from '../../utils/styles/colors';

export default createUseStyles({
  header: {
    width: '100%',
    height: headerNavBar.height,
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${defaultColor.lightGrey}`,

    position:  'absolute',
    backgroundColor: defaultColor.white
  },

  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',

    '& div': {
      '& select': {
        border: 'none',
        height: '100%',
        width: 100,

        '&:focus': {
          outline: 'none',
        }
      },
    },

    '& a': {
      marginLeft: 15,
      marginBottom: 3,

      '&:hover': {
        borderBottom: `3px solid ${primaryColor.p1}`,
        marginBottom: 0
      }

    },
  },

  navItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    color: defaultColor.black,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'none'
    },

    '& svg': {
      marginRight: 5,
    },
  },
});
