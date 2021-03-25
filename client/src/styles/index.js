import { createGlobalStyle } from 'styled-components';

import Reset from './reset';
import Color from './color';
import Typography from './typography';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Color}
  ${Typography}
`;

export default GlobalStyle;
