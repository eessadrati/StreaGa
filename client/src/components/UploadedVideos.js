import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import { Grid, Button, CssBaseline, Divider, Typography, Chip, Tab, Tabs } from '@mui/material/';
import Video from "../layout/VideoCard";
import Profile from "../layout/AvaTy"

function UploadedVideos() {
    const video= {
        id:'',
        src:'/eye.webp',poster:'eye.webp',isLive:true,title:'title',channelId:'',channelName:'channel', channelProfile:'/eye.webp',views:2,
    }
    const posterStyle = {
        width: '100%',
    }
  return (
    <Grid container >
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