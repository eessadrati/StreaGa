import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import AvatarProfile from './AvatarProfile';

const AvaTy = (props) => {
    const {srcImg,name,sx, ...others } = props;
    return (
        <>
         <Grid container alignItems='center' sx={{ padding:"1.4vh 0.4vw",...sx}} {...others}>
                <AvatarProfile srcImg={srcImg} name={name} />
                <Grid sx={{paddingLeft:'0.6vw'}}>
                <Typography variant='body1' fontSize='1.2vw' sx={{cursor:'pointer'}}>{name}</Typography>
                </Grid>
                    
         </Grid>   
        </>
    );
};

export default AvaTy;