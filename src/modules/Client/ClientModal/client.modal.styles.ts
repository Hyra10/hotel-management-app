import { createUseStyles } from 'react-jss';

export default createUseStyles({
  inlineInputs: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  ccDateInput: {
    width: 170,
  },
  ccCvcInput: {
    width: 100,
  },
  ccNumberInput: {
    flex: 1,
  },
  clientAgeInput: {
    width: 100,
  },
  clientPhoneInput: {
    width: 170,
  },
  checkbox: {
    flexDirection: 'row !important',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginBottom: 0,
    marginRight: 10
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
});
