import React, { useContext, useEffect,useState } from 'react';
import {Grid } from '@mui/material';
import Blog from './Blog';
import useWindowDimensions from '../utils/useWindowDimensions';
import axios from 'axios';
import { blogURL } from './../config/Config';
import BlogContext from './../context/BlogContext';

const Blogs = () => {
   // const [blogs,setBlogs] = useState([]);
    const {height}=useWindowDimensions();
    const {blogs} = useContext(BlogContext);
    /*useEffect(()=>{
        const fetchData = async () => {
            await axios.get(blogURL).then(res => {
                setBlogs(res.data);
              console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }
        fetchData();
    },[]);*/
    return (
        <Grid container alignItems="center" sx={{maxHeight:height-height/6, overflow:'auto' }} justifyContent="center">

           <Grid item xs={6}>
               {blogs ? (
                   <>
                   {blogs.map((blog,index)=>(
                        <Blog key={index} blog={blog}/>
                ))}
                   </>
               ):(
                     <>
                     <div>loading...</div>
                    </>
               )}
            </Grid>

        </Grid>
    );
};

export default Blogs;