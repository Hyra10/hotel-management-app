import { createUseStyles } from 'react-jss';

export default createUseStyles({
  inlineInputs: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  plusIcon: {
    border: 'none',
    backgroundColor: 'transparent',
  },
  beds: {
    display: 'flex',
    flexWrap: 'wrap',

    '& div': {
      flex: '1 0 33%'
    }
  },
  inputGetAllSpace: {
    flex: 1,
  },
  checkbox: {
    flexDirection: 'row !important',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginBottom: 0,
    marginRight: 10
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
  textAreaInput: {
    resize: 'none',
  },
});
