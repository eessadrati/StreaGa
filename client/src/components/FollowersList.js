import React from 'react'
import { Grid, Tooltip, Typography } from '@mui/material/';
import Channel from "../layout/AvaTy"
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

function FollowersList() {
  return (
    <Grid container xs={6}>
        <Channel srcImg='profile.jpg' name={getName("zzamel")} sx={styles.followersList}/>
        <Channel srcImg='profile.jpg' name={getName("lqahba")} sx={styles.followersList} />
        <Channel srcImg='profile.jpg' name={getName("ssobissa")} sx={styles.followersList} />
    </Grid>
  )
}

const styles = {
    followersList: {
        "&:hover": {
            backgroundColor:'#ececec',
            cursor:'pointer'
        }
    },
    follower: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

const getName=(name)=> {
    return (
        <Grid container sx={styles.follower}>
        <Typography >{name}</Typography>
        <Tooltip title="Block user">
            <PersonRemoveIcon sx={{marginRight:"-500px"}}/>
        </Tooltip>
        </Grid>
    )
    
}
export default FollowersList