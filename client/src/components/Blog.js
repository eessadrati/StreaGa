import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const Blog = (props) => {
    const {blogList,listTitle,sx} = props;
    return (
        <Grid sx={{marginBottom:'',bgcolor:'red',...sx}}>
         <Grid container sx={{
                        padding:"1.4vh 0.4vw",
                        alignItems:'center'
                        }}
                        >
            <Avatar alt="profile" sx={{ bgcolor: deepOrange[500],cursor:'pointer' }} >N</Avatar>
            <Grid sx={{paddingLeft:'0.6vw'}}>
                <Typography variant='body1' fontSize='1.2vw' sx={{cursor:'pointer'}}>channel name</Typography>
            </Grid>
         </Grid>
         
        </Grid>
    );
};

export default Blog;