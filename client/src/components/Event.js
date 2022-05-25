import React,{ useState, useRef}from 'react';
import { Avatar, Button, Divider, Grid, IconButton, Paper, Rating, styled, Typography,
    Dialog, DialogTitle,DialogContent,DialogActions} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LikeButton from '../layout/LikeButton';
import InputMessage from './../layout/InputMessage';
import SendIcon from '@mui/icons-material/Send';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PlaceIcon from '@mui/icons-material/Place';
import PeopleIcon from '@mui/icons-material/People';
import AvatarProfile from './../layout/AvatarProfile';
import Tag from './../layout/Tag';
import AlertDialog from '../layout/AlertDialog';
import MoreButtonDialog from './MoreButtonDialog';
import useOutsideClick from './../utils/useOutsideClick';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon  from '@mui/icons-material/Close';
import TagsInput from './../layout/TagsInput';
import InputField from './../layout/InputField';
import FlagIcon from '@mui/icons-material/Flag';
import moment from 'moment';
import { Link } from 'react-router-dom';
import DateTimeField from '../layout/DateTimeField';
import { numberInputStyle } from '../utils/Style';
const Event = (props) => {
    const {event,deletEvent,sx} = props;
    //blog={id,userId,game,title,descpription,participantsNumber, location, startDate, endDate,link}
    const [eventTitle, setEventTitle] = useState("title");
    const [titleError, setTitleError] = useState("");
    const [game, setGame] = useState("game");
    const [gameError, setGameError] = useState("");
    const [participantsNumber, setParticipantsNumber] = useState("100");
    const [participantsNumberError, setParticipantsNumberError] = useState("");
    const [location, setLocation] = useState("casablanca");
    const [locationError, setLocationError] = useState("");
    const [link , setLink] = useState("");
    const [linkError, setLinkError] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventDesc, setEventDesc] = useState("descreption");
    const [descError, setDescError] = useState("");
    const [isMe, setIsMe] = useState(true);
    const [editPostIsOpen, setEditPostIsOpen] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const moreButtonRef=useRef(null);
    const dialogRef=useRef(null);
    const goToProfile=()=>{
      console.log("profile")
    }
    const handleMoreClick = () => {
        setDialogIsOpen(true)
    }
    const onStartDateChange=(newValue)=>{
        setStartDate(newValue);
    }
    const onEndDateChange=(newValue)=>{
      setEndDate(newValue);
  }

    useOutsideClick(dialogRef,moreButtonRef,() => setDialogIsOpen(false));
    const editePost=()=>{
        setEditPostIsOpen(true);
    }
      const handleblogTitleChange=(e)=>{
               setEventTitle(e.target.value);
      }
      const handleEventDescChange =(e)=>{
        setEventDesc(e.target.value);
      }
      const handleSavePost=()=>{
        setEditPostIsOpen(false);

      }
        
    const deletePost=()=>{

    }
    //create date for 2022/05/24 14:55 

    return (
        <>
        <Paper elevation={2} sx={{position:'relative', bgcolor:'#fff',margin:'3.8vh 0vw',padding:'1.6vh 0.4vw',...sx}}>
         <Grid container sx={{}} >
             <Grid item  container xs={10} sx={{
                        padding:"0vh 0.4vw",
                        paddingTop:'0.4vh',
                        alignItems:'center'
                        }}>
                <Typography variant="subtitle2" component="div" sx={{fontSize:'0.9vw',fontWeight:'bold'}}>
                <span style={{color:'#B20600'}}>{moment("2022/07/24 14:55 ").format('LLLL')}</span>
                       {` - `}
                <span  style={{color:'#B20600'}}>{moment("2022/08/24 14:55 ").format('LLLL')}</span>
                </Typography>
                <Typography variant="h5" sx={{fontSize:'1.7vw',fontWeight:'bold'}}>
                     {"event.title title title title tile"} 
                </Typography>
            {/** <AvatarProfile srcImg={""} name={"name"} />
            <Grid sx={{paddingLeft:'0.6vw'}}>
                <Typography variant='body1' fontSize='1.6vw' sx={{cursor:'pointer'}}>channel name</Typography>
            </Grid>
            <Grid sx={{paddingLeft:'0.6vw', fontSize:'0.8vw'}}>few seconds ago</Grid>*/}
            </Grid>
            <Grid item container xs={2} sx={{}} alignItems='start' justifyContent='right' paddingRight='0.8vw'>
               {isMe &&(<IconButton ref={moreButtonRef} onClick={handleMoreClick}>
                    <MoreVertIcon/>
                </IconButton>
                )} 
            </Grid>
         </Grid>
            <Grid container sx={{
                        padding:"0vh 0.4vw",
                        alignItems:'center'
                        }}>
                <Grid item xs={6} sx={{display:'flex',
                                      alignItems:'center',
                                      flexWrap:'wrap'}}>
                      <SportsEsportsIcon/>
                      <span>call of duty</span>
                </Grid>
                <Grid item xs={6}  sx={{display:'flex',
                                      alignItems:'center',
                                      flexWrap:'wrap'}}>
                        <PlaceIcon/>
                        <span>casablanca</span>
                </Grid>
                 <Grid item xs={6} sx={{display:'flex',
                                      alignItems:'center',
                                      flexWrap:'wrap',
                                      marginTop:'1vh'}}>
                        <FlagIcon/>
                        <Grid>{"Event by "} </Grid>
                        <Grid sx={{color:'#8D8DAA',marginLeft:'0.2vw',"&:hover":{
                                          cursor:'pointer',
                                          textDecoration:'underline',
                                          

                                          }}}
                               onClick={goToProfile} >
                            {" Essadrati Hassan"}
                        </Grid>
                        
                </Grid>
                <Grid item xs={6} sx={{display:'flex',
                                      alignItems:'center',
                                      flexWrap:'wrap',
                                      marginTop:'1vh',
                                      fontSize:'1.2vw'}}>
                        <PeopleIcon/>
                        <span>100 participants</span>
                </Grid>
                <Typography variant='subtitle1' component='div' sx={{marginTop:'1.4vh',}} >
                       bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                </Typography>
                <Grid item container xs={12} justifyContent="right" sx={{margin:'1.2vh 0.4vw'}}>
                  <Button variant="contained" sx={{bgcolor:'#8D8DAA',
                                                    textTransform: 'none',
                                                    fontSize:'1.1vw',
                                                    padding:'1vh 0.5vw',
                                                    '&:hover':{
                                                        bgcolor:'#5D8DAA'
                                                    }
                                                    }}  
                                              target="_blank"
                                              href='http://www.google.com/'
                                              startIcon={<AddIcon />}>
                      Register Now
                  </Button>
                </Grid>
            </Grid> 
            {dialogIsOpen &&(
                <>
                <Grid container sx={{
                                    position: "absolute",
                                    top: "6vh",
                                    right: "6%",
                                    width:'auto',
                                }}
                                ref={dialogRef}> 
       <Paper elevation={8} sx={{width:'20vw'}}>
        <Typography variant='body1'
                    onClick={editePost}
                     fontSize='1.3vw' sx={{padding:'2vh 1.5vw','&:hover':{
            backgroundColor:'#f5f5f5',
            cursor:'pointer'
        } }}>
            Edite event
        </Typography>
        <Divider/>
        <Typography variant='body1' 
                    fontSize='1.3vw'
                    sx={{padding:'2vh 1.5vw','&:hover':{
                    backgroundColor:'#f5f5f5',
                    cursor:'pointer'
                    }}}
                    onClick={()=>deletEvent("123")}>
            Delete event
        </Typography>
        </Paper>
        </Grid>
        </>
            )}
        </Paper>
        <Dialog
                  fullWidth
                  open={editPostIsOpen}
                  >
                  <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                    <Grid container alignContent='center' justifyContent='center'>
                    Edit information
                    </Grid>
                    <IconButton
                          aria-label="close"
                          onClick={()=>setEditPostIsOpen(false)}
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
                      <Grid container>
                          <Grid item xs={6}>
                        <DateTimeField label="Start date" value={startDate}  onDateChange={onStartDateChange}/>
                          </Grid>
                          <Grid item xs={6}>
                        <DateTimeField label="End date" value={endDate}  onDateChange={onEndDateChange}/>
                        </Grid>
                    </Grid>
                    <InputField 
                              fullWidth
                              multiline
                              required
                              maxRows={3}
                              name="eventTitle"
                              label='title'
                              value={eventTitle}
                              onChange={(e)=>setEventTitle(e.target.value)}
                              placeholder='Event title'
                              inputProps={{
                                maxLength: 101,
                              }}
                              errorMessage={titleError}
                              />
                    <InputField 
                              fullWidth
                              multiline
                              required
                              name="game"
                              label='game'
                              value={game}
                              onChange={(e)=>setGame(e.target.value)}
                              placeholder='name of the game'
                              inputProps={{
                                maxLength: 101,
                              }}
                              errorMessage={gameError}
                              />
                     <InputField 
                              fullWidth
                              multiline
                              required
                              name="location"
                              label='location'
                              value={location}
                              onChange={(e)=>setLocation(e.target.value)}
                              placeholder='location of the event'
                              inputProps={{
                                maxLength: 101,
                              }}
                              errorMessage={locationError}
                              />
                    <InputField 
                              fullWidth
                              required
                              name="participants"
                              label='Participants'
                              type="number"
                              value={participantsNumber}
                              onChange={(e)=>setParticipantsNumber(e.target.value)}
                              placeholder='number of participants'
                              sx={{...numberInputStyle }}
                              errorMessage={participantsNumberError}
                              />
                    <InputField 
                              fullWidth
                              multiline
                              label='Description'
                              name="eventBody"
                              value={eventDesc}
                              sx={{marginBottom:'2vh',marginTop:'2vh'}}
                              onChange={(e)=>setEventDesc(e.target.value)}
                              placeholder='Event description' 
                              /> 
                    <InputField 
                              fullWidth
                              multiline
                              label='Link'
                              name="link"
                              value={link}
                              sx={{marginBottom:'2vh',marginTop:'2vh'}}
                              onChange={(e)=>setLink(e.target.value)}
                              placeholder='Link to register in the event' 
                              />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={()=>setEditPostIsOpen(false)}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleSavePost}>
                      Save
                    </Button>
                  </DialogActions>
              </Dialog>
        </>
    );
};

export default Event;



    
    
 
    