import React, { useContext, useState,useEffect } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import Login from "@mui/icons-material/Login";
import { Grid } from "@mui/material";
import { userURL } from './../../config/Config';
import axios from "axios";
import AuthContext from './../../context/AuthContext';


export default function AccountMenu() {
  const {loggedIn,getCurrentUser,setLoggedIn,user}=useContext(AuthContext)
  //const [user, setUser]=useState("");
  console.log(user.profileImg)
console.log("user")
//console.log(localStorage.getItem('user'))
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate= useNavigate()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
useEffect(()=>{
 if(loggedIn){
 const us= JSON.parse((localStorage.getItem('user')))
   console.log(us.username)
  // setUser(us)
 }
},[loggedIn])
 
const handleLogOut=  ()=>{
  localStorage.removeItem('userId');
  localStorage.removeItem('user');
 // getCurrentUser();
 setLoggedIn(false);
  navigate("/login")
}
const handleLogIn=()=>{
  navigate("/login")
}

  return (
    <>
      {!loggedIn  ? (
        <IconButton sx={{color:'white'}} onClick={handleLogIn}>
        Login {" "}<Login />
         </IconButton>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 10,
              sx: {...styles },
              
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            
          >
            <Grid >
{/**src={user.profileImg.url }  */}
              <MenuItem  component={Link} to={`/profile/${user.username}`}   >
                  <ListItemIcon>
                  <Avatar  src={user.profileImg ? user.profileImg.url:null }  fontSize="small" />
                  </ListItemIcon>
                {user.username}
              </MenuItem>
            
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
            </Grid>
          </Menu>
        </>
      )}
    </>
  );
}

const styles = {
  overflow: "visible",
  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
  mt: 0.7,
  "& .MuiAvatar-root": {
    width: 32,
    height: 32,
    ml: -0.5,
    mr: 0.7,
  },
  '& .MuiMenu-list': {
    padding: '0 0',
    margin: '0 0',
  },
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    bgcolor: "background.paper",
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  }
};