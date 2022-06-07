import React, { useState, useEffect, useRef } from 'react'
import useWindowDimensions from './../../utils/useWindowDimensions';
import { Grid, Button, CssBaseline, Divider, Typography, styled, Tabs, Tab, IconButton,
    Dialog, DialogTitle,DialogContent,DialogActions } from '@mui/material/';
import CloseIcon  from '@mui/icons-material/Close';
import AlertDialog from '../../layout/AlertDialog';
import MoreButtonDialog from './../MoreButtonDialog';
import useOutsideClick from './../../utils/useOutsideClick';
import KeyIcon from '@mui/icons-material/Key';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Channel from "../../layout/AvaTy"
import PersonalInfos from '../PersonalInfos'
import ChangePwd from '../ChangePwd'
import CreateChannel from '../CreateChannel'

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
    const [editInfosIsOpen, setEditInfosIsOpen] = useState(false);
    const [createChannelIsOpen, setCreateChannelIsOpen] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false)
    const dialogRef=useRef(null);
    const moreButtonRef=useRef(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useOutsideClick(dialogRef,moreButtonRef,() => setDialogIsOpen(false));
    
    const editPost=()=>{
        setEditInfosIsOpen(true);
    }
    
    const createChannel = () => {
        setCreateChannelIsOpen(true);
    }

    const handleSavePost=()=>{
        setEditInfosIsOpen(false);

    }

    return (
        <Grid container direction="row" sx={{height:height ,overflow:'auto'}} >
            <CssBaseline />
            <Grid item xs={3} sx={styles.firstcol} >
                <img src='/profile.jpg' alt='' style={styles.profilePic} />
                <Grid container direction="row" alignItems="center" >
                    <Grid item xs={3}>
                        <Typography variant="subtitle1" component="div" gutterBottom fontWeight="bold">
                            Channels
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Divider sx={{marginRight:'20px'}} />
                    </Grid>                 
                    <Typography variant="body1" component="div" gutterBottom>
                        No available channels.
                    </Typography>
                    <Channel srcImg='profile.jpg' name="chaine dial zwamel" onClick={() => { alert("No available channels")}} sx={styles.channelsList}/>
                    <Channel srcImg='profile.jpg' name="chaine dial lqhab" sx={styles.channelsList} />
                    <Channel srcImg='profile.jpg' name="chaine dial zwamel 2" sx={styles.channelsList} />
                    <Button  
                        variant="contained"
                        sx={styles.button}
                        onClick={createChannel}
                    >
                        Create New Channel
                    </Button>
                </Grid>
            </Grid>

            <Grid item xs={9} sx={styles.secondcol} >
                <Typography variant="h4" component="div" >
                    Full Name
                </Typography>
                <Typography variant="h5"  component="div">
                    username
                </Typography>
                <Grid container direction="row" sx={styles.location} >
                    <LocationOnIcon />
                    <Typography variant="subtitle1" component="div">
                        Morocco
                    </Typography>
                </Grid>
                <Grid container direction="row" sx={styles.joinedOn} >
                    <Typography variant="subtitle1" component="div">
                        Joined on: May 2022
                    </Typography>
                </Grid>
                <Grid item xs={10} sx={styles.editIcon}>
                    <Typography variant="subtitle1" component="div" gutterBottom fontWeight="bold" >
                        Personal information
                    </Typography>
                    <EditIcon 
                        onClick={editPost}
                        sx={{cursor:'pointer'}}
                    />
                </Grid>
                <Divider sx={{marginRight:'160px', marginBottom:'30px'}} />
                <Grid container direction="row" sx={styles.personalInfos} >
                    <Typography variant="subtitle1" component="div" fontWeight="bold" >
                        Gender
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        Female
                    </Typography>
                </Grid>
                <Grid container direction="row" sx={styles.personalInfos} >
                    <Typography variant="subtitle1" component="div" fontWeight="bold" >
                        Birthday
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        01-01-2000
                    </Typography>
                </Grid>
                <Grid container direction="row" sx={styles.personalInfos} >
                    <Typography variant="subtitle1" component="div" fontWeight="bold">
                        Email
                    </Typography>
                    <Typography variant="subtitle1" component="div" >
                        test@example.com
                    </Typography>
                </Grid>
                <Grid container direction="row" sx={styles.personalInfos} >
                    <Typography variant="subtitle1" component="div" fontWeight="bold" >
                        Phone number
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        06 17 nmerti makat3taash
                    </Typography>
                </Grid>

                <Grid item xs={10} sx={styles.followedChannels}>
                    <Typography variant="subtitle1" component="div" gutterBottom fontWeight="bold" >
                        Followed channels
                    </Typography>
                </Grid>
                <Divider sx={{marginRight:'160px', marginBottom:'30px'}} />
                <Channel srcImg='profile.jpg' name="chaine dial zwamel" sx={styles.followedChannelsList}/>
                <Channel srcImg='profile.jpg' name="chaine dial lqhab" sx={styles.followedChannelsList} />
                <Channel srcImg='profile.jpg' name="chaine dial zwamel 2" sx={styles.followedChannelsList} />
            </Grid>

            <Dialog
                fullWidth
                open={editInfosIsOpen}
                >
                <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                  Edit profile
                <IconButton
                    aria-label="close"
                    onClick={()=>setEditInfosIsOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    >
                    <CloseIcon />
                </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid item xs={10} >
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
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={()=>setEditInfosIsOpen(false)}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleSavePost}>
                      Save
                    </Button>
                  </DialogActions>
              </Dialog>

              <Dialog
                fullWidth
                open={createChannelIsOpen}
                >
                <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                  Create new channel
                <IconButton
                    aria-label="close"
                    onClick={()=>setCreateChannelIsOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    >
                    <CloseIcon />
                </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <CreateChannel />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={()=>setCreateChannelIsOpen(false)}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleSavePost}>
                      Save
                    </Button>
                  </DialogActions>
              </Dialog>
            
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
        paddingLeft: '80px',
    },
    channelsList: {
        marginRight: '20px',
        "&:hover": {
            backgroundColor:'#ececec',
            cursor:'pointer'
        }
    },
    location: {
        marginTop: '20px',
        color: 'gray'
    },
    button: {
        marginTop: '14px',
    },
    tabs: {
        //height:height/15,
        marginBottom: '20px',
    },
    editIcon: {
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    joinedOn: {
        marginTop: '10px',
    },
    personalInfos: {
        marginTop: '10px',
        display: 'flex',
        gap: '60px',
    },
    followedChannels: {
        marginTop: '50px'
    },
    followedChannelsList: {
        marginRight:'160px',
        "&:hover": {
            marginRight:'160px',
            backgroundColor:'#ececec',
            cursor:'pointer'
        }
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
