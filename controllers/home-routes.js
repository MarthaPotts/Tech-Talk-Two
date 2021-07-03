// const router = require('express').Router(); 
// const { Post, Comment, User } = require('../models/'); 

// //homepage posts 
// router.get('/', async (req, res) => {
//     try{
//         const postData = await Post.findAll({
//             include: [User], 
//         }); 
//         const posts = postData.map( (post) => post.get({plain: true})); 

//         res.render('/all-posts', { posts }); 
//     } catch (err){
//         res.status(500).json(err); 
//     }
// }); 

// router.get('/post/:id', async (req, res) => {
//     try{
//         const postData = await Post.findByPk(req.params.id, {
//             include: [
//                 User, 
//                 {
//                     model: Comment, 
//                     include: [User], 
//                 }, 
//             ], 
//         }); 
//         if (postData) {
//             const post = postData.get(( {plain: true} )); 
//         } else {
//             res.status(400).end(); 
//         }
//     } catch (err) {
//         res.status(500).json(err); 
//     }
// }); 

// //login
// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/'); 
//         return; 
//     }
//     res.render('/login'); 
// }); 

// router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/'); 
//         return; 
//     }
//     res.render('signup'); 
// }); 

// module.exports = router; 