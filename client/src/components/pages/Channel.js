import React, {useEffect, useState} from 'react'
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
import { convertToReadableFormat } from './../../utils/Functions';

export default function Channel() {
    
    const {height}=useWindowDimensions();
    const [value, setValue] = useState('uploaded videos');
    const [channel,setChannel]= useState({
        id:'',
        name:'channel name',
        userId:'',
        logo:{
            logo_url: '/eye.webp'
        },
        cover:{
            cover_url: '/eye.webp'
        },
        description:' decription',
        subscribers:["1","2"],
        tags:["1","2"],
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
                        <Avatar src={logo.logo_url ? logo.logo_url: '/profile.jpg'} alt="Profile" sx={styles.profile} />
                    </Grid>
                    <Grid item > {/* xs zeroMinWidth   direction="column" justifyContent="center" alignItems="center"*/}
                        <Typography variant="h5">{name}</Typography>
                        <Typography variant="body1" color="gray" >{convertToReadableFormat()} followers</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{marginRight: '100px',}}>
            {isMyChannel ? (
                <Button onClick={()=>setEditChannelIsOpen(true)} variant="contained" startIcon={<EditIcon/>} sx={{ bgcolor:'color.main'}}  >
                    Edit
                </Button>
            ):(
                <Button variant="contained" >
                    Follow
                </Button>
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
                <Tab value="uploaded videos" label={<Typography variant="h6" >Uploaded videos</Typography>}  sx={{textTransform:'none'}} />
                <Tab value="followers" label={<Typography variant="h6" >Followers</Typography>} sx={{textTransform:'none'}} />
            </Tabs>
            {value === 'uploaded videos' && <UploadedVideos  videos={videos}/>}
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