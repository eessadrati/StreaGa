
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Router from "./routes/Router";
import Navbar from "./components/pages/Navbar.js";

const theme = createTheme({
  palette: {
    background: {
      primary: '#F7F7F8',
      secondary: '#fafafa',
    },
    text: {
      primary: '#000',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    error:{
      main:'#ff0033',
      primary:'#ff0033',

    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
       <Router/>
    </ThemeProvider>
  );
}

export default App;
