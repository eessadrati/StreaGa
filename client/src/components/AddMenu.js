import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Tooltip from "@mui/material/Tooltip";
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon  from '@mui/icons-material/Close';
import InputField from '../layout/InputField'
import TagsInput from '../layout/TagsInput'
import axios from 'axios';
import { Grid, Button, CssBaseline, Divider, Typography, styled, Tabs, Tab, IconButton,
  Dialog, DialogTitle,DialogContent,DialogActions } from '@mui/material/';
import AddBlog from "./AddBlog";
import AddEvent from "./AddEvent";


export default function AddMenu() {
  const [anchorEl, setAnchorEl] = useState(null);  
  const [addBlogIsOpen, setAddBlogIsOpen] = useState(false);
  const [addEventIsOpen, setAddEventIsOpen] = useState(false);
  const [streamConfigIsOpen, setStreamConfigIsOpen] = useState(false);
  const [streamDetailsIsOpen, setStreamDetailsIsOpen] = useState(false);
  const [streamServer, setStreamServer] = useState("");
  const [streamKey, setStreamKey] = useState("");
  const [playbackUrl, setPlaybackUrl] = useState("");
  const [streamTitle, setStreamTitle] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  const [isLive, setIsLive] = useState(false);
  const [channelId, setChannelId] = useState("");
  const [streamDate, setStreamDate] = useState(Date.now());
  const [tags, setTags] = useState([]);
  const [recordingConfigurationArn, setRecordingConfigurationArn] = useState("");
  const [tagsList,setTagsList]=useState([]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTagsList =(items) =>{
    setTagsList(items);
  }
 
  const startLiveStream = () => {
    setStreamDetailsIsOpen(true);
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
    .catch(err => console.log(err))
  }
 
  return (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip title="Create">
            
              <IconButton onClick={handleClick} size="large" 
                            aria-label="add new" color="inherit"
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            style={{ }}>
              <AddCircleOutlineIcon fontSize="60px" />
            </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 10,
              sx: {...styles},
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div>
              <MenuItem onClick={startLiveStream}  >
                <ListItemIcon>
                    <OndemandVideoIcon />
                </ListItemIcon>
                  Start Live Stream
              </MenuItem>
              <MenuItem onClick={()=>setAddBlogIsOpen(true)}   >
              <ListItemIcon>
                  <ArticleIcon/>
                  </ListItemIcon>
                Add new Blog
              </MenuItem>
              <MenuItem onClick={()=>setAddEventIsOpen(true)}   >
              <ListItemIcon>
                  <EventIcon/>
                  </ListItemIcon>
                Add new event 
              </MenuItem>
            </div>
          </Menu>
          <AddBlog open={addBlogIsOpen} handleClose={()=> setAddBlogIsOpen(false)}/>
          <AddEvent open={addEventIsOpen} handleClose={()=> setAddEventIsOpen(false)}/>


          {/* Streaming details dialog */}
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
                        <InputField  id="outlined-basic" label="Stream title" variant="outlined" sx={{width:'400px'}}
                            value={streamTitle} onChange={e => setStreamTitle(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>          
                        <InputField  id="outlined-basic" label="Stream description" variant="outlined" sx={{width:'400px'}}
                            value={streamDescription} onChange={e => setStreamDescription(e.target.value)} />
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
                        value={tags} onChange={e => setTags(tags.push(e.target.value))}
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


          {/* Streaming config dialog */}
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
        </>
  );
}

const styles = {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt:0.2,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: 0,
      mr: 0,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 18,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
};
    
