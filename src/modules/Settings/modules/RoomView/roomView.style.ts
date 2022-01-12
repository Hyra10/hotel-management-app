import { createUseStyles } from 'react-jss';
import { defaultContainer, tableGlobalStyle } from '../../../../utils/styles/styleUtils';

export default createUseStyles({
  container: {
    ...defaultContainer
  },
  editButton: {
    marginRight: 10,
    width: 70,
  },
  deleteButton: {
    width: 70,
  },
  table: { ...tableGlobalStyle },
  buttonContainer: {
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
