const router = require('express').Router(); 

//import and bind to a variable 
const userRoutes = require('./user-routes'); 
const postRoutes = require('./post-routes'); 
const commentRoutes = require('./comment-routes'); 

//bind to a route : though I'm not certain these should be here...
//middleware
router.use('/user', userRoutes); 
router.use('/post', postRoutes); 
router.use('/comment', commentRoutes); 

module.exports = router; 