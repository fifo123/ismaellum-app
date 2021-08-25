import { MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { Routes } from './src/routes';
import { MaterialGlobal } from './src/shared/global.theme';
import GlobalStyles from './src/styles/GlobalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <MuiThemeProvider theme={MaterialGlobal}>
        <Routes />
      </MuiThemeProvider>
    </>
  );
}
