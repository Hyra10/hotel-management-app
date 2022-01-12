import { createUseStyles } from 'react-jss';
import { defaultColor } from './utils/styles/colors'

export const sidebar = {
  widthOpened: 200,
  widthClosed: 65,
  iconSize: 35,
};

export const headerNavBar = {
  height: 60
}

export const settingNavbar = {
  width: 240
}

export const appStyles = createUseStyles({
  content: {
    marginLeft: sidebar.widthClosed,
    paddingTop: headerNavBar.height,
    padding: 20,
    backgroundColor: defaultColor.lighterGrey,
    height: '100%'
  },
});

const globalStyles = {
  '@font-face': {
    fontFamily: 'Roboto',
    src: 'url(/assets/fonts/Roboto-Regular.ttf) format(truetype)',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  // '@font-face': [
  //   {
  //     fontFamily: 'Roboto',
  //     src: 'url(Roboto-Italic.ttf) format(truetype)',
  // fontWeight: 'normal',
  // fontStyle: 'italic',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-ThinItalic.ttf) format(truetype)',
  //   fontWeight: 100,
  //   fontStyle: 'italic',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-Regular.ttf) format(truetype)',
  //   fontWeight: 'normal',
  //   fontStyle: 'normal',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-Black.ttf) format(truetype)',
  //   fontWeight: 900,
  //   fontStyle: 'normal',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-Thin.ttf) format(truetype)',
  //   fontWeight: 100,
  //   fontStyle: 'normal',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-LightItalic.ttf) format(truetype)',
  //   fontWeight: 300,
  //   fontStyle: 'italic',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-Bold.ttf) format(truetype)',
  //   fontWeight: 'bold',
  //   fontStyle: 'normal',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-Medium.ttf) format(truetype)',
  //   fontWeight: 500,
  //   fontStyle: 'normal',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-Light.ttf) format(truetype)',
  //   fontWeight: 300,
  //   fontStyle: 'normal',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-BoldItalic.ttf) format(truetype)',
  //   fontWeight: 'bold',
  //   fontStyle: 'italic',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-MediumItalic.ttf) format(truetype)',
  //   fontWeight: 500,
  //   fontStyle: 'italic',
  // },
  // {
  //   fontFamily: 'Roboto',
  //   src: 'url(Roboto-BlackItalic.ttf) format(truetype)',
  //   fontWeight: 900,
  //   fontStyle: 'italic',
  // }
  // ],
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*': {
      boxSizing: 'inherit',
    },
    '*:before': {
      boxSizing: 'inherit',
    },
    '*:after': {
      boxSizing: 'inherit',
    },
    body: {
      fontFamily: 'Roboto, sans-serif',
      display: 'flex',
    },
    small: {
      '&.message-error': {
        display: 'block',
      },
    },
    '.message-error': {
      color: defaultColor.warningRed,
    },
    '.input-error': {
      border: `1px solid ${defaultColor.warningRed}`,

      '&:focus': {
        border: `1px solid ${defaultColor.warningRed}`,
        outlineColor: defaultColor.warningRed,
      },
    },
  },
};

export default globalStyles;
