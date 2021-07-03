const router = require('express').Router(); 
const { Post } = require('../models/Post'); 
// const withAuth = require('../utils/');
const postRoutes = require('./post-routes');  
router.use('/post', postRoutes);


router.post('/', async (req, res) => {
    const body = req.body;  

    try{
        const newPost = await Post.create({
            ...body, UserId
        }); 
    } catch (err) {
        res.status(500).json(err); 
    }
}); 

module.exports = router; 