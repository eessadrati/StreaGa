import React, { useContext, useState } from "react";
import {
  Container,
  CssBaseline,
  InputAdornment,
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Copyright from "./../../utils/Copyright";
import { Link as LinkTo, useNavigate } from "react-router-dom";
import InputField from "./../../layout/InputField";
import axios from "axios";
import { userURL } from './../../config/Config';
import AuthContext from './../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage]=useState("");
    const [showPassword, setShowPassword] = useState(false);
    //const history = useHistory();
    const { getCurrentUser,setLoggedIn } = useContext(AuthContext);
    const navigate=useNavigate()
    const handleClick = async (e) => {
      e.preventDefault();
       if(!email.trim() || !password){
            setErrorMessage("Please enter email and password");
            return;
        }
        const user = {
          email: email,
          password: password,
        };
        try {
          await axios.post(`${userURL}/signin`, user).then((res) => {
            console.log(res);
            localStorage.setItem('userId', res.data.dummy._id);
            localStorage.setItem('user', JSON.stringify(res.data.dummy));
            
          });
          setLoggedIn(true)
          getCurrentUser();
           navigate("/")
          console.log("Successfully logged in!");
          
        } catch (err) {
          console.log(err);
        }
      
    };
    const handleEnter = (e) => {
      if (e.key==="Enter") {
        e.preventDefault();
        const form = e.target.form;
        //if (event.target instanceof HTMLInputElement)
         const index = [...form].indexOf(e.target)
         
         for(let i=index+1;i<form.elements.length;i++){
             const next = form.elements[i];
              if(next instanceof HTMLInputElement){
                  next.focus();
                  break;
              }
           }
           form.elements[index].blur();
       
      }
    };
  
    return (
      <>
        <Container component="main" maxWidth="sm" >
          <CssBaseline />
          <Paper elevation={3} sx={{padding:'1.5vh 1.5vw', margin:'6.4vh 0'}}>
          <Grid
            container
            direction="column"
            textAlign="center"
            justifyContent="center"
          >
            
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Divider />
          </Grid>
          <form  noValidate onSubmit={handleClick}>
            
            <InputField
              required
              fullWidth
              id="email"
              label="Email Address"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              sx={{marginTop:'2vh'}}
              onKeyDown={handleEnter}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <InputField
              required
              fullWidth
              name="password"
              label="Password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              sx={{margin:'2vh 0'}}
              onKeyDown={handleEnter}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              minLength="6"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
            <Typography color="error" sx={{marginLeft:'0.3vw',marginTop:'0.3vh'}} >{errorMessage}</Typography>
            <Grid container sx={{margin:'1.5vh 0.5vw'}}>
            {"Don't have an account? "}
                <LinkTo to="/signup" >
                {" Sign Up"}
                </LinkTo>
              
            </Grid>
          </form>
  
          <Box sx={{marginBottom:'0.4vh'}}>
            <Copyright />
          </Box>
          </Paper>
        </Container>
      </>
    );
};

export default Login;
