import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body, html, #___gatsby {
    height: 100%;
  }

  body {
    margin: 0px;
  }

  #gatsby-focus-wrapper {
    height: 100%;
  }
`;

export default GlobalStyle;