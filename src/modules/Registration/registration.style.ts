import { createUseStyles } from 'react-jss';
import { defaultColor, primaryColor } from '../../utils/styles/colors';

export default createUseStyles({
  LoginWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: primaryColor.p1,
  },
  loginComponent: {
    padding: 20,
    backgroundColor: defaultColor.lighterGrey,
    width: 400,
  },
  loginButton: {
    width: '100%',
  },
  loginInputs: {
    display: 'block',
    width: '100%',
  },
  loginLabels: {
    color: defaultColor.grey,
  },
  forgotPassword: {
    fontSize: 12,
    textAlign: 'center',
  },
  createAccount: {
    fontSize: 12

  }
});
