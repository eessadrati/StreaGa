const express = require('express');
const {createUser,deleteUser,getUser,getAllUsers,updateUser,follow, unfollow,followCheck,unfollowCheck} = require('../methods/user');
const {signIn, logOut, requireSignIng} = require('../methods/auth');
const router = express.Router();

router.post('/api/users/create', createUser);
router.get('/api/users/:id', getUser);
router.get('/api/users', getAllUsers);
router.put('/api/users/:id', updateUser);
router.delete('/api/users/:id', deleteUser);
router.post('/api/users/signin', signIn);
router.get('/api/user/logout', logOut);
router.post('/api/users/follow/:userId/:targetId', followCheck, follow);
router.post('/api/users/unfollow/:userId/:targetId', unfollowCheck, unfollow);