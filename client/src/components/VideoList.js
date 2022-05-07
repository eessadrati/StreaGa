import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography, Divider, Avatar, Paper } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React,{useRef,useEffect,useState} from 'react';
import { hideScrollBar } from '../utils/Style';
import LiveIcon from './layout/LiveIcon';
import { deepOrange } from '@mui/material/colors';

const VideoList = (props) => {
    const {videoList,listTitle,sx} = props;
    const [endVideoList, setEndVideoList]=useState(false);
    const [beginningVideoList, setBeginnigVideoList]=useState(true);
    const videoListRef=useRef(null);
const handleScrollVideoLis =(e)=>{
    const end = e.target.scrollWidth - e.target.scrollLeft === e.target.clientWidth;
    const beginning=e.target.scrollLeft===0; 
    
   // const bottom = e.target.scrollHieght - e.target.scrollTop === e.target.clientHeight;
   // const bottom = e.target.scrollWidth - e.target.scrollTop === e.target.clientHeight;
    console.log(e.target.scrollLeft)
    if(end){
        //alert("bottom");
       setEndVideoList(true);
    }else{
        setEndVideoList(false);
    }
    if(beginning){
        setBeginnigVideoList(true);
    }else{
        setBeginnigVideoList(false)
    }
}

const handleRightButtonClick=()=>{
    const width=videoListRef.current.clientWidth;
    videoListRef.current.scrollLeft= videoListRef.current.scrollLeft+3*width/4;
}

const handleLeftButtonClick=()=>{
    const width=videoListRef.current.clientWidth;
    videoListRef.current.scrollLeft= videoListRef.current.scrollLeft-3*width/4;
}
    return (
        <Grid sx={{marginTop:'4vh' ,...sx}}>
                    <Typography variant='body1' component='div' fontWeight='bold'>
            {listTitle}
        </Typography>
        <Grid container  >
<Grid item sx={{position:'relative',overflow:'hidden'}}>
            <ImageList
  sx={{
    gridAutoFlow: "column",
    gridAutoColumns: "auto",
    ...hideScrollBar,
    margin:'0vh',
    padding:0

  }}
  onScroll={(e)=>handleScrollVideoLis(e)}
  ref={videoListRef}
>
         {!beginningVideoList && ( 
             <IconButton onClick={handleLeftButtonClick} sx={{'&:hover':{bgcolor:'#eee',opacity:0.3},margin:0,fontSize:'1.3vw',zIndex:2,bgcolor:'#fff',position:'absolute',left:'0vw',bottom:'50%'}}>
                <KeyboardArrowLeftIcon/>
            </IconButton> 
            )} 


  {videoList.map((video) => (
    <Paper direction='column'  sx={{marginRight:0.5, bgcolor:'white'}}>
    <Grid   sx={{cursor:'pointer'}}>
      <Grid sx={{position:'relative'}}>
      <img src={"/"+video.poster} alt="video" style={{height:'26vh'}}/>
      
            <PlayCircleFilledIcon sx={{margin:0,color:'#fff',fontSize:'2.8vw',position:'absolute',left:'45%',bottom:'45%'}}/>
        {video.isLive && (
            <Grid sx={{position:'absolute', right:0, top:0}}>
                <LiveIcon />
            </Grid>
        )}
      </Grid>
      
          <Typography variant='subtitle1' component='div' sx={{height:'12vh'}}>  
                {
                    video.title.length >60 ? (
                        <Grid container alignItems='center'  >
                         <Grid  >
                         {`${video.title.substring(0,57)}...`}
                        {/** <ExpandMoreIcon alignItems='center'/> */}
                        <span style={{display: "flex", alignItems: 'center',filter: 'blur(0.3px)',WebkitFilter: 'blur(0.3px)'
  }}><ExpandMoreIcon /> show more</span>
                         </Grid>
                        </Grid>
                    ) : video.title
                } 
          </Typography>
          </Grid>
      <Grid container sx={{
                        padding:"1.4vh 0.4vw",
                        alignItems:'center'
                        }}
                        >
        <Avatar alt="profile" sx={{ bgcolor: deepOrange[500],cursor:'pointer' }} >N</Avatar>
        <Grid sx={{paddingLeft:'0.6vw'}}>
        <Typography variant='body1' fontSize='1.2vw' sx={{cursor:'pointer'}}>channel name</Typography>
        </Grid>
      </Grid>
      </Paper>

    
  ))}
  {!endVideoList &&(
        <IconButton onClick={handleRightButtonClick} sx={{'&:hover':{bgcolor:'#eee',opacity:0.3},margin:0,fontSize:'1.3vw',bgcolor:'#fff',zIndex:2,position:'absolute',right:'0vw',bottom:'50%'}}>
            <ChevronRightIcon/>
        </IconButton>
    )}
</ImageList>

</Grid>
</Grid>
<Divider/>
        </Grid>
    );
};

export default VideoList;