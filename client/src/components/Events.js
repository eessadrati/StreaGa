import React from 'react';
import {Grid } from '@mui/material';
import useWindowDimensions from './../utils/useWindowDimensions';
import Event from './Event';
const Events = () => {

    const {height}=useWindowDimensions();
    const deleteEvent=(id)=>{
        console.log(id);
    }
    return (
        <Grid container alignItems="center" sx={{maxHeight:height-height/15, overflow:'auto'}} justifyContent="center">
           
            <Grid item xs={6}>       
                <Event deletEvent={deleteEvent}/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
            </Grid>
        </Grid>
    );
};

export default Events;