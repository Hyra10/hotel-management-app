import { createUseStyles } from 'react-jss';
import { defaultColor } from '../../../utils/styles/colors';

export default createUseStyles({
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
  },
});


export const customAyncSelectStyles = {

  control: (provided: any) => ({
    ...provided,
    border: 'none'
  }),

  container: (provided: any) => ({
    ...provided,
    padding: 4,
    border: `1px solid ${defaultColor.lightGrey}`,
    color: defaultColor.grey,
    fontSize: 16,
  }),
}
