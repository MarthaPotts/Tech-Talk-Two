const router = require('express').Router(); 
const { Comment } = require('../models/Comment'); 
// const withAuth = require('../utils/withAuth');
// const commentRoutes = require('./comment-routes');  
// router.use('/comment', commentRoutes); 

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body, 
            // userId: req.session.userId, 
        }); 
        res.json(newComment); 
    } catch (err) {
        res.status(500).json(err);
    }
}); 

module.exports = router; 