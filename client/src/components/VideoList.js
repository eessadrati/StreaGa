import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Typography, Divider, Avatar, Paper } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React,{useRef,useEffect,useState} from 'react';
import { hideScrollBar } from '../utils/Style';
import LiveIcon from '../layout/LiveIcon';
import { deepOrange } from '@mui/material/colors';
import { bgcolor } from '@mui/system';
import Title from './../layout/Title';
import VideoCard from '../layout/VideoCard';

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
        <Grid >
        <Paper elevation={3}  sx={{bgcolor:'#fff',margin:'3vh 0vw',padding:'1vh 0.4vw',...sx}}>
            <Title title={listTitle}/>
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


  {videoList.map((video,index) => (
    <VideoCard video={video} key={index}/>
      
    
  ))}
  {!endVideoList &&(
        <IconButton onClick={handleRightButtonClick} sx={{'&:hover':{bgcolor:'#eee',opacity:0.3},margin:0,fontSize:'1.3vw',bgcolor:'#fff',zIndex:2,position:'absolute',right:'0vw',bottom:'50%'}}>
            <ChevronRightIcon/>
        </IconButton>
    )}
</ImageList>

</Grid>
</Grid>

{/** <Divider sx={{margin:'2vh 0', bgcolor:'#000'}}/>*/}
</Paper>
        </Grid>
    );
};

export default VideoList;