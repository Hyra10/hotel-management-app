import { createUseStyles } from 'react-jss';

export default createUseStyles({
  inlineInputs: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputGetAllSpace: {
    flex: 1,
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
  checkbox: {
    flexDirection: 'row !important',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginBottom: 0,
    marginRight: 10
  },
});
