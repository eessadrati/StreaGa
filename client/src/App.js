
import React from 'react';
import { createTheme, ThemeProvider, Grid } from '@mui/material';
import Router from "./routes/Router";
import Navbar from "./components/pages/Navbar.js";
import useWindowDimensions from './utils/useWindowDimensions';

const theme = createTheme({
  palette: {
    color:{
      main:'#0E185F',
      primary: '#F7F7F8',
    },
    background: {
      main:'#0E185F',
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
  const {height}=useWindowDimensions();
  return (
    <ThemeProvider theme={theme}>
      <Grid  sx={{ height:height,overflow:'hidden'}}>
       <Router/>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
