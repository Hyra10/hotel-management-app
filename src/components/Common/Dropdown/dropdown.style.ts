import { createUseStyles } from 'react-jss';
import { defaultColor } from '../../../utils/styles/colors'

export default createUseStyles({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  input: {
    padding: 10,
    border: `1px solid ${defaultColor.lightGrey}`,
    color: defaultColor.grey,
    fontSize: 16,
  },
});