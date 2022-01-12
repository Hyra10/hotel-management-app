import { defaultColor } from '../../utils/styles/colors';

export const defaultContainer = {
  padding: 20,
  backgroundColor: defaultColor.white,
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
}

export const defaultStyles = {
  padding: 20,
}

export const tableGlobalStyle = {
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%',
  display: 'table',

  '& td': {
    padding: '8px 8px',
    display: 'table-cell',
    textAlign: 'left',
    verticalAlign: 'top',

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
    borderBottom: '1px solid #ddd'
  },
}