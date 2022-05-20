import { Typography } from '@mui/material';
import React from 'react';

const Title = (props) => {
    const {title,sx, ...others } = props;
    return (
        <>
        <Typography sx={{fontWeight:'bold',padding:'1.2vh 0.2vw',...sx}} variant='body1' component='div' {...others}>{title}</Typography>
       
        </>
    );
};

export default Title;