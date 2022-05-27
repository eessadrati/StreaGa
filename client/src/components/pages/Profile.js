import React, { useState, useEffect } from 'react'
import useWindowDimensions from './../../utils/useWindowDimensions';
import { Grid, Button, CssBaseline, Divider, Typography, styled, Tabs, Tab,  } from '@mui/material/'
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import Channel from "../../layout/AvaTy"
import PersonalInfos from '../PersonalInfos'
import ChangePwd from '../ChangePwd'

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
    const {height}=useWindowDimensions();
    const [value, setValue] = useState('Personal Infos');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <Grid item xs={10} sx={styles.infos}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        sx={styles.tabs}
                        >
                        <Tab value="Personal Infos" label={<Typography variant="body1">{getIcon("Personal Infos")} Personal Infos</Typography>}  iconPosition="start" sx={{textTransform:'none',fontSize:'1.5vw'}} />
                        <Tab value="change pwd" label={<Typography>{getIcon("change pwd")} Change password</Typography>} iconPosition="start"  sx={{textTransform:'none',fontSize:'1.3vw'}} />
                    </Tabs>
                    {value === 'Personal Infos' && <PersonalInfos/>}
                    {value === 'change pwd' && <ChangePwd/>}
                </Grid>
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
    },
    infos: {
        marginTop: '40px'
    },
    tabs: {
        //height:height/15,
        marginBottom: '20px',
    }
}

const getIcon=(type)=>{
    if(type==="Personal Infos"){
      return(
        <>
          <PersonIcon/>
        </>
      )
    }
    else if(type==="change pwd"){
      return (
        <>
          <KeyIcon/>
        </>
      )
    }  
}

export default Profile;