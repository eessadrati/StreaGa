import React,{ useState }from 'react';
import { Avatar, Button, Divider, Grid, IconButton, Paper, styled, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LikeButton from '../layout/LikeButton';
import InputMessage from './../layout/InputMessage';
import SendIcon from '@mui/icons-material/Send';
import AvatarProfile from './../layout/AvatarProfile';

const Blog = (props) => {
    const {blog,sx} = props;
    const [likes, setLikes] = useState(785);
    const [isLiked, setIsLiked] = useState(false);
    const handleMoreClick = () => {
        console.log('more click');
    }
    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(l=>l-1);
        } else {
            setLikes(l=>l+1);
        }
        setIsLiked(!isLiked);
    }
    const handleMessage=(message)=>{
        console.log(message);
    }

    return (
        <>
        <Paper elevation={2} sx={{bgcolor:'#fff',margin:'3vh 0vw',padding:'1vh 0.1vw', paddingTop:'0vh',...sx}}>
         <Grid container >
            <Grid item  container xs={10} sx={{
                        padding:"1.4vh 0.4vw",
                        alignItems:'center'
                        }}>
             <AvatarProfile srcImg={""} name={"name"} />
            <Grid sx={{paddingLeft:'0.6vw'}}>
                <Typography variant='body1' fontSize='1.6vw' sx={{cursor:'pointer'}}>channel name</Typography>
            </Grid>
            <Grid sx={{paddingLeft:'0.6vw', fontSize:'0.8vw'}}>few seconds ago</Grid>
            </Grid>
            <Grid item container xs={2} sx={{}} alignItems='center' justifyContent='right' paddingRight='0.8vw'>
                <IconButton onClick={handleMoreClick}>
                    <MoreVertIcon/>
                </IconButton>
              </Grid>
         </Grid>
            <Grid container
                        >
            <Typography variant='subtitle1' component='div'  sx={{
                        padding:"1.4vh 0.4vw",
                        alignItems:'center'
                        }}>
                       bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
            </Typography>
            </Grid> 
         
            <Divider sx={{marginTop:'2vh'}}/>
         <Grid container item  sx={{paddingLeft:'0.3vw', paddingBottom:'0.5vh'}} alignItems="center" justifyContent="left"
                                             >
                <Grid item container xs={9}>
                <LikeButton isLiked={isLiked} onClick={handleLikeClick}/>
                 
                <Typography variant='body1' fontSize='1.1vw' sx={{}}>
                    {isLiked ? `you and ${likes} others`:`${likes} people `}
                </Typography>
                </Grid>
              </Grid>
           
        <Divider sx={{marginBottom:'2vh'}}/>
         <Grid  sx={{position:'relative'}}>
                <InputMessage handleMessage={handleMessage}
                              StartAdornement={startAdornement}
                              EndAdornement={endAdornement}
                              inputStyle={{borderRadius:'8px',border:'1px solid #ccc'}}
                              sx={{margin:'0.6vh 0vh'}}
                              placeholder='Write a comment...'
                              size="small"
                              />
            </Grid>
        </Paper>
        </>
    );
};

export default Blog;

const startAdornement=()=>{
    return(
        <Grid container 
        alignItems="center"
        justifyContent="center" >
            <Grid item  >
            <Avatar alt="profile" sx={{ bgcolor: deepOrange[500],cursor:'pointer' }}  style={{alignSelf: 'center'}}>N</Avatar>
            </Grid>
        </Grid>
    )
}
const endAdornement=(props)=>{
    
    return(
        <Grid {...props}>
                            
                            <Button variant='outlined'  sx={{fontSize:'0.8vw',padding:'0.8vh',margin:'0.4vh', color:'#000'}} endIcon={<SendIcon />}>Comment</Button>
                            
        </Grid>
        )
    } 
    
    
 
    