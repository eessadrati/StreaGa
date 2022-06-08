import React, { useContext } from 'react';
import {Grid } from '@mui/material';
import useWindowDimensions from './../utils/useWindowDimensions';
import Event from './Event';
import EventContext from './../context/EventContext';
const Events = () => {

    const {height}=useWindowDimensions();
    const deleteEvent=(id)=>{
        console.log(id);
    }
    const {events}=useContext(EventContext)
    return (
        <Grid container alignItems="center" sx={{maxHeight:height-height/6, overflow:'auto'}} justifyContent="center">
           
            <Grid item xs={6}>   
               {events ? (
                   <>
                    {events.map((event,index)=>(
                        <Event event={event}  key={index}/>
                    ))}
                    </>
               ):(
                   <>
                   <div>loading...</div>
                   </>
               )}    
            </Grid>
        </Grid>
    );
};

export default Events;