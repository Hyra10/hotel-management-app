import { createUseStyles } from 'react-jss';
import { defaultColor } from '../../../../utils/styles/colors';
import { defaultContainer, tableGlobalStyle } from '../../../../utils/styles/styleUtils';

export default createUseStyles({
  inlineInputs: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputGetAllSpace: {
    flex: 1,
  },
  divSeparator: {
    borderRight: `1px solid ${defaultColor.lightGrey}`,
    marginRight: 15,
    marginLeft: 15,
  },
  textAreaInput: {
    resize: 'none',
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  saveButton: {
    marginRight: 10,
  },
  cancelButton: {
    marginRight: 10
  },

  plusIcon: {
    border: 'none',
    backgroundColor: 'transparent',
  },

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
  totals: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  }
});
