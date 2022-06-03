import { Grid, Paper, Typography, Divider } from "@mui/material";
import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import LiveIcon from "./LiveIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AvaTy from "./AvaTy";
import moment from "moment";
import { convertSeconds, convertToReadableFormat } from "../utils/Functions";

const VideoCard = (props) => {
  const { video,posterStyle, sx,onClick, ...others } = props;
  //video={id:'',src:'/eye.webp',poster:'eye.webp',isLive:true,title:'title',channelId:'',channelName:'channel' channelProfile:'/eye.webp',views:2,time:"1250", createdAt:'2020-01-01 00:00:00'}
  return (
    <>
      <Paper
        direction="column"
        sx={{ marginRight: 0.5, bgcolor: "#fff", paddingBottom:'0.3vh',...sx }}
        {...others}
      >
        <Grid sx={{ cursor: "pointer" }} onClick={onClick}>
          <Grid sx={{ position: "relative" }}>
            <img
              src={"/" + video.poster}
              alt="video"
              style={{ height: "28vh",...posterStyle }}
            />

            <PlayCircleFilledIcon
              sx={{
                margin: 0,
                color: "#fff",
                fontSize: "2.8vw",
                position: "absolute",
                left: "45%",
                bottom: "45%",
              }}
            />
            {video.isLive && (
              <Grid sx={{ position: "absolute", right: 0, top: 0 }}>
                <LiveIcon />
              </Grid>
            )}
            <Grid sx={{ position: "absolute", right: 0, bottom: 0 }}>
                <Grid sx={{ fontSize:'1vw',
                            margin:'1.6vh 0.3vw',
                            padding:'0.1vh 0.4vw',
                            bgcolor:'rgba(15, 14, 14, 0.4)',
                            color:'#fff'
                        }}>
                        {convertSeconds(video.time)}
                </Grid>
              </Grid>
          </Grid>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{height:'8vh',paddingLeft:'0.3vw'}}
          >
            {video.title.length > 70 ? (
              <>
                  {`${video.title.substring(0, 68)}...`}
              </>
            ) : (
              video.title
            )}
          </Typography>
          </Grid>
          <Grid container sx={{paddingTop:'1vh',paddingLeft:'0.3vw'}}>
            <Grid item  sx={{fontSize:'1vw',paddingRight:'1vw'}}>{convertToReadableFormat(video.views)} views</Grid>
            <Grid item sx={{fontSize:'1vw'}}><CircleIcon sx={{fontSize:'5px',color:'rgba(15, 15, 15, 0.8)',}}/> {video.isLive ? "Streaming now":`${moment(video.createdAt).fromNow()}`}</Grid>
          </Grid>
        
        <Grid container sx={{}}>
        {video.channelId && video.channelName  ? (

          <Grid
          
          sx={{
            margin: "0.5vh 0.3vw",
          }}
        >
        
          <AvaTy srcImg={video.channelProfile} name={video.channelName} />
        </Grid>
        ):null}
        </Grid>
        <Divider />
      </Paper>
    </>
  );
};

export default VideoCard;
