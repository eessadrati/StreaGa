import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';

const LikeButton = (props) => {
    const {isLiked,onClick}=props;
   
    return (
        <>
                
                 { isLiked ? <FavoriteIcon onClick={onClick} sx={{ fontSize: '2.5vw',cursor:'pointer'}}/> 
                           : <FavoriteBorderIcon onClick={onClick} sx={{ fontSize: '2.5vw',cursor:'pointer' }}/>}
            
              </>
    );
};

export default LikeButton;