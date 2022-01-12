import { createUseStyles } from 'react-jss';
import { defaultColor, primaryColor } from '../../utils/styles/colors';
import { defaultContainer } from '../../utils/styles/styleUtils';

export default createUseStyles({
  container: {
    ...defaultContainer
  },
  // editButton: {
  //   marginRight: 10,
  //   width: 70,
  // },
  // deleteButton: {
  //   width: 70,
  // },
  table: {
    borderCollapse: 'collapse',
    borderSpacing: 0,
    width: '100%',
    display: 'table',
  
    '& td': {
      padding: '8px 8px',
      display: 'table-cell',
      textAlign: 'left',
      verticalAlign: 'top',
      // width: '95px',
      borderLeft: `1px solid ${defaultColor.lightGrey}`,
      borderRight: `1px solid ${defaultColor.lightGrey}`,
  
      '&:last-child': {
        textAlign: 'right',
      }
    },
  
    '& th': {
      padding: '8px 8px',
      display: 'table-cell',
      textAlign: 'left',
      verticalAlign: 'top',
  
      '&:last-child': {
        textAlign: 'center',
      }
    },
  
    '& tr': {
      borderBottom: `1px solid ${defaultColor.lightGrey}`
    },
  },
  booked: {
    backgroundColor: primaryColor.p2,
    border: `1px solid ${primaryColor.p1}`,
    cursor: 'pointer',
    color: defaultColor.white,
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: primaryColor.p3,
    }
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 0'
  },
  rooms: {
    backgroundColor: defaultColor.lightGrey,
    cursor: 'pointer',
    border: `1px solid ${defaultColor.grey}`,

    '&:hover': {
      backgroundColor: defaultColor.grey,
      color: 'white'
    }
  }
});
