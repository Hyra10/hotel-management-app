import React, { ReactElement } from 'react';
import classnames from 'classnames';
import useStyles from './button.style';
import { buttonTypes } from './button.types';

interface OtherProps {
  type?: 'button' | 'submit' | 'reset';
  buttonType:  buttonTypes; 
  text?: string;
  isDisabled?: boolean;
  className?: string;
  onClick?: Function
}

const Button = ({
  type = 'button',
  text,
  isDisabled = false,
  className,
  buttonType,
  onClick,
  ...props
}: OtherProps & React.HTMLProps<HTMLButtonElement>): ReactElement => {
  const classes = useStyles({ buttonType });

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classnames(classes.button, className)}
      onClick={(e) => onClick?.(e)}
      {...props}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
