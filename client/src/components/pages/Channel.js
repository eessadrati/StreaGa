import React from 'react'
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
/*import cover from '/cover.jpg'
import profile from 'profile.jpg'
import demo_vid from 'vid.mkv'*/
import { Grid, Button, CssBaseline, Divider } from '@mui/material/';
import Video from "../../layout/VideoCard";


export default function Channel() {
    const video= {
        id:'',
        src:'/eye.webp',poster:'eye.webp',isLive:true,title:'title',channelId:'',channelName:'channel', channelProfile:'/eye.webp',views:2,
    }
    const posterStyle = {
        width: '100%',
    }

  return (

    <Grid container direction="row">
        <CssBaseline />
    <Grid item xs={2} >
        <Grid sx={styles.sidebar_div}>
            <h4 style={styles.h4}>About</h4>
            <p>lorem ipsum dolor lorem ipsumùùù dolor lorem ipsum dolor lorem ipsum dolor lorem ipsumùùù dolor lorem ipsum dolor lorem ipsum dolor lorem ipsumùùù dolor lorem ipsum dolor </p>
        </Grid>
        <Grid sx={styles.sidebar_div}>
            <h4>Statistics</h4>
            <div>12 569 streams</div>
            <p>Joinded on 12 May, 2022</p>
        </Grid>
    </Grid>
    <Grid item xs={10}>
        <img src='/cover.jpg' alt="Cover" style={styles.cover}/>
        <Grid container wrap="nowrap" spacing={2} >
            <Grid item >
                <Avatar src='/profile.jpg' alt="Profile" sx={styles.profile} />
            </Grid>
            <Grid item xs zeroMinWidth > {/* direction="column" justifyContent="center" alignItems="center"*/}
                <h3>Pewdipie</h3>
                <p>60M followers</p>
            </Grid>
            <Grid item xs zeroMinWidth >
                <Button variant="contained">
                    Follow
                </Button>
            </Grid>
        </Grid>

        
        <Grid container spacing="20" sx={styles.videosContainer}>
            
            <Grid xs={12}>
            <Divider/>
                <h2>Uploaded videos</h2>
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
            <Grid item xs={4}>
                <Video video={video} posterStyle={posterStyle} /> 
            </Grid>
        </Grid> 
    </Grid>
    <br/><br/>
    </Grid>
  )
}

const styles = {
    sidebar_div: {
        paddingRight: '5%',
        paddingLeft: '5%',
        
    },
    h4: {
        paddingBottom:'-10px'
    },
    cover: {
        width:"100%",
        height:"400px",
    },
    profile: {
        width: 86, height: 86
    },
    videosContainer: {
        paddingTop:'4%'
    }
}