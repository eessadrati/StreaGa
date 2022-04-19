import React, { useRef, useEffect,useState } from 'react';
import { CardMedia, Container, CssBaseline, Grid, Stack, TextField, Typography } from '@mui/material';

import useWindowDimensions from '../../../utils/useWindowDimensions';
import VideoPlayer from './VideoPlayer';
import LivePlayer from './LivePlayer';

const Video = () => {
  const { height, width } = useWindowDimensions();
  const followedChannels = useRef([])
  const [isLive, setIsLive] = useState(false);
  console.log("height:"+height+", wdth:"+width)
  const chat = [{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan4", message:"salam"},{name:"hassan5", message:"salam2"},{name:"hassan6", message:"salam3"},{name:"hassan7", message:"salam"},{name:"hassan8", message:"salam2"},{name:"hassan9", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan4", message:"salam"},{name:"hassan5", message:"salam2"},{name:"hassan6", message:"salam3"},{name:"hassan7", message:"salam"},{name:"hassan8", message:"salam2"},{name:"hassan9", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan4", message:"salam"},{name:"hassan5", message:"salam2"},{name:"hassan6", message:"salam3"},{name:"hassan7", message:"salam"},{name:"hassan8", message:"salam2"},{name:"hassan9", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"},{name:"hassan", message:"salam"},{name:"hassan2", message:"salam2"},{name:"hassan3", message:"salam3"}]
    const styles = {
        media: {
          height: '40px', // 16:9,
          marginTop:'30'
        }
    };
    //dommy data
    useEffect(()=>{
      followedChannels.current = ["channel1","channel2","channel3","channel4","channel5"]
      console.log(followedChannels)
    },[])
  
    const srcQuality = [ { label: "240p", src: "link" }, { label: "360p", src: "lik" },
    { label: "480p", src: "480p" },{ label: "720p", src: "720p" },{ label: "1080p", src: "1080p" },];
    return (
        <>
        <CssBaseline/> 
         <Grid container sx={{bgcolor:'white', height:height,overflow:'hidden'}}>
            <Grid item xs={2} sx={{bgcolor:'green'}}>
                <Typography>Followed channel</Typography>
                <Grid >
                  {followedChannels.current.map((channel,index)=>(
                    <Grid key={index}>{channel}</Grid>
                  ))}
                </Grid>
            </Grid>
            <Grid item xs={7} sx={{ maxHeight:'100%', overflow:'auto', '&::-webkit-scrollbar': {display: 'none'}}} >
            <Grid sx={{padding:'0.2vw'}}>
            {isLive ? (
              <>
                <LivePlayer src={"/video2.mp4"} srcQualities={srcQuality}/>
              </>
              ) : (
              <>
                <VideoPlayer src={"/video2.mp4"} srcQualities={srcQuality}/>
              </>
              )}
            <Grid sx={{height:400}}>
           Hello world
            </Grid>
            </Grid>
            <Grid sx={{height:400, bgcolor:'red'}}>
           Hello world
            </Grid>
           {/** <CardMedia    
                    component="video" 
                    autoPlay 
                    controls 
                    sx={{bgcolor:'black', height:492}}
                    
                   
                    src="/video2.mp4"
                    allow="autoPlay"
            />
             <ReactPlayer url="/video2.mp4" controls={true} />*/}
            </Grid>
            <Grid item  xs={3} sx={{ bgcolor:'green', height:height,overflow:'hidden'}} >        
                <Stack spacing={0} direction="row" justifyContent="center">
                  
                    <Grid container alignItems="center" direction="row" justifyContent="center"
                           sx={{bgcolor:'blue', height:height/16}}
                           >
                           Stream chat
                    </Grid>
                    <Grid container alignItems="center" direction="row" justifyContent="center"
                          sx={{bgcolor:'red', height:height/16}}
                          >
                          Stream chat
                    </Grid>
                    <Grid container alignItems="center" direction="row" justifyContent="right" 
                          sx={{paddingRight:1, bgcolor:'blue', height:height/16}}
                          >
                          Stream chat
                    </Grid>
                    
                </Stack>
                <Grid sx={{height:height-(4*height/16),...customScrollBar}}>
                    {chat ? (
                      <>
                      {chat.map((c,i)=>(
                        <Grid key={i} sx={{paddingTop:2, paddingLeft:1 }}>
                        <span style={{color:'white', fontWeight:'bolder',fontSize:15}}>{`${c.name}`}</span>
                        {`:${c.message}`} 
                        </Grid>
                      ))}
                    
                    </>
                    ):(
                      <Grid>
                      No message 
                    </Grid>
                    )}
                </Grid> 
                
               <Grid sx={{bgcolor:'blue',  height:3*height/16}}>
                 <TextField/>
               </Grid>
               </Grid>
                
           
         </Grid>
        
        {/***/} 

        </>
        
    );
};

//styles
const customScrollBar= {
  overflowY: "auto",
  margin: 0,
  padding: 0,
  listStyle: "none",
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'black',
    outline: '1px solid black',
    borderRadius: '0.5em',
    
  }
}
export default Video;