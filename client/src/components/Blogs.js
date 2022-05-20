import React from 'react';
import {Grid } from '@mui/material';
import Blog from './Blog';
import useWindowDimensions from '../utils/useWindowDimensions';

const Blogs = () => {
    const blog="blog";
    const {height}=useWindowDimensions();
    return (
        <Grid container alignItems="center" sx={{maxHeight:height-height/15, overflow:'auto'}} justifyContent="center">

           <Grid item xs={6}>
            <Blog blog={blog} />
            <Blog blog={blog} />
            <Blog blog={blog} />
            <Blog blog={blog} />
            <Blog blog={blog} />
            </Grid>

        </Grid>
    );
};

export default Blogs;