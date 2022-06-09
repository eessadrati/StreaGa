import React, { useRef, useEffect,useState } from 'react';
import {Button, Avatar, CardMedia, Chip, Container, CssBaseline, Divider, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import {Tooltip} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PeopleIcon from '@mui/icons-material/People';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ChatIcon from '@mui/icons-material/Chat';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useWindowDimensions from '../../utils/useWindowDimensions';
import VideoPlayer from '../video/VideoPlayer';
import LivePlayer from '../video/LivePlayer';
import SendIcon from '@mui/icons-material/Send';
import { deepOrange } from '@mui/material/colors';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle  from '@mui/material/DialogTitle';
import TagsInput from '../../layout/TagsInput';
import InputField from '../../layout/InputField';
import Tag from '../../layout/Tag';
import Picker from 'emoji-picker-react';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import useOutsideClick from '../../utils/useOutsideClick';
import { hideScrollBar } from '../../utils/Style';
import LikeButton from '../../layout/LikeButton';
import InputMessage from './../../layout/InputMessage';
import Title from '../../layout/Title';
import ReactHlsPlayer from 'react-hls-player';
import axios from 'axios';
import {Link} from "react-router-dom";
const { IvsClient, CreateChannelCommand, CreateRecordingConfigurationCommand, GetStreamCommand,  } = require("@aws-sdk/client-ivs");


const Video = () => {
  const { height, width } = useWindowDimensions();
  const [followedChannels,setFollowedChannels] = useState(["W2S","Gotaga","KSI"]);
  const scrollRef = useRef(null);
  const messageRef = useRef("");
  const emojiPickerRef= useRef(null);
  const btnEmojiPickerRef=useRef(null);
  const [isLive, setIsLive] = useState(true);
  const [watching, setWatching] = useState(1400);
  const [viewers, setViewers] = useState(1500);
  const [message, setMessage] = useState('');
  const [chatMembers, setChatMembers] = useState(["hassan"]);
  const [isLiked, setIsLiked] = useState(false);
  const [openDialog, setOpenDialog] =useState(false)
  const [tagsList, setTagsList]= useState(["Valorant","Minecraft","Chilling"])
  const [open, setOpen] = useState(false);
  const [likes, setLikes] = useState(740);
  const [isChatComponent, setIsChatComponent] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMe,setIsMe] = useState(true)
  const [videoTitle, setVideoTitle]= useState("Minecraft 🧱 and Chilling");
  const [titleError, setTitleError] = useState(null);
  const [videoDescription,setVideoDescription] =useState("");
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamServer, setStreamServer] = useState("");
  const [streamKey, setStreamKey] = useState("");
  const [playbackUrl, setPlaybackUrl] = useState("");
  const [streamTitle, setStreamTitle] = useState("");
  const [streamDescription, setStreamDescription] = useState("");
  const [channelId, setChannelId] = useState("");
  const [streamDate, setStreamDate] = useState(Date.now());
  const [tags, setTags] = useState([]);

  useOutsideClick(emojiPickerRef,btnEmojiPickerRef,()=>{setEmojiPickerOpen(false)});
  const [chat, setChat]=useState([])
    
    useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behaviour: "smooth" });
      }
    }, [chat,isChatComponent]);
    useEffect(()=>{
      //set into chatMembers list of objects that conatin name id and random color
      setChatMembers(chat.map(member=>{
        return { id:member.id, name:member.name}
      }))
    },[chat])

    // verify if the channel is streaming on render or onChange of isStreaming state
    useEffect( async () => {
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
        var getStreamInput = {
          'channelArn': 'arn:aws:ivs:eu-west-1:540708535285:channel/iqXDLZnkA9cQ',
        }
        const client = new IvsClient(config);
        const command = new GetStreamCommand(getStreamInput);
        const response = await client.send(command);
        setIsStreaming(true);
        console.log(response);

      } catch (err) {
          if (err.Code === 'ChannelNotBroadcasting') {
              setIsStreaming(false);
          }
      }
    }, [isStreaming]); 


    const handleChatMemberClick = (member)=>{
      console.log(member)
    }
    const handleLikeClick = ()=>{
      if(isLiked){
        console.log("unlike")
        setLikes(l=>l-1)
      }else{
        console.log("like")
        setLikes(l=>l+1)
      }
      setIsLiked(!isLiked)
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleEdit = () => {
      const updatedStream = {
        streamTitle: streamTitle,
        streamDescription: streamDescription,
        isLive : isLive,
        tags : tags,
      }

      axios.put(`http://localhost:1111/streams/${streamTitle}`, updatedStream)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }
    

    
   const handleVideoTitleChange = (e)=>{
     if(e.target.value.length<=100){
      setTitleError(null)
      setVideoTitle(e.target.value)
     }else{
      setTitleError("Title must be less than 100 characters")
     }
    }
    const handleVideoDescriptionChange = (e)=>{
      setVideoDescription(e.target.value)
    }
    const handleTagsList =(items) =>{
      console.log(items)
     setTagsList(items);
    }
    const handleTagClick = (item)=>{
      console.log(item+" clicked")
    }
    const handleChannelNameClick = (channel)=>{
      console.log(channel)
    }
    const handleMessage=(message)=>{
      console.log("hh"+message)
      setChat(c=>[...c,{id:chat.length+1,
        name:"test",
        message:message,
        color:getRandomColor()}])
    }
    const srcQuality = [ { label: "240p", src: "link" }, { label: "360p", src: "lik" },
    { label: "480p", src: "480p" },{ label: "720p", src: "720p" },{ label: "1080p", src: "1080p" },];


    return (
        <>
        <CssBaseline/> 
         <Grid container sx={{ height:height,overflow:'hidden'}}>
            <Grid item xs={2} sx={{maxHeight:'100%',...customScrollBar}}>
               <Title title="Followed Channels" />
                <Divider/>
                <Grid sx={{marginTop:'1.5vh'}} >
                {/**<AvaTy srcImg={channel.srcImg} name={channel.name} key={index}/> */}
                {followedChannels.map((channel,index)=>(
                <Grid container  key={index} sx={{
                                                padding:"1.4vh 0.4vw",
                                                '&:hover':{
                                                  cursor:'pointer',
                                                  backgroundColor:'#f5f5f5'
                                                },}}
                                                alignItems='center'
                                                onClick={()=>{handleChannelNameClick(channel)}}
                                              >
                                              {/**i will use here avaty */}
                      <Avatar alt="profile" sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                      <Grid sx={{paddingLeft:'0.6vw'}}>
                      <Typography variant='body1' fontSize='1.2vw'>{channel}</Typography>
                      </Grid>
                    
                </Grid>
                ))}
                </Grid>
            </Grid>
            <Grid item xs={7} sx={{ maxHeight:'100%',padding:'0.2vw', overflow:'auto',...hideScrollBar}} >
            {isStreaming ?
            (
              <>
                <Grid >
                  {isLive ? (
                    <>
                      <ReactHlsPlayer src="https://bb22679c1b21.eu-west-1.playback.live-video.net/api/video/v1/eu-west-1.540708535285.channel.iqXDLZnkA9cQ.m3u8" 
                        controls={true}
                        autoPlay={true}
                        sx={{width:'600px', }}
                        />                    
                    </>
                    )
                    :(<>
                      <VideoPlayer src={"/video2.mp4"} srcQualities={srcQuality}/>
                    </>)
                }
                </Grid>
                <Grid container marginBottom='1.6vh'>
                  <Grid item xs={10} >
                    {tagsList.map((tag,index)=>(
                      <Tag key={index} tag={tag}  onClick={()=>handleTagClick(tag)}/>
                      ))}
                  </Grid>
                {isMe && (
                  <>
                  <Grid item container xs={2} alignItems='center' justifyContent='right' paddingTop='0.5vh' paddingRight='0.8vw'>
                    <Button variant="outlined" startIcon={<EditIcon/>} onClick={handleClickOpen}>
                      Edit
                    </Button>
                  </Grid>
                  <Dialog
                      fullWidth
                      open={open}
                      >
                      <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                        Edit video information
                        <IconButton
                              aria-label="close"
                              onClick={handleClose}
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
                        <TagsInput
                                selectedTags={handleTagsList}
                                fullWidth
                                variant="outlined"
                                id="tags"
                                name="tags"
                                tags={tagsList}
                                placeholder="add Tags"
                                label="tags"
                        />
                        <InputField 
                                  fullWidth
                                  multiline
                                  required
                                  maxRows={3}
                                  name="videoTitle"
                                  label='title'
                                  value={videoTitle}
                                  onChange={handleVideoTitleChange}
                                  placeholder='vidoe title'
                                  length={`${videoTitle.length}/100`}
                                  inputProps={{
                                    maxLength: 101,
                                  }}
                                  fontWeight="bold"
                                  errorMessage={titleError}
                                  />
                        <InputField 
                                  fullWidth
                                  multiline
                                  label='Description'
                                  name="videoDescription"
                                  value={videoDescription}
                                  onChange={handleVideoDescriptionChange}
                                  placeholder='vidoe description' 
                                  />
                        
                      </DialogContent>
                      <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                          Cancel
                        </Button>
                        <Button autoFocus onClick={handleEdit}>
                          Save
                        </Button>
                      </DialogActions>
                  </Dialog>
                  </>
                )}
                </Grid>
                <Typography variant='h5' sx={{marginBottom:'0.8vh'}}>
                    {videoTitle}
                </Typography>
                <Grid container >
                <Grid item container xs={7} alignItems="center">Jan, 20 2001</Grid>
                <Grid container item xs={2}
                    alignItems="center" justifyContent="center"
                >    
                    <LikeButton isLiked={isLiked} onClick={handleLikeClick} sx={{ fontSize: '1.5vw' }} />
                    <Typography variant='body1' fontSize='1.3vw'>
                        { `${convertViewers(likes)}`}
                    </Typography>
                  </Grid>
                <Grid container item xs={3}
                    alignItems="center" justifyContent="center"
                >
                    <PersonIcon sx={{ fontSize: '1.4vw' }}/>
                    <Typography variant='body1' fontSize='1.2vw'>
                        { isLive ? `${convertViewers(watching)} watching now...` : `${convertViewers(viewers)} views`}
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ):(
              <Typography variant="h5" sx={{margin:'20px'}}>No stream is currently available.</Typography>
            )}
          
            
            <Divider />
            <Grid container sx={{margin:'1.8vh 0.2vh'}} >
              <Grid item container xs={9}>
                <Grid container sx={styles.pdp_titles} spacing={2} component={Link} to="/channel" >
                    <Grid item >
                        <Avatar src='/profile.jpg' alt="Profile" sx={styles.profile} />
                    </Grid>
                    <Grid item > {/* xs zeroMinWidth   direction="column" justifyContent="center" alignItems="center"*/}
                        <Typography variant="h5">Pewdipie</Typography>
                        <Typography variant="body1" color="gray" >37.5K followers</Typography>
                    </Grid>
                </Grid>
              </Grid>
              {!isMe && (
                <Grid item container alignItems="center" justifyContent='center' xs={3} >
                  {isSubscribed ?
                    <Button variant="outlined" startIcon={<StarBorderIcon />} onClick={()=>setIsSubscribed(false)}>
                      Subscribe
                    </Button>
                    :
                    <Button variant="outlined" startIcon={<CheckIcon />} onClick={()=>setIsSubscribed(true)}>
                      Subscribed
                    </Button>
                  }
                </Grid>
              )}
            </Grid>
            
            <Grid sx={{padding:'2vh 4vw'}}  >
                {videoDescription}
            </Grid>
           {/**  <CardMedia    
                    component="video" 
                    autoPlay 
                    controls 
                    sx={{bgcolor:'black', height:492}}
                    
                   
                    src="/video2.mp4"
                    allow="autoPlay"
            />
             <ReactPlayer url="/video2.mp4" controls={true} />*/}
            </Grid>
            {isStreaming ? (
                <Grid item  xs={3} sx={{height:height,overflow:'hidden'}} >        
                <Grid container>
              
                <Grid container item xs={11} alignItems="center" direction="row" justifyContent="center"
                      sx={{height:height/16,fontSize:'1.4vw'}}
                      >
                      {isChatComponent ? "Stream chat":"Chat members"}
                </Grid>
                <Grid container item xs={1} alignItems="center" direction="row" justifyContent="right" 
                      sx={{paddingRight:'1vw', height:height/16}}
                      >
                      
                   {isChatComponent ? ( 
                      <Tooltip title="Chat members">
                          <PeopleIcon sx={{cursor:'pointer'}} 
                                       onClick={()=>setIsChatComponent(false)}
                                       />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Chat">
                          <ChatIcon sx={{cursor:'pointer'}}
                                    onClick={()=>setIsChatComponent(true)}
                                    />
                      </Tooltip>
                      
                    )}
                </Grid>
                </Grid>
                
                
            
            <Divider/>
            {isChatComponent ? (
              <>
            <Grid sx={{ height:height-(4*height/16),...customScrollBar}}>
              
                {chat ? (
                  <>
                  {chat.map((c,i)=>(
                    <Grid item key={i} sx={{paddingTop:2, paddingLeft:1 }} zeroMinWidth>
                    <span style={{ fontWeight:'bolder',fontSize:15,color:`${c.color}`}}>{`${c.name}`}</span>
                    <span style={{overflowWrap: 'break-word'}}>{`: ${c.message}`}</span> 
                    </Grid>
                  ))}
                <Grid sx={{paddingTop:'4vh' }} ref={scrollRef}></Grid>
                </>
                ):(
                  <Grid>
                  No message 
                </Grid>
                )}
           
            {/**emojiPickerOpen && <Grid ref={emojiPickerRef} >
            <Grid container justifyContent="flex-end" sx={{paddingRight:"0.4vw"}}>
                <IconButton  onClick={()=>setEmojiPickerOpen(false)}>
                  <CloseIcon/>
                </IconButton>
            </Grid>
            <Picker pickerStyle={{width:'auto'}} onEmojiClick={onEmojiClick} />
            </Grid>
             */ }
             </Grid> 
            <Grid sx={{ height:3*height/16}}>
            
              <Grid container sx={{height:'100%',position:'relative'}}>
                {/**<Grid item xs={10}>
                    <InputField 
                          fullWidth
                          multiline
                          maxRows={3}
                          name="message"
                          inputRef={messageRef}
                          placeholder='message...' 
                          onKeyDown={(e)=>{handleInputEnter(e)}}
                          InputProps={{
                                        endAdornment:
                                         <SentimentDissatisfiedIcon
                                          sx={{cursor:'pointer'}}
                                          ref={btnEmojiPickerRef}
                                          onClick={()=>setEmojiPickerOpen(prv=>!prv)} />}}
                          /> */}
                          <InputMessage handleMessage={handleMessage}
                          EndAdornement={endAdornement}
                          inputStyle={{borderRadius:'8px',border:'1px solid #ccc'}}
                          sx={{margin:'0.6vh 0vh'}}
                          placeholder='Message...'
                          />
               {/** </Grid>
                 <Grid item xs={2} sx={{marginTop:'3vh'}}>
                    
                    <IconButton  aria-label="Send" component="span"
                                  onClick={handleSendMessage}>
                      <SendIcon />
                    </IconButton>
                </Grid>*/}
              </Grid>
             
            </Grid>
            </>
          ) : (
            <Grid onScroll={()=>console.log("scroll")} sx={{paddingBottom:'4vh', maxHeight:'95%', overflow:'auto', ...customScrollBar}} >
                  {chatMembers ? 
                      <>
                        {chatMembers.map((member,index)=>(
                          <>
                          <Grid container  key={index} sx={{
                                                            padding:"1.4vh 0.4vw",
                                                            '&:hover':{
                                                              cursor:'pointer',
                                                              backgroundColor:'#f5f5f5'
                                                            }}}
                                                            alignItems='center'
                                                            onClick={()=>{handleChatMemberClick(member.name)}}
                                                         >
                            <Avatar alt="profile" sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                             <Grid sx={{paddingLeft:'0.6vw'}}>
                             <Typography variant='body1' fontSize='1.2vw'>{member.name}</Typography>
                             </Grid>
                            
                          </Grid>
                         <Divider/>
                         </>
                        ))}
                      </>
                    :
                    <Grid container sx={{fontSize:'1.7vw'}} justifyContent='center' alignItem='center'>No one </Grid>
                      
                  }
                    
            </Grid>
          )}
           </Grid>
            ) : (
              <></>
            )

            }
         </Grid>
        </>
        
    );
};

const endAdornement=(props)=>{
 return (
  <Grid {...props} >
                        
  <IconButton  aria-label="Send" component="span">
                
    <SendIcon />
  </IconButton>
</Grid>
)
}

//generate random color
const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //test if there 3 zero successively in color
  if(color.substring(0,3) === 'fff'){
    return getRandomColor();
  }
  return '#'+color;
}
//convert number of viewers 
const convertViewers = (viewers)=>{
  if(viewers>=1000000){
    return `${(viewers/1000000).toFixed(1)}M`
  }
  if(viewers>=1000){
    return `${(viewers/1000).toFixed(1)}K`
  }
    return viewers
}
//styles
const hover = {
  '&:hover':{
    cursor:'pointer'
  }
}
const customScrollBar= {
  overflowY: "auto",
  margin: 0,
  padding: 0,
  listStyle: "none",
  '&::-webkit-scrollbar': {
    width: '0.25vw',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'black',
    outline: '1px solid black',
    borderRadius: '0.5em',
    
  }
}

const styles = {
  pdp_titles: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '50px',
    textDecoration: 'none',
    color: 'inherit',
  },
  profile: {
    width: 86, height: 86
  }
}

export default Video;