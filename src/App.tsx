import React from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import Router from './components/Router/Router';
import {ToastContainer} from "react-toastify";
import {ToastProvider} from "react-toast-notifications";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a6e9f2',
      main: 'rgb(0, 160, 0)',
      dark: 'rgb(0, 50, 0)',
      contrastText: '#e8e8e8',
    },
    secondary: {
      light: '#e8e76d',
      main: '#ece81a',
      dark: '#938f11',
      contrastText: '#504f4f',
    },
    background: {
      default:  '#4c4c4c',
      paper:  '#eef0f2'
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#141414',
    },
    action: {
      disabled: '#7f7f7f',
    }
  },
});


function App() {
  return (
    <div className="App">
      <ToastProvider>
        <MuiThemeProvider theme={theme}>
          <Router/>
        </MuiThemeProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
