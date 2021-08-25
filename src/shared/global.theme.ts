import { createTheme } from '@material-ui/core';

export const MaterialGlobal = createTheme({
  typography: {
    h3: {
      fontSize: '24px'
    },
    h4: {
      fontSize: '20px'
    },
    h5: {
      fontSize: '18px'
    },
    h6: {
      fontSize: '14px'
    }
  },
  palette: {
    primary: {
      main: 'rgba(4, 191, 191, 0.5)'
    },
    secondary: {
      main: '#04BFBF'
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: 'white'
      }
    }
  }
});
