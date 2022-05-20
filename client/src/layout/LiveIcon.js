import { Grid } from '@mui/material';
import React from 'react';

const LiveIcon = (props) => {
    const {sx, ...others}=props
    return (
        <>
            <Grid sx={{ fontSize:'1vw',
                        margin:'0.1vw',
                        padding:'0.2vh 0.5vw',
                        borderRadius:'2.2vw',
                        bgcolor:'red',
                        color:'#fff',
                        ...sx
                     }}
                     {...others}

                    >
                    Live
            </Grid>
            
        </>
    );
};

export default LiveIcon;