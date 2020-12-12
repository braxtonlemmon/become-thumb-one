import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 18px;
  }

  body, html, #___gatsby {
    height: 100%;
    background: ${props => props.theme.colors.hi};
    font-size: 18px;
    font-family: ${props => props.theme.fonts.galindo};
  }

  body {
    margin: 0px;
  }

  #gatsby-focus-wrapper {
    height: 100%;
  }
`;

export default GlobalStyle;