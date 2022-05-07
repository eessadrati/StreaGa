
import React from "react";
import Video from "./Video";
import {Tabs,Tab,Box, IconButton, Grid, CssBaseline} from '@mui/material';

import PeopleIcon from '@mui/icons-material/People';
import { Link, Outlet } from "react-router-dom";
import Videos from "../Videos";
import Blogs from "../Blogs";
import useWindowDimensions from './../../utils/useWindowDimensions';

const Home = () => {
  const [value, setValue] = React.useState('all');
  const {height}=useWindowDimensions();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <CssBaseline/>
    <Grid container sx={{height:height,overflow:'hidden'}}>
      <Grid item xs={2} sx={{bgcolor:'red'}}>
        followed channels 
      </Grid>
      <Grid item xs={10} >
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{height:height/15}}>
        <Tab value="all" label="All" sx={{textTransform:'none',fontSize:'1.3vw'}}/>
        <Tab value="videos" label="videos" sx={{textTransform:'none',fontSize:'1.3vw'}} />
        <Tab value="blog" label="News & Reviews" sx={{textTransform:'none',fontSize:'1.3vw'}} />
      </Tabs>
      {value === 'all' && <>
        <div>test</div>
      </>}
      {value === 'videos' && <Videos/>}
      {value === 'blog' && <Blogs/>}
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
