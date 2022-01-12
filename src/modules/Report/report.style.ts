import { createUseStyles } from 'react-jss';
import { defaultColor } from '../../utils/styles/colors';
import { defaultContainer, tableGlobalStyle } from '../../utils/styles/styleUtils';

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
  input: {
    padding: 10,
    border: `1px solid ${defaultColor.lightGrey}`,
    color: defaultColor.grey,
    fontSize: 16,
  },
  inlineInputs: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,

    '& label': {
      marginRight: 10,
    }
  },
});
