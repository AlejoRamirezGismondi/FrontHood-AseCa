import React from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import Router from './components/Router/Router';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a6e9f2',
      main: 'rgb(0, 200, 0)',
      dark: '#071133',
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
      <MuiThemeProvider theme={theme}>
        <Router/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
