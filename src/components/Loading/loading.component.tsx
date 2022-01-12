import React, { FC } from 'react';
import useStyles from './loading.style';
import { ReactComponent as LoadingSvg } from '../../assets/svg/loading.svg';

const LoadingComponent: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingContainer}>
      <LoadingSvg />
    </div>
  );
};

export default LoadingComponent;
