import React, { useState, useEffect } from 'react'
import { Grid, Button, CssBaseline, Divider, Typography, styled   } from '@mui/material/'
import Channel from "../../layout/AvaTy"

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '0px',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
  });

const Profile = () => {
    return (
        <Grid container direction="row" >

            <Grid item xs={3} sx={styles.firstcol} >
                <img src='/profile.jpg' style={styles.profilePic} />
                <Grid container direction="row" alignItems="center" >
                    <Grid item xs={3}>
                        <Typography variant="subtitle1" component="div" gutterBottom fontWeight="bold">
                            Channels
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Divider/>
                    </Grid>                 
                    <Typography variant="body1" component="div" gutterBottom>
                        No available channels.
                    </Typography>
                    <Channel srcImg='profile.jpg' name="chaine dial zwamel" onClick={() => { alert("No available channels")}} sx={styles.channelsList}/>
                    <Channel srcImg='profile.jpg' name="chaine dial lqhab" sx={styles.channelsList} />
                    <Channel srcImg='profile.jpg' name="chaine dial zwamel 2" sx={styles.channelsList} />
                    <Button  variant="contained" sx={styles.button} >Create New Channel</Button>
                </Grid>
            </Grid>

            <Grid item xs={9} sx={styles.secondcol} >
                <Typography variant="h4" component="div" >
                    Full Name
                </Typography>
                <Typography variant="h5"  component="div">
                    username
                </Typography>
            </Grid>
            
        </Grid >
    );    
};

const styles = {
    profilePic : {
        width:'280px',
        height:'280px',
        paddingBottom: '14px',
    },
    firstcol: {
        paddingLeft: '30px',
    },
    secondcol: {

    },
    channelsList: {
        "&:hover": {
            backgroundColor:'#ececec',
            cursor:'pointer'
        }
    },
    button: {
        marginTop: '14px',
    }
}

export default Profile;