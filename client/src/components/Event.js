import React,{ useState, useRef, useEffect, useContext}from 'react';
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
import useOutsideClick from './../utils/useOutsideClick';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon  from '@mui/icons-material/Close';
import InputField from './../layout/InputField';
import FlagIcon from '@mui/icons-material/Flag';
import moment from 'moment';
import { Link } from 'react-router-dom';
import DateTimeField from '../layout/DateTimeField';
import { numberInputStyle } from '../utils/Style';
import { eventURL } from '../config/Config';
import axios from 'axios';
import EventContext from '../context/EventContext';
import ConfirmDelete from './ConfirmDelete';

const Event = (props) => {
    const {event,deletEvent,sx} = props;
    const {updateEvent,deleteEvent}=useContext(EventContext);
    //blog={id,userId,game,title,descpription,participantsNumber, location, startDate, endDate,link}
    const [eventTitle, setEventTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [game, setGame] = useState("game");
    const [gameError, setGameError] = useState("");
    const [participantsNumber, setParticipantsNumber] = useState("");
    const [participantsNumberError, setParticipantsNumberError] = useState("");
    const [location, setLocation] = useState("casablanca");
    const [locationError, setLocationError] = useState("");
    const [link , setLink] = useState("");
    const [linkError, setLinkError] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventDesc, setEventDesc] = useState("");
    const [isMe, setIsMe] = useState(true);
    const [editEventIsOpen, setEditEventIsOpen] = useState(false);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] =useState(false)
    const moreButtonRef=useRef(null);
    const dialogRef=useRef(null);

   useEffect(()=>{
     if(event){
        setEventTitle(event.title);
        setGame(event.game);
        setParticipantsNumber(event.participantsNumber);
        setLocation(event.location);
        setLink(event.link);
        setLocation(event.location);
        setStartDate(event.startDate);
        setEndDate(event.endDate);
        setEventDesc(event.description);
        setIsMe(event.userId!=="19923456789"); 
     }
   },[event])
   
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
      setEditEventIsOpen(true);
    }
    const handleSaveEvent= async ()=>{
      if(eventTitle.trim() === ''){
        setTitleError("Please enter a title");
        return;
      }
      setTitleError("");
      if(game.trim() === ''){
          setGameError("Please enter a game");
          return;
      }
      setGameError("");
  
      if(location.trim() === ''){
          setLocationError("Please enter a location");
          return;
      }
      setLocationError("");
  
      if(!participantsNumber){
          setParticipantsNumberError("Please enter a number");
          return;
      }
      setParticipantsNumberError("");
      
      if(link.trim() === ''){
          setLinkError("Please enter a link");
          return;
      }
      setLinkError("");
      const eventUpdated={
          startDate,
          endDate,
          userId:"5e9f8f8f8f8f8f8f8f8f8f8",
          title:eventTitle,
          game,
          location,
          participantsNumber,
          description:eventDesc,
          link
      }

        await axios.put(`${eventURL}/${event._id}`,eventUpdated).then(res=>{
          //console.log(res)
          updateEvent(res.data);
      }).catch(err=>{
             console.log(err)  
        })

        setEditEventIsOpen(false);

    }
    const handleCancelEditeEvent=()=>{
        setEventTitle(event.title);
        setGame(event.game);
        setParticipantsNumber(event.participantsNumber);
        setLocation(event.location);
        setLink(event.link);
        setLocation(event.location);
        setStartDate(event.startDate);
        setEndDate(event.endDate);
        setEventDesc(event.description);
        setEditEventIsOpen(false);
    }
    const handleDeleteEvent= async ()=>{
      await axios.delete(`${eventURL}/${event._id}`).then(res=>{
        console.log(res)
        deleteEvent(event._id)
    }).catch(err=>{
        console.log(err)
    })
    setIsConfirmDeleteOpen(false)
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
                <Grid item xs={12}>
                  <Typography variant="subtitle2" component="div" sx={{fontSize:'0.9vw',fontWeight:'bold'}}>
                  <span style={{color:'#B20600'}}>{moment(event.startDate).format('LLLL')}</span>
                        {` - `}
                  <span  style={{color:'#B20600'}}>{moment(event.endDate).format('LLLL')}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{fontSize:'1.7vw',fontWeight:'bold'}}>
                      {event.title}
                  </Typography>
                </Grid>
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
                      <span>{event.game}</span>
                </Grid>
                <Grid item xs={6}  sx={{display:'flex',
                                      alignItems:'center',
                                      flexWrap:'wrap'}}>
                        <PlaceIcon/>
                        <span>{event.location}</span>
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
                        <span>{event.participantsNumber} participants</span>
                </Grid>
                <Typography variant='subtitle1' component='div' sx={{marginTop:'1.4vh',}} >
                {event.description}
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
                                              href={event.link}
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
                    onClick={()=>{setIsConfirmDeleteOpen(true)}}>
            Delete event
        </Typography>
        </Paper>
        </Grid>
        </>
            )}
        </Paper>
        <Dialog
                  fullWidth
                  open={editEventIsOpen}
                  >
                  <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                    <Grid container alignContent='center' justifyContent='center'>
                    Edit information
                    </Grid>
                    <IconButton
                          aria-label="close"
                          onClick={handleCancelEditeEvent}
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
                              errorMessage={linkError}
                              sx={{marginBottom:'2vh',marginTop:'2vh'}}
                              onChange={(e)=>setLink(e.target.value)}
                              placeholder='Link to register in the event' 
                              />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleCancelEditeEvent}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleSaveEvent}>
                      Save
                    </Button>
                  </DialogActions>
              </Dialog>
              <ConfirmDelete    open={isConfirmDeleteOpen} 
                                onClose={()=>{setIsConfirmDeleteOpen(false)}}
                                onConfirm={()=>{handleDeleteEvent()}}
                                />
        </>
    );
};

export default Event;



    
    
 
    