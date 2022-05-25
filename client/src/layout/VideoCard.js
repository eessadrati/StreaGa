import { Grid, Paper, Typography, Divider } from "@mui/material";
import React from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import LiveIcon from "./LiveIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AvaTy from "./AvaTy";

const VideoCard = (props) => {
  const { video,posterStyle, sx,onClick, ...others } = props;
  //video={id:'',src:'/eye.webp',poster:'eye.webp',isLive:true,title:'title',channelId:'',channelName:'channel' channelProfile:'/eye.webp',views:2}
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
              style={{ height: "26vh",...posterStyle }}
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
          </Grid>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{ height: "12vh" }}
          >
            {video.title.length > 60 ? (
              <Grid container alignItems="center">
                <Grid>
                  {`${video.title.substring(0, 57)}...`}
                  {/** <ExpandMoreIcon alignItems='center'/> */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      filter: "blur(0.3px)",
                      WebkitFilter: "blur(0.3px)",
                    }}
                  >
                    <ExpandMoreIcon /> show more
                  </span>
                </Grid>
              </Grid>
            ) : (
              video.title
            )}
          </Typography>
        </Grid>
        {video.channelId && video.channelName  ? (

          <Grid
          
          sx={{
            margin: "1.4vh 0.4vw",
          }}
        >
        
          <AvaTy srcImg={video.channelProfile} name={video.channelName} />
        </Grid>
        ):null}
       
        <Divider />
      </Paper>
    </>
  );
};

export default VideoCard;
