import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import { Grid, Button, CssBaseline, Divider, Typography, Chip, Tab, Tabs } from '@mui/material/';
import Video from "../../layout/VideoCard";
import Profile from "../../layout/AvaTy"
import UploadedVideos from '../UploadedVideos'
import FollowersList from '../FollowersList'


export default function Channel() {
    const [value, setValue] = useState('uploaded videos');
    const handleChange = (event, newValue) => {
        setValue(newValue)
    };
    const handleClick = {

    }

  return (
    <Grid container direction="row">
        <CssBaseline />
    <Grid item xs={2} >
        <Grid sx={styles.sidebar_div}>
            <Typography variant="h5" >About</Typography>
            <Typography>
                lorem ipsum dolor lorem ipsumùùù dolor lorem ipsum dolor lorem ipsum dolor lorem ipsumùùù dolor lorem ipsum dolor lorem ipsum dolor lorem ipsumùùù dolor lorem ipsum dolor  
            </Typography>
        </Grid>
        <Grid sx={styles.sidebar_div} spacing={2}>
            <Typography variant="h5">Tags</Typography>
            <Chip label="Valorant" onClick={handleClick} />
            <Chip label="Fifa22" onClick={handleClick} />
        </Grid>
        <Grid sx={styles.sidebar_div}>
            <Typography variant="h5">Statistics</Typography>
            <Typography>12 569 streams</Typography>
            <Typography>Joinded on 12 May, 2022</Typography>
        </Grid>
    </Grid>
    <Grid item xs={10}>
        <img src='/cover.jpg' alt="Cover" style={styles.cover}/>
        <Grid container sx={styles.pdp_follow} >
            <Grid item >
                <Grid container sx={styles.pdp_titles} spacing={2} >
                    <Grid item >
                        <Avatar src='/profile.jpg' alt="Profile" sx={styles.profile} />
                    </Grid>
                    <Grid item > {/* xs zeroMinWidth   direction="column" justifyContent="center" alignItems="center"*/}
                        <Typography variant="h5">Pewdipie</Typography>
                        <Typography variant="body1" color="gray" >60M followers</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{marginRight: '100px',}}>
                <Button variant="contained" >
                    Follow
                </Button>
            </Grid>
        </Grid>

        
        <Grid container direction="column" sx={styles.videosContainer}>
            <Tabs
                value={value}
                onChange={handleChange}
                sx={styles.tabs}
            >
                <Tab value="uploaded videos" label={<Typography variant="h6" >Uploaded videos</Typography>}  sx={{textTransform:'none'}} />
                <Tab value="followers" label={<Typography variant="h6" >Followers</Typography>} sx={{textTransform:'none'}} />
            </Tabs>
            {value === 'uploaded videos' && <UploadedVideos/>}
            {value === 'followers' && <FollowersList/>}
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
        paddingBottom: '10%',
    },
    h4: {
        paddingBottom:'-10px'
    },
    cover: {
        width:"100%",
        height:"300px",
    },
    profile: {
        width: 86, height: 86
    },
    videosContainer: {
        paddingTop:'4%'
    },
    pdp_follow: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pdp_titles: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '50px',
    },
    followers: {
        marginRight: '20px',
        width: '100%',
    },
    tabs: {
        marginBottom: '24px',
    },
}