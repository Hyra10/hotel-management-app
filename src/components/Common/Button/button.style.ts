import { createUseStyles } from 'react-jss';
import { defaultColor, primaryColor } from '../../../utils/styles/colors';
import { buttonTypes } from './button.types';

export default createUseStyles({
  button: {
    padding: 10,
    border: 0,
    color: ({ buttonType }) => {
      switch(buttonType) {
        case buttonTypes.BT3:
            return defaultColor.black;
        default:
            return defaultColor.white
      }
    },
    fontSize: 16,
    backgroundColor: ({ buttonType }) => {
      switch(buttonType) {
        case buttonTypes.BT1:
            return primaryColor.p1
        case buttonTypes.BT3:
            return defaultColor.lightGrey;
        case buttonTypes.BT2:
            return primaryColor.p3
        default:
            return primaryColor.p1
      }
    },

    '&:disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'none',
      opacity: 0.5
    },

    '&:hover': {
      color: defaultColor.white,
      backgroundColor: ({ buttonType }) => {
        switch(buttonType) {
          case buttonTypes.BT1:
              return primaryColor.p0
          case buttonTypes.BT3:
              return defaultColor.grey;
          case buttonTypes.BT2:
              return primaryColor.p2
          default:
              return primaryColor.p0
        }
      },
    }
  }
});

// export default buttonStyles;