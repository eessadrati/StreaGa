import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './../components/pages/Home';
import Login from './../components/pages/Login';
import Signup from './../components/pages/Signup'
import ErrorPage from './../components/pages/ErrorPage';
import Profile from '../components/pages/Profile';

const Router = () => {
    //const {user} = useContext(AuthContext);
    
    return (
        <BrowserRouter>
            <Routes> 
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;