import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes,Outlet, Navigate  } from 'react-router-dom';
import Home from './../components/pages/Home';
import Login from './../components/pages/Login';
import Signup from './../components/pages/Signup'
import ErrorPage from './../components/pages/ErrorPage';
import Channel from './../components/pages/Channel';
import Profile from '../components/pages/Profile';
import Navbar from "../components/pages/Navbar";
import AuthContext from './../context/AuthContext';
const HeaderLayout=()=>(
        <>
          
          <Navbar />
          <Outlet />
        </>
      );

const Router = () => {
    const {loggedIn} = useContext(AuthContext);
    
    return (
        <BrowserRouter>
            
            <Routes> 
            <Route element={<HeaderLayout />} >
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route  path="/profile/:username" element={<Profile/>} />
                    <Route path="/channel" element={<Channel/>} />
                </Route>
            </Route>
            {!loggedIn &&(
                <>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                </>
            )}
            <Route path="*" element={<Navigate to="/" replace />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
