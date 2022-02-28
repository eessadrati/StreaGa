import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import Video from '../layaout/Video';

const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
    },
  });
const Home = () => {


    return (
        <div>
        <ThemeProvider  theme={theme}>
              <Video/>
        </ThemeProvider>
          
        </div>
    );
};

export default Home;