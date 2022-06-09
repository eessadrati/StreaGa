import React, {useEffect, useState, useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import { Grid, Button, CssBaseline, Divider, Typography, Chip, Tab, Tabs } from '@mui/material/';
import Video from "../../layout/VideoCard";
import Profile from "../../layout/AvaTy"
import UploadedVideos from '../UploadedVideos'
import FollowersList from '../FollowersList'
import EditIcon from '@mui/icons-material/Edit';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { Dialog, DialogContent, IconButton, DialogTitle,DialogActions } from '@mui/material';
import  CloseIcon  from '@mui/icons-material/Close';
import InputField from './../../layout/InputField';
import TagsInput from './../../layout/TagsInput';
import Tag from '../../layout/Tag';
import moment from 'moment';
import axios from 'axios';
import { convertToReadableFormat } from './../../utils/Functions';
import AuthContext from './../../context/AuthContext';


export default function Channel() {
    const {user}=useContext(AuthContext);
    const [streamServer, setStreamServer] = useState("bb22679c1b21.global-contribute.live-video.net:443/app/");
    const [streamKey, setStreamKey] = useState("sk_eu-west-1_aOzq9VWZqEjg_acsq661jPr0i8SReqx0QWOl0NbiHOt");
    const {height}=useWindowDimensions();
    const [value, setValue] = useState('uploaded videos');
    const [channel,setChannel]= useState({
        id:'',
        name:'Pewdipie',
        userId:'',
        logo:{
            logo_url: '/eye.webp'
        },
        cover:{
            cover_url: '/cover.jpg'
        },
        description:'Channel for gaming and chilling. Feel free to join us !',
        subscribers:["1","2"],
        tags:["Valorant","Fifa22"],
        videos:["1","2"],
        createdAt:"2022-06-06T19:26:32.365+00:00"


    });
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [logo, setLogo]=useState("");
    const [cover, setCover]=useState("");
    const [desc, setDesc]=useState("");
    const [videos, setVideos]=useState([1,2,3,4,5,6,7,8,9,10]);
    const [followers, setFollowers]=useState([]);
    const [tags, setTags]=useState([]);
    const [isMyChannel, setIsMyChannel]=useState(true);
    const [editChannelIsOpen, setEditChannelIsOpen]=useState(false);
    

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };
   /* const channel={
        id:'',
        name:'',
        userId:'',
        logo:'/eye.webp',
        cover:'/eye.webp',
        description:'',
        subscribers:["1","2"],
        tags:["1","2"],
        videos:["1","2"],


    }*/
    useEffect(()=>{
        if(channel){
            setName(channel.name);
            setLogo(channel.logo);
            setCover(channel.cover);
            setDesc(channel.description);
            setVideos(channel.videos);
            setFollowers(channel.subscribers);
            setTags(channel.tags);
            setIsMyChannel(channel.userId !== "134");

        }
    },[channel]);

    const handleClick = {

    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleDescChange = (event) => {
        setDesc(event.target.value);
    }

    const handleTagsList = (tags) => {
        setTags(tags);
    }
    const handleSaveEdite = () => { 
        if(!name.trim()){
            setNameError("Name is required");
            return;
        }
        setNameError("");

        setEditChannelIsOpen(false);
    }

     const handleCancelEditeChannel = () => {
        setNameError("");
        setName(channel.name);
        setLogo(channel.logo);
        setCover(channel.cover);
        setDesc(channel.description);
        setVideos(channel.videos);
        setTags(channel.tags);
        setEditChannelIsOpen(false);
    }

    const updateChannel = () => {
        const updateChannel = {
            name: channel.name,
            description: channel.description,
            tags: channel.tags,
        }
        axios.patch(`http://localhost:6666/channels/${channel.id}`, updateChannel)
        .then(res => console.log(res))
        .catch(err => console.log(err));           
    }

  return (
    <Grid container direction="row" sx={{height:height-height/9 ,overflow:'auto'}}>
        <CssBaseline />
    <Grid item xs={2} >
        <Grid sx={styles.sidebar_div}>
            <Typography variant="h5" >About</Typography>
            <Typography>
             {desc}
            </Typography>
        </Grid>
        <Grid sx={styles.sidebar_div} spacing={2}>
            <Typography variant="h5">Tags</Typography>
            {tags && tags.map((tag, index)=>(
                <Tag tag={tag} onClick={handleClick} />
            ))

            }
        </Grid>
        <Grid sx={styles.sidebar_div}>
            <Typography variant="h5">Statistics</Typography>
            <Typography>{videos.length} streams</Typography>
            <Typography>Joinded on {moment(channel.createdAt).format('LL')}</Typography>
        </Grid>
    </Grid>
    <Grid item xs={10}>
        <img src={cover.cover_url ? cover.cover_url:'/cover.jpg' } alt="Cover" style={styles.cover}/>
        <Grid container sx={styles.pdp_follow} >
            <Grid item >
                <Grid container sx={styles.pdp_titles} spacing={2} >
                    <Grid item >
                        <Avatar src="/eye.webp" alt="Profile" sx={styles.profile} />
                    </Grid>
                    <Grid item > {/* xs zeroMinWidth   direction="column" justifyContent="center" alignItems="center"*/}
                        <Typography variant="h5">{name}</Typography>
                        <Typography variant="body1" color="gray" >{convertToReadableFormat()}37.5k followers</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{marginRight: '100px',}}>
            {user && (
                isMyChannel ? (
                    <Button onClick={()=>setEditChannelIsOpen(true)} variant="contained" startIcon={<EditIcon/>} sx={{ bgcolor:'color.main'}}  >
                        Edit
                    </Button>
                ):(
                    <Button variant="contained" sx={{ bgcolor:'color.main'}}>
                        Follow
                    </Button>
                )
            )}
            
                
            </Grid>
            <Dialog
                  fullWidth
                  open={editChannelIsOpen}
                  >
                  <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                    Edit information
                    <IconButton
                          aria-label="close"
                          onClick={handleCancelEditeChannel}
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
                    
                    <InputField 
                              fullWidth
                              multiline
                              required
                              maxRows={3}
                              name="name"
                              label='channel name'
                              value={name}
                              onChange={handleNameChange}
                              placeholder='Channel name'
                             
                              errorMessage={nameError}
                              />
                    <InputField 
                              fullWidth
                              multiline
                              label='Description'
                              name="description"
                              value={desc}
                              sx={{marginBottom:'2vh',marginTop:'2vh'}}
                              onChange={handleDescChange}
                              placeholder='Channel description' 
                              />
                    <TagsInput
                            selectedTags={handleTagsList}
                            fullWidth
                            variant="outlined"
                            id="tags"
                            name="tags"
                            tags={tags}
                            placeholder="add Tags"
                            label="tags"
                    />
                    
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleCancelEditeChannel}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleSaveEdite}>
                      Save
                    </Button>
                  </DialogActions>
              </Dialog>

        </Grid>

        
        <Grid container direction="column" sx={styles.videosContainer}>
            <Tabs
                value={value}
                onChange={handleChange}
                sx={styles.tabs}
            >
                <Tab value="uploaded videos" label={<Typography variant="h6" >Videos</Typography>}  sx={{textTransform:'none'}} />
                <Tab value="followers" label={<Typography variant="h6" >Followers</Typography>} sx={{textTransform:'none'}} />
                {user && <Tab value="streamConfig" label={<Typography variant="h6" >Stream Configuration</Typography>} sx={{textTransform:'none'}} />}
            </Tabs>
            {value === 'uploaded videos' && <UploadedVideos  videos={videos}/>}
            {value === 'followers' && <FollowersList/>}
            {value === 'streamConfig'
             && <>
                    <Grid container >
                        <Grid container direction="row" sx={styles.personalInfos} >
                            <Typography variant="subtitle1" component="div" fontWeight="bold" >
                                Stream server
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
                       
                        <Grid container direction="row" sx={styles.text} > 
                            <Typography variant="body1" component="div"  >
                                Copy the configuration above to stream in OBS Studio. <br />
                                Never stop sharing your passion with the world !
                            </Typography>
                        </Grid>
                    </Grid>
                </>}
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
    personalInfos: {
        marginTop: '10px',
        display: 'flex',
        gap: '50px',
    },
    text: {
        marginTop: '40px',
    }
}