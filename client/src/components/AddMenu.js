import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddBlog from "./AddBlog";
import AddEvent from "./AddEvent";


export default function AddMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [addBlogIsOpen, setAddBlogIsOpen] = useState(false);
  const [addEventIsOpen, setAddEventIsOpen] = useState(false);
 
 
 
 
  return (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Tooltip title="Create">
            
              <IconButton onClick={handleClick} size="large" 
                            aria-label="add new" color="inherit"
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            style={{ }}>
              <AddCircleOutlineIcon fontSize="60px" />
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
              sx: {...styles},
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <div>
            <MenuItem   >
              <ListItemIcon>
                  <OndemandVideoIcon />
                  </ListItemIcon>
                Start Live Stream
              </MenuItem>
              <MenuItem onClick={()=>setAddBlogIsOpen(true)}   >
              <ListItemIcon>
                  <ArticleIcon/>
                  </ListItemIcon>
                Add new Blog
              </MenuItem>
              <MenuItem onClick={()=>setAddEventIsOpen(true)}   >
              <ListItemIcon>
                  <EventIcon/>
                  </ListItemIcon>
                Add new event 
              </MenuItem>
            </div>
          </Menu>
          <AddBlog open={addBlogIsOpen} handleClose={()=> setAddBlogIsOpen(false)}/>
          <AddEvent open={addEventIsOpen} handleClose={()=> setAddEventIsOpen(false)}/>
        </>
  );
}

const styles = {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt:0.2,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: 0,
      mr: 0,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 18,
      width: 10,
      height: 10,
      bgcolor: "background.paper",
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
};
    
