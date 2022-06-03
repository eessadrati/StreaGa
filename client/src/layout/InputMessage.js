import React,{useState, useRef,useEffect} from 'react';
import InputField from './InputField';
import  SentimentDissatisfiedIcon  from '@mui/icons-material/SentimentDissatisfied';
import useOutsideClick from './../utils/useOutsideClick';
import { Grid, IconButton } from '@mui/material';
import CloseIcon  from '@mui/icons-material/Close';
import Picker  from 'emoji-picker-react';
import  SendIcon from '@mui/icons-material/Send';

const InputMessage = (props) => {
    const {StartAdornement,EndAdornement,
            handleMessage,name,
            placeholder,errorMessage, label,length,sx,inputStyle, ...others } = props;
    
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const emojiPickerRef= useRef(null);
  const btnEmojiPickerRef=useRef(null);
  const messageRef=useRef(null);
  useEffect(() => {
    const message=messageRef.current.value;
    if(chosenEmoji){
    messageRef.current.value=message+chosenEmoji.emoji
    }
    
  },[chosenEmoji])
    useOutsideClick(emojiPickerRef,btnEmojiPickerRef,()=>{setEmojiPickerOpen(false)});
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
      };
    const handleSendMessage=()=>{
      if(messageRef.current.value.trim().length>0){
        handleMessage(messageRef.current.value);
        
      }
      messageRef.current.value = "";

    }
    const handleInputEnter = (e)=>{
     
        if(e.key==="Enter"){
           e.preventDefault()
          //call send message function
          handleSendMessage()
          e.target.blur()
          e.target.focus()
        }
      }
    return (
        <>
        <Grid sx={{zIndex:10, position:'absolute', bottom:"80%",right:0}}>
        {emojiPickerOpen && <Grid  ref={emojiPickerRef}  >
                <Grid container justifyContent="flex-end" sx={{paddingRight:"0.4vw"}}>
                    <IconButton  onClick={()=>setEmojiPickerOpen(false)}>
                      <CloseIcon/>
                    </IconButton>
                </Grid>
                <Picker pickerStyle={{width:'20vw',height:'35vh',zIndex:20}} onEmojiClick={onEmojiClick} />
                </Grid>
                 }
        </Grid>
        <Grid container sx={{...sx}} alignItems="center">
            <Grid item >
                     {StartAdornement && <StartAdornement/>}  
            </Grid>
            <Grid item  sx={{flexGrow: 1}}>
            <InputField 
                              fullWidth
                              multiline
                              name={name}
                              sx={{marginTop:'0vh',...inputStyle}}
                              inputRef={messageRef}
                              placeholder={placeholder} 
                              onKeyDown={(e)=>{handleInputEnter(e)}}
                              InputProps={{
                                            endAdornment:
                                             <SentimentDissatisfiedIcon
                                              sx={{cursor:'pointer'}}
                                              ref={btnEmojiPickerRef}
                                              onClick={()=>setEmojiPickerOpen(prv=>!prv)} />}}
                              {...others}
                              />
                              
            </Grid>
         <Grid item>
             {EndAdornement &&<EndAdornement onClick={handleSendMessage}/>}          
          </Grid>
        </Grid>
        

        </>
    );
};

export default InputMessage;