import React from 'react';
import { Avatar } from '@mui/material';

const AvatarProfile = (props) => {
    const {srcImg,name,sx, ...others } = props;
    return (
        <>
            {srcImg ? (
                    <Avatar alt="profile" src={srcImg} sx={{cursor:'pointer',...sx}} {...others}/>
                ):(
                    <Avatar alt="profile" sx={{ bgcolor:'#6A67CE',cursor:'pointer',...sx}} {...others}>{name.slice(0,2)}</Avatar>
                )}
        </>
    );
};

export default AvatarProfile;