import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './../components/pages/Home';
import Login from './../components/pages/Login';
import Signup from './../components/pages/Signup'
import ErrorPage from './../components/pages/ErrorPage';
import Channel from './../components/pages/Channel';
import Create from './../components/pages/Create';
import Profile from '../components/pages/Profile';

const Router = () => {
    //const {user} = useContext(AuthContext);
    
    return (
        <BrowserRouter>
            <Routes> 
            <Route exact path="/" element={<Home/>}>
            </Route>
            <Route  path="/profile" element={<Profile/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/channel" element={<Channel/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;