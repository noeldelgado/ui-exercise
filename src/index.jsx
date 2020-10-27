import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

import App from './App.jsx';
import './index.css';

const theme = {
  palette: {
    text: {
      primary: '#202128',
      secondary: '#5f6368',
    },
    action: {
      selected: '#f5f5f5',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    divider: '#e6e6e6',
    primary: {
      main: red[500],
    },
    secondary: {
      main: blue[500],
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
        },
        '*::-webkit-scrollbar': {
          width: '4px',
          height: '4px',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#e6e6e6',
        },
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
};

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
