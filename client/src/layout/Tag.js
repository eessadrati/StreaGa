import React from 'react';
import { Chip, Grid } from '@mui/material';

const Tag = (props) => {
    const {tag,onClick} = props;
    return (
        <Grid   sx={{margin:'0.8vh 0.6vh',
                   display:'inline-block',
                   cursor:'pointer',
                   '&:hover':{
                        cursor:'pointer'
                        }
                   }}
                onClick={onClick}>
        <Chip label={tag} size="small" sx={{'&:hover':{cursor:'pointer'}}} />
        </Grid>
    );
};

export default Tag;