import React, { FC } from 'react';
import { defaultColor } from '../../utils/styles/colors';
import useStyles from './sectionHeader.style';

type Props = {
  name: string,
  size?: number,
  color?: string,
}

const SectionHeaderComponent: FC<Props> = ({
  size = 26,
  name,
  color = defaultColor.grey,
}) => {
  const classes = useStyles({ color });

  return (
    <div className={classes.sectionHeader}>
      <span className={classes.header} style={{ fontSize: size }}>{ name }</span>
      <div className={classes.line}></div>
    </div>
  );
};

export default SectionHeaderComponent;
