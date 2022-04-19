import React, { useRef, useState, useEffect } from "react";
import "./livePlayer.css";
import "./videoPlayer.css";
import useOutsideClick from "./utils/useOutsideClick";
import useInsideClick from "./utils/useInsideClick";
import Loader from './loader/Loader';
const LivePlayer = (props) => {
  const videoRef = useRef(null);
  const settingsBtnRef = useRef(null);
  const qualityRef = useRef(null);
  const autoPlayRef = useRef(null);
  const pausePlayRef = useRef(null);
  const bigPausePlayRef = useRef(null);
  const controlsRef = useRef(null);
  const volumeRef = useRef(null);
  const videoPlayerRef = useRef(null);
  const fullScreenRef = useRef(null);
  const settingsRef = useRef(null);
  const loaderRef = useRef(null);
  const errorRef = useRef(null);
  const [volumeRange, setVolumeRange] = useState(80);
  const [volumeIcon, setVolumeIcon] = useState("volume_up");
  const [playing, setPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState("0:00:00");
  const [currentTime, setCurrentTime] = useState(0);
  const [videoQuality, setVideoQuality] = useState("Auto");
  const [video, setVideo] = useState(props.src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const srcQualities =props.srcQualities ? props.srcQualities : null;
  

  useOutsideClick(settingsRef, settingsBtnRef, () =>
    settingsRef.current.classList.remove("active")
  );
  
  useOutsideClick(qualityRef, settingsRef, () =>
    qualityRef.current.classList.remove("active")
  );

  const videoHandler = (control) => {
    videoRef.current.volume = volumeRange / 100;
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleOnLoadedData = () => {
    //videoHandler("play");
    setLoading(false);
  };

  const handleTimeUpdated = () => {
   // setCurrentTime(videoRef.current?.currentTime);
   const time=videoRef.current?.currentTime
  /* Math.floor(currentTime / 60) +
                  ":" +

                  ("0" + Math.floor(currentTime % 60)).slice(-2)*/
 
    setVideoTime(`${Math.floor(time / 3600)}:${("0"+Math.floor((time % 3600)/60)).slice(-2)}:${("0"+Math.floor((time % 3600)%60)).slice(-2)}`);
  };
  

  // change volume
  const handleVolume = (e) => {
    const range = e.target.value;
    setVolumeRange(range);
    videoRef.current.volume = range / 100;
    if (range === 0 || range === "0") {
      setVolumeIcon("volume_off");
    } else if (range < 40) {
      setVolumeIcon("volume_down");
    } else {
      setVolumeIcon("volume_up");
    }
  };

  const muteVolume = () => {
    if (volumeRange === 0 || volumeRange === "0") {
      setVolumeRange(80);
      setVolumeIcon("volume_up");
    } else {
      setVolumeRange(0);
      setVolumeIcon("volume_off");
    }
  };

  

  
  // Full screen function
  const handleFullScreen = () => {
    if (!videoPlayerRef.current.classList.contains("openFullScreen")) {
      videoPlayerRef.current.classList.add("openFullScreen");
      fullScreenRef.current.innerHTML = "fullscreen_exit";
      videoPlayerRef.current.requestFullscreen();
      //videoRef.current.requestFullscreen();
    } else {
      videoPlayerRef.current.classList.remove("openFullScreen");
      fullScreenRef.current.innerHTML = "fullscreen";
      document.exitFullscreen();
    }
  };

  

  const handleOnVideoEnded = () => {
    if (autoPlayRef.current.classList.contains("active")) {
      videoHandler("play");
    } else {
      pausePlayRef.current.innerHTML = "replay";
      bigPausePlayRef.current.innerHTML = "replay";
    }
  };

  //picture in picutre
  const handle_picture_in_picutre = () => {
    videoRef.current.requestPictureInPicture();
  };

  //settings
  const handleSettingsBtn = () => {
    settingsRef.current.classList.toggle("active");
    settingsBtnRef.current.classList.toggle("active");
  };

  //quality settings
  const handleQualityBtn = () => {
    settingsRef.current.classList.remove("active");
    qualityRef.current.classList.add("active");
  };

  const handleQuality = (e, quality) => {
    const qualities = document.querySelectorAll("#quality li");
    qualities.forEach((event) => {
      event.classList.remove("active");
    });
    e.target.classList.add("active");
    //change quality
    setVideoQuality(quality === "1" ? "Auto" : quality);
    if (quality === "1") {
      setVideo(props.src);
    } else {
      srcQualities.forEach((src) => {
        if (src.label === quality) {
          setVideo(src.src);
        }
      });
    }
  };

  const handleQualityTitle = () => {
    settingsRef.current.classList.add("active");
    qualityRef.current.classList.remove("active");
  };

  // blob url
  /*let xhr = new XMLHttpRequest();
    xhr.open("GET","/video2.mp4");
    xhr.responseType = "arraybuffer";
    xhr.onload = (e)=>{
    let blob = new Blob([xhr.response]);
    let url = URL.createObjectURL(blob);
    videoRef.current.src = url;
  }
  xhr.send();*/

  // Hide and show controls on Mouse move
  const handleOnMouseLeaveVideo = () => {
    if (!videoRef.current.paused) {
      if (settingsBtnRef.current.classList.contains("active")) {
        controlsRef.current.style.display = "block";
      } else {
        controlsRef.current.style.display = "none";
      }
    } else {
      controlsRef.current.style.display = "block";
    }
  };

  const handleOnMouseOverVideo = () => {
    controlsRef.current.style.display = "block";
  };
  
  //handle controls display
  useEffect(() => {
    let timeout = 0;
    const vid = videoRef.current;
    const vidplayer = videoPlayerRef.current;
    const displayOpa = (e) => {
      controlsRef.current.style.opacity = 1;
      vidplayer.style.cursor = "default";
      clearInterval(timeout);
      if (!vid.paused) {
        if (!controlsRef.current.contains(e.target)) {
          timeout = setInterval(() => {
            controlsRef.current.style.opacity = 0;
            vidplayer.style.cursor = "none";
          }, 5000);
        }
      }
    };
    vidplayer.addEventListener("mousemove", (e) => displayOpa(e));

    return () => {
      vidplayer.removeEventListener("mousemove", (e) => displayOpa(e));
    };
  }, []);

  useInsideClick(videoPlayerRef, controlsRef, () => {
    if (videoRef.current.paused) {
      videoHandler("play");
    } else {
      videoHandler("pause");
      controlsRef.current.style.opacity = 1;
       videoPlayerRef.current.style.cursor = "default";
    }
  });

//handle volume
  useEffect(() => {
    videoRef.current.volume = volumeRange / 100;
  }, [volumeRange]);

  //handle keyboard controls
  useEffect(() => {
    let timer = {
      timerUp: null,
      timerDown: null,
    };
    const handleKeyBoard = (e) => {
      if (e.target === document.body) {
        e.preventDefault();
        let volume = videoRef.current.volume;
        switch (e.key) {
          //play and pause video with spacebar key and k key
          case " ":
          case "k":
            if (videoRef.current.paused) {
              videoRef.current.play();
              setPlaying(true);
            } else {
              controlsRef.current.style.opacity = 1;
              videoPlayerRef.current.style.cursor = "default";
              videoRef.current.pause();
              setPlaying(false);
            }
            break;

          //fullscreen with f key
          case "f":
            if (!videoPlayerRef.current.classList.contains("openFullScreen")) {
              videoPlayerRef.current.classList.add("openFullScreen");
              fullScreenRef.current.innerHTML = "fullscreen_exit";
              videoPlayerRef.current.requestFullscreen();
            } else {
              videoPlayerRef.current.classList.remove("openFullScreen");
              fullScreenRef.current.innerHTML = "fullscreen";
              document.exitFullscreen();
            }
            break;
          
          //mute with m key
          case "m":
            controlsRef.current.style.opacity = 1;
            videoPlayerRef.current.style.cursor = "default";
            if (volume === 0 || volume === "0") {
              setVolumeRange(80);
              setVolumeIcon("volume_up");
            } else {
              setVolumeRange(0);
              setVolumeIcon("volume_off");
            }
            break;

          //volume up with ArrowUp key
          case "ArrowUp":
            controlsRef.current.style.opacity = 1;
            videoPlayerRef.current.style.cursor = "default";
            clearInterval(timer.timerUp);
            volumeRef.current.style.display = "flex";
            timer.timerUp = setInterval(() => {
              volumeRef.current.style.display = "none";
            }, 1000);
            const volumeUp = volume + 0.05;
            if (volumeUp > 0) {
              setVolumeIcon("volume_down");
            }
            if (volumeUp > 0.4) {
              setVolumeIcon("volume_up");
            }
            if (volumeUp < 1) {
              setVolumeRange((vol) => vol + 5);
            } else {
              setVolumeRange(100);
            }
            break;

          //volume down with arrowDown key
          case "ArrowDown":
            controlsRef.current.style.opacity = 1;
            videoPlayerRef.current.style.cursor = "default";
            volumeRef.current.style.display = "flex";
            clearInterval(timer.timerDown);
            timer.timerDown = setInterval(() => {
              volumeRef.current.style.display = "none";
            }, 1000);
            const volumeDown = volume - 0.05;
            if (volumeDown < 0.4) {
              setVolumeIcon("volume_down");
            } else {
              setVolumeIcon("volume_up");
            }
            if (volumeDown > 0) {
              setVolumeRange((vol) => vol - 5);
            } else {
              setVolumeIcon("volume_off");
              setVolumeRange(0);
            }
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener("keydown", (e) => handleKeyBoard(e));

    return () => {
      document.removeEventListener("keydown", (e) => handleKeyBoard(e));
    };
  }, []);

  //handle esc key to exit fullscreen mode
  useEffect(() => {
    const exitHandler = () => {
      if (!document.fullscreenElement) {
        videoPlayerRef.current.classList.remove("openFullScreen");
        videoRef.current.style.width = "100%";
      }
    };
    document.addEventListener("fullscreenchange", exitHandler);
    return () => {
      document.removeEventListener("fullscreenchange", exitHandler);
    };
  }, []);

  const handleOnVideoError = () => {
    setLoading(false);
    setError(true);


  };
  const handleReloadVideo = () => {
    setLoading(true);
    setError(false);
    videoRef.current.load();
  };

useEffect(() => {
 if(loading){
  loaderRef.current.style.zIndex = 100;
 }else{
  loaderRef.current.style.zIndex = -1;
 }

},[loading]);

useEffect(() => {
  if(error){
    errorRef.current.style.zIndex = 100;
  }else{
    errorRef.current.style.zIndex = -1;
  }
 
 },[error])
  return (
    <div  className="live">
    
    <div
      className="app"
      ref={videoPlayerRef}
      onMouseLeave={handleOnMouseLeaveVideo}
      onMouseEnter={handleOnMouseOverVideo}>
    <div className="loader-container" ref={loaderRef}><Loader/></div>
    <div className="err-container" ref={errorRef}>
      <span className="icon">
        <i className="material-icons replay" title="Reload" onClick={handleReloadVideo}>replay</i>
    </span>
    <div className="err-text">
      <span className="icon">
          <i className="material-icons error" >error</i>
      </span>
      <p>Something went wrong</p>
    </div>
    </div>
      <video
        ref={videoRef}
        className="video"
        src={video}
        onPlay={() => videoHandler("play")}
        onPause={() => videoHandler("pause")}
        onLoadedData={handleOnLoadedData}
        onTimeUpdate={handleTimeUpdated}
        onEnded={handleOnVideoEnded}
        onError={handleOnVideoError}
      ></video>

      
        <div className="play-pause-video">
          {playing ? (
            <span className="icon" >
              <i className="material-icons pause" ref={bigPausePlayRef}>
                pause
              </i>
            </span>
          ) : (
            <span className="icon">
              <i className="material-icons play" ref={bigPausePlayRef}>
                play_arrow
              </i>
            </span>
          )}
        </div>
      
      <div className="volume-control" ref={volumeRef}>
        <span className="volume-control-value">{`${volumeRange}%`}</span>
        <span className="icon">
          <i className="material-icons">{volumeIcon}</i>
        </span>
      </div>
      <div ref={controlsRef} className="all-controls">
        
        <div className="controls-list">
          <div className="controls-left">
            {playing ? (
              <span className="icon" onClick={() => videoHandler("pause")}>
                <i className="material-icons pause" ref={pausePlayRef}>
                  pause
                </i>
              </span>
            ) : (
              <span className="icon" onClick={() => videoHandler("play")}>
                <i className="material-icons play" ref={pausePlayRef}>
                  play_arrow
                </i>
              </span>
            )}
            <span className="icon">
              <i className="material-icons volume" onClick={muteVolume}>
                {volumeIcon}
              </i>
              <input
                type="range"
                min="0"
                max="100"
                value={volumeRange}
                className="volume_range"
                onChange={handleVolume}
              />
            </span>
            <div className="timer">
              <span className="current">
                {videoTime}
              </span>
            </div>
            <div className="live-icon">
              <span className="icon"></span>
              Live
             </div>
          </div>
          <div className="watching">
          </div>
          <div className="controls-right">
            <span className="icon" onClick={handleSettingsBtn}>
              <i className="material-icons settingsBtn" ref={settingsBtnRef}>
                settings
              </i>
            </span>
            <span className="icon" onClick={handle_picture_in_picutre}>
              <i className="material-icons picture_in_picutre">
                picture_in_picture_alt
              </i>
            </span>
            <span className="icon" onClick={handleFullScreen}>
              <i className="material-icons " ref={fullScreenRef}>fullscreen</i>
            </span>

            <div ref={settingsRef} id="settings">
              <div className="content" onClick={handleQualityBtn}>
                <div className="center-content">
                  <span className="icon">
                    <i className="material-icons tune">tune </i>
                  </span>
                  <span>Quality</span>
                </div>
                <div className="value">
                  <div className="center-content">
                    <span style={{ fontSize: "0.9vw" }}>{videoQuality}</span>
                    <span
                      className="icon"
                      style={{ margin: "0px", padding: "0px" }}
                    >
                      <i className="material-icons navigate_next">navigate_next</i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="quality" ref={qualityRef}>
              <div className="content" onClick={handleQualityTitle}>
                <div className="center-content">
                  <span className="icon" style={{ margin: "0px", padding: "0px" }}>
                    <i
                      className="material-icons "
                      style={{
                        fontSize: "1.8vw",
                      }}
                    >
                      navigate_before
                    </i>
                  </span>
                  <span style={{ fontSize: "1vw" }}> Quality </span>
                </div>
              </div>
              <ul>
                {srcQualities ? (
                  <>
                    {srcQualities.map((src, index) => (
                      <li
                        key={index}
                        onClick={(e) => {
                          handleQuality(e, src.label);
                        }}
                      >
                        {src.label}
                      </li>
                    ))}
                    <li
                      className="active"
                      onClick={(e) => {
                        handleQuality(e, "1");
                      }}
                    >
                      Auto
                    </li>
                  </>
                ) : (
                  <li> Unavailable</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default LivePlayer;
