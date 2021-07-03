const router = require('express').Router(); 
const userRoutes = require('../api/user.routes'); 
const postRoutes = require('../api/post-routes'); 
const commentRoutes = require('../api/comment-routes'); 

router.use('/user', userRoutes); 
router.use('/post', postRoutes); 
router.use('/comment', commentRoutes); //this one throwing a type error as 'object'? router.use() requires a mw fx but got object js 8:8 ? server?