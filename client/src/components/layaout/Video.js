import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import ReactPlayer from "react-player";

const Video = () => {


    const styles = {
        media: {
          height: '40px', // 16:9,
          marginTop:'30'
        }
    };
    const gridContainer = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)"
      };
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return (
        <>
         <Grid container >
            <Grid item xs={2} sx={{bgcolor:'text.primary', maxHeight:'492'}}>
                grid 1
            </Grid>
            <Grid item xs={7} sx={{ maxHeight:492}}>
            <CardMedia    mediaStyle={{ maxHeight:492}}
                    component="video" 
                    autoPlay 
                    controls 
                    sx={{bgcolor:'black', height:492}}
                   
                    src="/video2.mp4"
                    allow="autoPlay"
            />
           {/**  <ReactPlayer url="/video2.mp4" controls={true} />*/}
            </Grid>
            <Grid item xs={3} sx={{bgcolor:'green'}} >
                grid 3
            </Grid>
         </Grid>
        
        {/***/} 

        </>
        
    );
};

export default Video;