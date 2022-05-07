import React from 'react';
import { Box, Grid } from '@mui/material';
import Blog from './Blog';

const Blogs = () => {
    return (
        <Grid container alignItems="center" justifyContent="center">

           <Grid item xs={6}>
            <Blog listTitle="News & Reviews" />
            </Grid>
        </Grid>
    );
};

export default Blogs;