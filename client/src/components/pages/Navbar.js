import React,{ useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import AddMenu from "../AddMenu";


export default function NavBar() {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
 
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/search") {
      setInputSearch("");
    }
  }, [location]);
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor:'color.main' }}>
        <Toolbar>
         {/** <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            component={Link} to="/"
          >
             <IconButton color="inherit" component={Link} to="/">
              <MenuIcon />
            </IconButton>
            LOGO
            
          </IconButton>*/}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{marginRight:'6vw',textDecoration:'none',color:'inherit', display: { xs: "none", sm: "block" } }}
          >
            StreaGa
          </Typography>

          <Search>
            <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              sx={{ m: 1 }}
              component={Link}
              to="/search"
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
            </IconButton>
            <StyledInputBase
              placeholder="Search….."
              inputProps={{ "aria-label": "search" }}
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/search`);
                }
              }}
            />
          </Search>

          <Box  sx={{ flexGrow: 1}} />
          <Box sx={{display:'flex' }}>
             <AddMenu/>
           {/**  <IconButton
             size="large"
              aria-label="show new mails"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>*/} 
          <AccountMenu />
          </Box>
        </Toolbar>
      </AppBar>
      {/*<Filter />*/}
    </Box>
  );
}


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.2, 1.2, 1.2, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `5px `,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

