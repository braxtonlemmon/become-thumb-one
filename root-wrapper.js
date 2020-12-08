import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './src/theme/GlobalStyle';
import theme from './src/theme/theme';
import ContextProvider from './src/context/GlobalContext';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ContextProvider>
      {element}
    </ContextProvider>
  </ThemeProvider>
)