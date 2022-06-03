import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        StreaGa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    );
};

export default Copyright;