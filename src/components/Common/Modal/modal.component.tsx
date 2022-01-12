import React, { ReactElement, FC, ReactNode } from 'react';
import useStyles from './modal.styles';
// import Button from '../Button/button.component';
// import { buttonTypes } from '../Button/button.types';

interface Props {
  children: ReactNode;
  show: boolean
  successText?: string;
  successCallback?: Function;
  cancelText?: string;
  cancelCallback?: Function;
  modalWidth?: number;
  OverlayZIndex?: number;
  ModalZIndex?: number;
}

const ModalComponent: FC<Props> = ({
  children,
  show,
  cancelCallback,
  modalWidth = 0,
  OverlayZIndex = 9,
  ModalZIndex = 10,
}) : ReactElement => {
  const classes = useStyles({modalWidth, OverlayZIndex, ModalZIndex});

  if(!show) {
    return <></>;
  }

  return (
    <>
      <div
        className={classes.overlayModal}
        onClick={() => { cancelCallback?.() }}
      ></div>
      <div className={classes.wrapperModal}>
        <div className={classes.mainModal}>
          { children }
        </div>
      </div>
      
      </>
  );
};


export default ModalComponent;
