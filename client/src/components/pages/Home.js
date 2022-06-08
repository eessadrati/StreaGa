import React,{useContext, useState} from "react";
import Video from "./Video";
import {Tabs,Tab,Box, IconButton, Grid, CssBaseline, Typography, Divider, Paper} from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import { Link, Outlet } from "react-router-dom";
import Videos from "../Videos";
import Blogs from "../Blogs";
import HomeIcon from '@mui/icons-material/Home';
import useWindowDimensions from './../../utils/useWindowDimensions';
import Title from './../../layout/Title';
import { hideScrollBar } from "../../utils/Style";
import AvaTy from './../../layout/AvaTy';
import Events from './../Events';
import AuthContext from './../../context/AuthContext';


const Home = () => {
  const [value, setValue] = useState('home');
  const {user, userId,loggedIn}=useContext(AuthContext);
  console.log(user);
  console.log(userId);
  console.log(loggedIn);
  console.log("yesss")
  const {height}=useWindowDimensions();
  const followedChannels = [{srcImg:'/eye.webp',name:"channel1",id:"1"},{srcImg:'',name:"channel2",id:"2"},{srcImg:'/eye.webp',name:"channel3",id:"3"}];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //console.log(user);
  return (
    <>
    <CssBaseline/>
    <Grid container direction="row" sx={{ overflow:'hidden'}}>
      <Grid item xs={2} sx={{height:height,overflow:'auto',...hideScrollBar}}>
        <Paper variant="outlined"  sx={{bgcolor:'background.secondary',padding:'1vh 0.4vw'}}>
        <Title title="Followed channels" />
        <Divider/>
        {user &&  user.followedChannels>0 ? (
          <>
          {user.followedChannels.map((channel,index)=>(
          <AvaTy srcImg={channel.srcImg} name={channel.name} key={index} sx={{'&:hover':{
                                                  cursor:'pointer',
                                                  backgroundColor:'#f5f5f5'
                                                }}}/>
        ))}
        </>
        ):(
          <div>no channels</div>
        )}
        </Paper>
      </Grid>
      <Grid item xs={10} >
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{height:height/15}}
        >
        <Tab value="home" label={<>{getIcon("home") }home</>}  iconPosition="start" sx={{textTransform:'none',fontSize:'1.5vw'}} />
        <Tab value="blog" label={<>{getIcon("blog")}News & Reviews</>} iconPosition="start"  sx={{textTransform:'none',fontSize:'1.3vw'}} />
        <Tab value="event" label={<>{getIcon("event")} Events</>} iconPosition="start"  sx={{textTransform:'none',fontSize:'1.3vw'}} />
      </Tabs>
      {value === 'home' && <Videos/>}
      {value === 'blog' && <Blogs/>}
      {value === 'event' && <Events/>}
      </Grid>
      
    </Grid>
   {/**  <Box sx={{ width: '100%',bgcolor:'white' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
       
      >
        <Tab
          value="all"
          label="All"
          wrapped
          
        />
        <Tab value="videos" label="videos" 
              
              />
        <Tab value="blog" label="News & Reviews"
              
               />
      </Tabs>
      {value === 'all' && <>
        <div>test</div>
      </>}
      {value === 'videos' && <Videos/>}
      {value === 'blog' && <Blog/>}

     
    </Box>*/}
    
    </>
  );
};

export default Home;


const getIcon=(type)=>{
  if(type==="blog"){
    return(
      <>
        <FeedIcon/>
      </>
    )
  }else if(type==="event"){
    return (
      <>
        <EventIcon/>
      </>
    )
  }else {
    return (
      <>
        <HomeIcon/>
      </>
    )
  }
  
}

