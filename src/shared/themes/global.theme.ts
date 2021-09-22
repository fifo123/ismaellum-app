import { createTheme } from '@material-ui/core';
import theme from './theme';

export const MaterialGlobal = createTheme({
  typography: {
    h3: {
      fontSize: theme.font.sizes.large
    },
    h4: {
      fontSize: theme.font.sizes.medium
    },
    h5: {
      fontSize: theme.font.sizes.normal
    },
    h6: {
      fontSize: theme.font.sizes.small
    }
  },
  palette: {
    primary: {
      main: theme.colors.primary
    },
    secondary: {
      main: theme.colors.secondary
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: theme.colors.white
      }
    }
  }
});
