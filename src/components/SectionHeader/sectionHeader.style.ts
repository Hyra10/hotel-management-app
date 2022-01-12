import { createUseStyles } from 'react-jss';
import { defaultColor } from '../../utils/styles/colors';

export default createUseStyles({
  sectionHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px 0',
  },
  header: {
    // color: defaultColor.grey,
    color: ({ color }) => color,
  },
  line: {
    backgroundColor: defaultColor.lightGrey,
    height: 1,
    flex: 1,
    background: ({ color }) =>
      `-webkit-gradient(linear, 0 0, 100% 0, from(${defaultColor.white}), color-stop(50%, ${color}))`
    // background: `-webkit-gradient(linear, 0 0, 100% 0, from(${defaultColor.white}), to(${defaultColor.white}), color-stop(50%, ${defaultColor.grey}))`
  }
});
