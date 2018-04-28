import { injectGlobal } from 'styled-components'
import normalize from 'normalize.css'

import {
  RobotoRegular,
  RobotoItalic,
  RobotoBold,
  RobotoBoldItalic,
  SlabRegular,
  SlabBold
} from '../assets/fonts'

const theme = {
  fontPrimary: "'Roboto', sans-serif",
  fontSecondary: "'Roboto Slab', serif",
  fontSecondaryWeight: 300,
  screens: {
    tablet: '600px',
    landscape: '900px',
    desktop: '1200px'
  },
  colors: {
    black: '#222222',
    white: '#ffffff'
  }
}

injectGlobal`
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegular});
  font-weight: normal;
  font-style: normal;
} 
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoItalic});
  font-weight: normal;
  font-style: italic;
} 
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBold});
  font-weight: bold;
  font-style: normal;
} 
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBoldItalic});
  font-weight: bold;
  font-style: italic;
} 
@font-face {
  font-family: 'Roboto Slab';
  src: url(${SlabRegular});
  font-weight: normal;
  font-style: normal;
} 
@font-face {
  font-family: 'Roboto Slab';
  src: url(${SlabBold});
  font-weight: bold;
  font-style: normal;
} 
  body {
    font-family: ${theme.fontPrimary};
    font-size: 1.1em;
    line-height: 1.4;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }
  *, *:before, *:after {
    border: 0.1px solid pink;
  }
  h1, h2, h3 {
    font-family: ${theme.fontSecondary};
    font-weight: ${theme.fontSecondaryWeight};
  }
`

export default theme
