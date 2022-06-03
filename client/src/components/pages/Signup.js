import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  TextField,
  InputAdornment,
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Copyright from "./../../utils/Copyright";
import { Link as LinkTo } from "react-router-dom";
import InputField from "./../../layout/InputField";
import { numberInputStyle } from "../../utils/Style";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //const history = useHistory();
  //const { getLoggedIn } = useContext(AuthContext);
  /*const handleSubmit =  (e) => {
    e.preventDefault();
    console.log("yes");
    if(!firstName.trim()){
        setFirstNameErr("Please enter your first name");
        return;
    }else{
        console.log(firstName);
    }
  }*/
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    //validate first name
    if (!firstName.trim()) {
        setFirstNameErr("Please enter your first name");
        return;
      }
      const nameRegex = /^[a-zA-Z0-9-_]{2,}$/;
      if (!firstName.match(nameRegex)) {
        setFirstNameErr("Please enter a valid first name");
        return;
      }
      setFirstNameErr("");
  
      //validate last name
      if (!lastName.trim()) {
        setLastNameErr("Please enter your last name");
        return;
      }
      if (!lastName.match(nameRegex)) {
        setLastNameErr("Please enter a valid last name");
        return;
      }
      setLastNameErr("");
  
      //validate username
      if (!username.trim()) {
        setUsernameErr("Please enter your username");
        return;
      }
      if (!username.match(nameRegex)) {
        setUsernameErr("Please enter a valid username");
        return;
      }
      setUsernameErr("");
  
      //validate email
      if (!email.trim()) {
        setEmailErr("Please enter your email");
        return;
      }
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!email.match(emailRegex)) {
        setEmailErr("Please enter a valid email");
        return;
      }
      setEmailErr("");
  
      //validate phone
      if (!phone.trim()) {
        setPhoneErr("Please enter your phone number");
        return;
      }
      // regex for international phone number
  
      const phoneRegex = /^\+?[0-9]{10,13}$/;
 
      if (!phone.match(phoneRegex)) {
        setPhoneErr("Please enter a valid phone number. e.g +212623456789");
        return;
      }
      setPhoneErr("");
      //validate password
      if (!password.trim()) {
        setPasswordErr("Please enter your password");
        return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!password.match(passwordRegex)) {
        setPasswordErr(
          "Please enter a strong password that contains at least one lowercase letter, one uppercase letter, one number and one special character"
        );
        return;
      }
      setPasswordErr("");
  
      //validate confirm password
      if (!confirmPassword.trim()) {
        setConfirmPasswordErr("Please confirm your password");
        return;
      }
      if (password !== confirmPassword) {
        setConfirmPasswordErr("Passwords do not match");
        return;
      }
      setConfirmPasswordErr("");
    //submit

    const user = {
        firstName,
        lastName,
        username,
        phone,
        email,
        password,
    };
    try {
      /* await axios.post("/auth/register", user);
            await getLoggedIn();
            history.push("/");*/
      console.log("Successfully registered!");
      console.log(user);
    } catch (err) {
      console.log(err);
    }
    
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
     // e.preventDefault();
    
      const form = e.target.form;
      //if (event.target instanceof HTMLInputElement)
      const index = [...form].indexOf(e.target);

      for (let i = index + 1; i < form.elements.length; i++) {
        const next = form.elements[i];
        if (next instanceof HTMLInputElement) {
          next.focus();
          break;
        }
      }
      form.elements[index].blur();
    

    }
  };
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper elevation={3} sx={{padding:'1.5vh 1.5vw', margin:'1.4vh 0'}}>
        <Grid
          container
          direction="column"
          textAlign="center"
          justifyContent="center"
        >
          <Typography component="h1" variant="h5" sx={{paddingBottom:'1vh '}}>
            Sign Up
          </Typography>
          <Divider/>
        </Grid>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={6}>
              <InputField
                required
                autoFocus
                fullWidth
                name="fName"
                label="First Name"
                placeholder="First Name"
                onKeyDown={handleEnter}
                sx={{ paddingRight: "0.4vw" }}
                errorMessage={firstNameErr}
                onChange={(e) => setFirstName(e.target.value.trim())}
                value={firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <InputField
                required
                fullWidth
                name="lName"
                label="Last Name"
                placeholder="Last Name"
                onKeyDown={handleEnter}
                
                sx={{ paddingLeft: "0.4vw" }}
                errorMessage={lastNameErr}
                onChange={(e) => setLastName(e.target.value.trim())}
                value={lastName}
              />
            </Grid>
          </Grid>
          <Grid>
            <InputField
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              placeholder="username"
              sx={{ marginTop: "2vh" }}
              errorMessage={usernameErr}
              onKeyDown={handleEnter}
              onChange={(e) => setUsername(e.target.value.trim())}
              value={username}
            />
          </Grid>
          <InputField
            required
            fullWidth
            id="email"
            label="Email Address"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            errorMessage={emailErr}
            sx={{ marginTop: "2vh" }}
            onKeyDown={handleEnter}
            onChange={(e) => setEmail(e.target.value.trim())}
            value={email}
          />
          <InputField
            required
            fullWidth
            id="phone"
            label="Phone Number"
            placeholder="Phone Nmuber"
            name="phone"
            type="number"
            errorMessage={phoneErr}
            sx={{ marginTop: "2vh", ...numberInputStyle }}
            onKeyDown={handleEnter}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
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
            sx={{ marginTop: "2vh" }}
            errorMessage={passwordErr}
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
          <InputField
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            autoComplete="current-password"
            sx={{ margin: "2vh 0" }}
            errorMessage={confirmPasswordErr}
            onKeyDown={handleEnter}
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
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
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
          <Grid container sx={{margin:'1.5vh 0.5vw'}}>
              {"Already have an account? "}
              <LinkTo to="/login"  style={{ }}>
                {" Sign in"}
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

export default Signup;
