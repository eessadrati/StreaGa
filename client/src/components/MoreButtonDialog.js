import { Dialog, DialogTitle } from '@mui/material';
import React, { forwardRef } from 'react';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { Grid } from '@mui/material';

const MoreButtonDialog =forwardRef((props,ref) => {
   // const { refs } = props;
   console.log(ref)
    return (
        <Grid container   sx={{
            position: "absolute",
            top: "6vh",
            left: "45%",
            }}
            ref={ref}>
        {/** <MoreButtonDialog open={dialogIsOpen} onClose={closeDialog} />*/} 
       <Paper elevation={8} sx={{width:'20vw'}}>
        <Typography variant='body1' fontSize='1.3vw' sx={{padding:'2vh 1.5vw','&:hover':{
            backgroundColor:'#f5f5f5',
            cursor:'pointer'
        } }}>
            Edite post
        </Typography>
        <Divider/>
        <Typography variant='body1' fontSize='1.3vw' sx={{padding:'2vh 1.5vw','&:hover':{
            backgroundColor:'#f5f5f5',
            cursor:'pointer'
        } }}>
            Delete post
        </Typography>
        </Paper>
        </Grid>
    );
});
export default MoreButtonDialog;