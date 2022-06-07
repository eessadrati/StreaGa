import React, { useState, useEffect, useRef } from 'react'
import CloseIcon  from '@mui/icons-material/Close';
import { Grid, Button, CssBaseline, Divider, Typography, styled, Tabs, Tab, IconButton,
    Dialog, DialogTitle,DialogContent,DialogActions } from '@mui/material/';
import CreateLive from '../CreateLive'
const { IvsClient, CreateChannelCommand, CreateRecordingConfigurationCommand } = require("@aws-sdk/client-ivs");


function Create() {
    const [streamConfigIsOpen, setStreamConfigIsOpen] = useState(false);
    const [streamDetailsIsOpen, setStreamDetailsIsOpen] = useState(false);
    const [streamServer, setStreamServer] = useState(null);
    const [streamKey, setStreamKey] = useState(null);
    const [playbackUrl, setPlaybackUrl] = useState(null);
    const [streamTitle, setStreamTitle] = useState(null);
    const [isLive, setIsLive] = useState(false);
    const [channelId, setChannelId] = useState(null);
    const [streamDate, setStreamDate] = useState(null);
    const [tags, setTags] = useState([]);
    const [recordingConfigurationArn, setRecordingConfigurationArn] = useState(null);


    const  handleCreateLive = async () => {
        const accessKeyId= "AKIAX3ZF5PP272EJEPW6";
        const secretAccessKey = "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";
        var config = {
            "region": "eu-west-1",
            "credentials": {
                "accessKeyId": accessKeyId,
                "secretAccessKey": secretAccessKey
            }
        }
        var newChannel = {
            "authorized": false,
            "latencyMode": "NORMAL",
            "name": "test-chan-1",
            "recordingConfigurationArn": "arn:aws:ivs:eu-west-1:540708535285:recording-configuration/cnBP9yHwYpjJ", //"arn:aws:ivs:eu-west-1:540708535285:recording-configuration/kouttane-bucket",
            "type": "BASIC"
        }
        var newBucket = {
            'destinationConfiguration': {
                's3': {
                    'bucketName': 'kouttane-bucket'
                }
            }
        }
        
        const client = new IvsClient(config);
        const channelCommand = new CreateChannelCommand(newChannel);
        const bucketCommand = new CreateRecordingConfigurationCommand(newBucket);
        const channelRes = await client.send(channelCommand);
        const bucketRes = await client.send(bucketCommand);
        setStreamServer(channelRes.channel.ingestEndpoint);
        setStreamKey(channelRes.streamKey.value);
        setPlaybackUrl(channelRes.channel.playbackUrl);

        console.log(channelRes);
        console.log(bucketRes);

        setStreamDetailsIsOpen(true)
    }

    const handleCreateStreamInDB = () => {
        axios.post('http://localhost:1111/streams/add', newStream)
        .then(res => console.log(res.data))
    }
    }

  return (
    <>
    <button onClick={handleCreateLive}>
        Create
    </button>

    <Dialog
    fullWidth
    open={streamConfigIsOpen}
    >
    <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
        Stream configuration
    <IconButton
        aria-label="close"
        onClick={()=>setStreamConfigIsOpen(false)}
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
        <Grid item >
            <Grid container direction="row" sx={styles.personalInfos} >
                <Typography variant="subtitle1" component="div" fontWeight="bold" >
                    Server
                </Typography>
                <Typography variant="subtitle1" component="div">
                    {"rtmps://"+streamServer}
                </Typography>
            </Grid>
            <Grid container direction="row" sx={styles.personalInfos} >
                <Typography variant="subtitle1" component="div" fontWeight="bold" >
                    Stream key
                </Typography>
                <Typography variant="subtitle1" component="div">
                    {streamKey}
                </Typography>
            </Grid>
            <Divider />
            <Grid container direction="row" sx={styles.personalInfos} >
                <Typography variant="body1" component="div"  >
                    Copy the configuration above to stream in OBS Studio. <br />
                    You can always find this configuration in your channel page. <br />
                    Share you passion with the world !
                </Typography>
            </Grid>
        </Grid>
    </DialogContent>
    <DialogActions>
        <Button autoFocus onClick={()=>setStreamConfigIsOpen(false)}>
            Ok
        </Button>
    </DialogActions>
    </Dialog>


    {/*stream details form*/}
    <Dialog
    fullWidth
    open={streamDetailsIsOpen}
    >
    <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
        Stream details
    <IconButton
        aria-label="close"
        onClick={()=>setStreamDetailsIsOpen(false)}
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
        <CreateLive />
    </DialogContent>
    <DialogActions>
        <Button autoFocus onClick={()=> {
            handleCreateStreamInDB();
            setStreamDetailsIsOpen(false)
            setStreamConfigIsOpen(true)
        }}>
            Save
        </Button>
    </DialogActions>
    </Dialog>
    </>
  )
}

const styles = {
    personalInfos: {
        marginTop: '10px',
        display: 'flex',
        gap: '50px',
    },
}

export default Create