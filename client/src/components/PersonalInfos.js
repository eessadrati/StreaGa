import React, { useContext, useEffect, useState } from 'react'
import { Grid, Button, CssBaseline, Divider, Typography,  } from '@mui/material/'
import InputField from './../layout/InputField'
import DateTimeField from './../layout/DateTimeField';
import DateField from '../layout/DateField';
import AuthContext from './../context/AuthContext';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormControl } from '@mui/material';
import { userURL } from './../config/Config';
import axios from "axios"

function PersonalInfos(props) {
    const {user:userContext}=useContext(AuthContext)
   // console.log(user)
    const [username, setUsername]=useState('');
    const [usernameErr, setUsernameErr]=useState('')
    const [firstName, setFirstName]=useState('');
    const [firstNameErr, setFirstNameErr]=useState('');
    const [lastName, setLastName]=useState('');
    const [lastNameErr, setLastNameErr]=useState('');
    const [email, setEmail]=useState('');
    const [emailErr, setemailErr]=useState('');
    const [country, setCountry]=useState('');
    const [gender, setGender]=useState('');
    const [birthday, setBirthday]=useState();
    const [phone, setPhone]=useState('');
    const [phoneErr, setPhoneErr]=useState('');
    const [user, setUser]= useState(userContext);

    useEffect(()=>{
      if(user){
        localStorage.setItem("user",JSON.stringify(user))
      }
    },[user])
    useEffect(()=>{
      if(user){
        setUsername(user.username);
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setPhone(user.phoneNumber);
        setCountry(user.country);
        setBirthday(user.birthDate ? user.birthDate :null );
        setGender(user.gender ? user.gender :"Undetermined");
      }
    },[user])

    const handleSaveChanges= async()=>{
        const updatedUser={
                    username:username,
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    phoneNumber:phone,
                    country:country,
                    birthDate:birthday,
                    gender:gender==="Undetermined" ? "":gender,
        }
        await axios.put(`${userURL}/${user._id}`,updatedUser).then((res)=>{
          setUser(res.data)
          // localStorage.setItem("user",JSON.stringify(res.data))
          console.log(res.data)
       })

    }

  return (
    <Grid container direction="column" spacing={1} sx={styles.container}>
        <Grid item xs={6}>
            <InputField
                label="First Name"
                placeholder="First Name"
                errorMessage={firstNameErr}
                onChange={(e) => setFirstName(e.target.value.trim())}
                value={firstName}
              />
        </Grid>
        <Grid item xs={6}>
            <InputField
                label="Last Name"
                placeholder="Last Name"
                errorMessage={lastNameErr}
                onChange={(e) => setLastName(e.target.value.trim())}
                value={lastName}
              />
        </Grid>
        <Grid item xs={6}>
            <InputField
                label="Userame"
                placeholder="Userame"
                errorMessage={usernameErr}
                onChange={(e) => setUsername(e.target.value.trim())}
                value={username}
              />
        </Grid>
        <Grid item xs={6}>
            <InputField
                label="Email"
                placeholder="Email"
                errorMessage={emailErr}
                onChange={(e) => setEmail(e.target.value.trim())}
                value={email}
              />
        </Grid>
        <Grid item xs={6} >
            <InputField
                label="Phonr number"
                placeholder="Phonr number"
                errorMessage={phoneErr}
                onChange={(e) => setPhone(e.target.value.trim())}
                value={phone}
              />
        </Grid>
        
        <Grid item xs={6}>
            <DateField  label="Birthday" value={birthday} onDateChange={(newValue)=>{setBirthday(newValue)}}/>
        </Grid>
        <Grid item xs={6} >
           {/**  <InputField
                label="Gender"
                placeholder="Gender"
                onChange={(e) => setGender(e.target.value.trim())}
                value={gender}
              />*/}
              <FormControl  sx={{ mt: 2.5, minWidth: '218px' }}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
          autoWidth
          label="Age"
        >
        
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Undetermined"}>Undetermined</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={6} >
            <InputField
                label="Country"
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value.trim())}
                value={country}
              />
        </Grid>
        <Grid item sx={styles.button} >
            <Button variant="contained" color="success" onClick={handleSaveChanges}>
                Save
            </Button>
        </Grid>
    </Grid>
  )
}

const styles = {
  container: {
      marginLeft: '10px',
      display: 'flex',
      flexDirection: 'row'
  },
  button: {
      alignItems:'right' //??
  }
}


export default PersonalInfos