import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { userURL } from './../config/Config';

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');
  const userFromLocalStorage = localStorage.getItem('user');
  
 /* async function getCurrentUser(){
     setLoading(true);
     await axios.get(`${authURL}/currentUser`).then((res)=>{
           setLoading(false);
           setUser(res.data);
          console.log("testes")
           console.log(res.data);
    });
    
  }*/
  useEffect(()=>{
    if(userFromLocalStorage){
      setUser(userFromLocalStorage)
    }
  },[userFromLocalStorage])
  
    
  const getCurrentUser = async () => {
    if (userId) {
      setLoggedIn(true);
      /*await axios.get(`${userURL}/${userId}`).then((res) => {
        setUser(res.data);
        setLoading(false);
      });*/
    } else {
      setLoggedIn(false);
    }
  }


  useEffect(() => {
     const fetch= async ()=>{
      if (userId) {
        setLoggedIn(true);
        await axios.get(`${userURL}/${userId}`).then((res) => {
          setUser(res.data);
          
          setLoading(false);
        });
      } else {
        setLoggedIn(false);
      }
     }
     fetch()
 }, [userId]);

 /* async function getLoggedIn() {
    const loggedInRes = await axios.get(`${authURL}/loggedIn`);
     setLoggedIn(loggedInRes.data);
     console.log(loggedInRes.data);
   // if(loggedIn){
   //   const  userIn =await axios.get("/auth/gg");
    //  setUser(userIn.data);
    //}
    
   
    
  }
  useEffect(() => {
    if(loggedIn){
      getCurrentUser();
    }
    getLoggedIn(); 
  }, [loggedIn]);

*/
  return (
    <AuthContext.Provider value={{ user,setUser,userId, loading,loggedIn, setLoggedIn,getCurrentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };