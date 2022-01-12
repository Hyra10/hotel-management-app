import { createUseStyles } from 'react-jss';
import { defaultColor } from '../../../utils/styles/colors';
import { defaultStyles } from '../../../utils/styles/styleUtils';

export default createUseStyles({
  overlayModal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: defaultColor.black,
    opacity: 0.6,
    zIndex: ({ OverlayZIndex }) => OverlayZIndex,
  },
  mainModal: {
    position: 'absolute',
    background: defaultColor.white,
    padding: defaultStyles.padding,
    marginBottom: 50,
    overflowY: 'auto',
    zIndex: ({ ModalZIndex }) => ModalZIndex,
    width: ({modalWidth}) => {
      return modalWidth === 0 ? 'auto' : modalWidth
    }
  },
  wrapperModal: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  }
});
