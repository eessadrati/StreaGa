import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import { Grid, Button, CssBaseline, Divider, Typography, Chip, Tab, Tabs } from '@mui/material/';
import Video from "../layout/VideoCard";
import Profile from "../layout/AvaTy"
import { Paper } from '@mui/material';

function UploadedVideos(props) {
    console.log(props)
    const video= {
        id:'',
        src:'/eye.webp',poster:'eye.webp',isLive:true,title:'title',channelId:'',channelName:'channel', channelProfile:'/eye.webp',views:2,
    }
    const posterStyle = {
        width: '100%',
        height: 'auto',
    }
    const videos=["1","2","3","4","5","6","7","8","9","10"];
  return (
    <Grid container spacing={1}>
        <Grid item xs={4}>
            <Video video={video} posterStyle={posterStyle} /> 
        </Grid>
        <Grid item xs={4}>
            <Video video={video} posterStyle={posterStyle} /> 
        </Grid>
        <Grid item xs={4}>
            <Video video={video} posterStyle={posterStyle} /> 
        </Grid>
        <Grid item xs={4}>
            <Video video={video} posterStyle={posterStyle} /> 
        </Grid>
        <Grid item xs={4}>
            <Video video={video} posterStyle={posterStyle} /> 
        </Grid>
        <Grid item xs={4}>
            <Video video={video} posterStyle={posterStyle} /> 
        </Grid>
        <Grid item xs={4}>
            <Video video={video} posterStyle={posterStyle} /> 
        </Grid>
        <Grid item xs={4}>
            <Video video={video} posterStyle={posterStyle} /> 
        </Grid>
    </Grid>
  )
}
const styles = {
    tabs: {
        marginBottom: '20px',
    },
}


export default UploadedVideos