import React, { useState, useEffect, useRef } from 'react'
import CloseIcon  from '@mui/icons-material/Close';
import { Grid, Button, CssBaseline, Divider, Typography, styled, Tabs, Tab, IconButton,
    Dialog, DialogTitle,DialogContent,DialogActions } from '@mui/material/';
import axios from 'axios';
import InputField from '../../layout/InputField'
import TagsInput from '../../layout/TagsInput'
const { IvsClient, CreateChannelCommand, CreateRecordingConfigurationCommand, GetStreamCommand  } = require("@aws-sdk/client-ivs");


function Create() {
    const [streamConfigIsOpen, setStreamConfigIsOpen] = useState(false);
    const [streamDetailsIsOpen, setStreamDetailsIsOpen] = useState(false);
    const [streamServer, setStreamServer] = useState("");
    const [streamKey, setStreamKey] = useState("");
    const [playbackUrl, setPlaybackUrl] = useState("");
    const [streamTitle, setStreamTitle] = useState("");
    const [isLive, setIsLive] = useState(false);
    const [channelId, setChannelId] = useState("");
    const [streamDate, setStreamDate] = useState(Date.now());
    const [tags, setTags] = useState([]);
    const [recordingConfigurationArn, setRecordingConfigurationArn] = useState("");
    const [tagsList,setTagsList]=useState([]);

    const handleTagsList =(items) =>{
        console.log(items)
        setTagsList(items);
    }

    const  handleCreateLive = async () => {
        try {
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
        
        var getStreamInput = {
            'channelArn': 'arn:aws:ivs:eu-west-1:540708535285:channel/iqXDLZnkA9cQ',
        }

        const client = new IvsClient(config);
        const command = new GetStreamCommand(getStreamInput);
        const response = await client.send(command);
        setIsLive(true);

        } catch (err) {
            if (err.Code === 'ChannelNotBroadcasting') {
                setIsLive(false);
            }
        }

        /*const channelCommand = new CreateChannelCommand(newChannel);
        const bucketCommand = new CreateRecordingConfigurationCommand(newBucket);
        const channelRes = await client.send(channelCommand);
        const bucketRes = await client.send(bucketCommand);
        
        setStreamServer(channelRes.channel.ingestEndpoint);
        setStreamKey(channelRes.streamKey.value);
        setPlaybackUrl(channelRes.channel.playbackUrl);

        console.log(channelRes);
        console.log(bucketRes);*/

        setStreamDetailsIsOpen(true)
    }

    
    
    const handleCreateStreamInDB = () => {
        const newStream = {
        streamTitle : streamTitle,
        isLive : isLive,
        channelId : channelId,
        streamDate : streamDate,
        tags : tags,
        streamServer : streamServer,
        streamKey : streamKey,
        playbackUrl : playbackUrl,
        recordingConfigurationArn : recordingConfigurationArn,
        }
        console.log(newStream)
        axios.post('http://localhost:1111/streams/add', newStream)
        .then(res => console.log(res.data))
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
        <Grid container >
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
        <Grid container direction="row" spacing={1} sx={styles.container}>
            <Grid item xs={12}>          
                <InputField  id="outlined-basic" label="Channel name" variant="outlined" sx={{width:'400px'}}
                    value={streamTitle} onChange={e => setStreamTitle(e.target.value)} />
            </Grid>
            <Grid item sx={{marginTop:'2vh'}}>
                <TagsInput 
                sx={{width:'400px'}}
                selectedTags={handleTagsList}
                variant="outlined"
                id="tags"
                name="tags"
                tags={tagsList}
                placeholder="add tag"
                id="outlined-basic" label="Tags" variant="outlined"
                value={tags} onChange={e => setTags(e.target.value)}
                />
            </Grid>
        </Grid>
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