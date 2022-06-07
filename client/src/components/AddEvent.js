import React, { useState,useContext } from "react";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton } from "@mui/material";
import InputField from "../layout/InputField";
import CloseIcon from '@mui/icons-material/Close';
import DateTimeField from "../layout/DateTimeField";
import { numberInputStyle } from "../utils/Style";
import axios from "axios";
import { eventURL } from "../config/Config";
import EventContext from './../context/EventContext';

const AddEvent = (props) => {
    const {open,handleClose} =props;
    const {addEvent} = useContext(EventContext);
    const [eventTitle, setEventTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [game, setGame] = useState("");
    const [gameError, setGameError] = useState("");
    const [participantsNumber, setParticipantsNumber] = useState("");
    const [participantsNumberError, setParticipantsNumberError] = useState("");
    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");
    const [link , setLink] = useState("");
    const [linkError, setLinkError] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventDesc, setEventDesc] = useState("");
console.log(startDate);
  const onStartDateChange=(newValue)=>{
    setStartDate(newValue);
}
const onEndDateChange=(newValue)=>{
  setEndDate(newValue);
}
  
  const handleAddEvent= async() => {
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
    const event={
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
    await axios.post(eventURL, event).then(res => {
        console.log(res.data);
        addEvent(res.data);
     }).catch(err => {
         console.log(err);
     })
     closeEventDialog();
  }
  const closeEventDialog = () => {
    handleClose();
    //clear all fields;
    setEventTitle("");
    setGame("");
    setParticipantsNumber("");
    setLocation("");
    setLink("");
    setEventDesc("");
    setStartDate(new Date());
    setEndDate(new Date());
    }
    return (
        <>
            <Dialog
                  fullWidth
                  open={open}
                 
                  >
                  <DialogTitle sx={{m:'0',p:'1.5vh 0.4vw' }}>
                   <Grid container justifyContent="center" alignItems="center">
                    Add Event
                    </Grid>
                    <IconButton
                          aria-label="close"
                          onClick={()=>closeEventDialog()}
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
                              name="eventDesc"
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
                              errorMessage={linkError}
                              />
                  </DialogContent>
                 {/* <DialogContentText dividers  sx={{padding:'0.5vh 1vw'}}>
                    
                     <InputField 
                              fullWidth
                              multiline
                              required
                              maxRows={3}
                              name="blogTitle"
                              label='title'
                              value={blogTitle}
                              onChange={handleBlogTitleChange}
                              placeholder='blog title'
                              inputProps={{
                                maxLength: 101,
                              }}
                              errorMessage={titleError}
                              />
                    <SelectInput 
                              options={["News","Reviews" ]}
                              error={blogTypeError} 
                              label='Type'
                              sx={{marginTop:'2vh',marginBottom:'0'}}
                              handleChange={handleBlogTypeChange}
                              />
                    {!isNews && (
                        <Grid sx={{padding:'0vh 0.5vw',marginTop:'0vh'}}>
                        <Typography variant='subtitle1' component="div" fontSize='1.2vw' sx={{cursor:'pointer'}}>
                        Rating
                        </Typography>
                        <Rating name="rating" value={blogRating}
                                precision={0.5}
                                max={10}
                                onChange={(event, newValue) => {
                                   setBlogRating(newValue);
                                }} />
                      <Typography color="error" marginLeft='0.3vw'>
                          {!blogRating && blogRatingError}
                      </Typography>
                        
                        </Grid>
                    )}
                    <InputField 
                              fullWidth
                              multiline
                              label='Content'
                              name="blogContent"
                              value={blogContent}
                              errorMessage={blogContentError}
                              sx={{marginBottom:'2vh',marginTop:'2vh'}}
                              onChange={handleBlogContentChange}
                              placeholder='Blog content' 
                              />
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
                    
                  </DialogContentText>*/}
                  <DialogActions>
                    <Button autoFocus onClick={()=>closeEventDialog()}>
                      Cancel
                    </Button>
                    <Button autoFocus onClick={handleAddEvent}>
                      Add
                    </Button>
                  </DialogActions>
              </Dialog>
        </>
    );
};

export default AddEvent;