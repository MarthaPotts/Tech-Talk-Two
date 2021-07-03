const path = require('path'); 
const express = require('express'); 
// const session = require('express-session');

const handlebars = require('express-handlebars');
const { Router } = require('express');
// const hbs = handlebars.create( {helpers} ); 
// const helpers = require('./utils/helpers');

// const sess = {
//     secret: 'super secret secret', 
//     cookie: {}, 
//     resave: false, 
//     saveUnitialized: true, 
//     store: new SequelizeStore( {
//         db: sequelize
//     })
// }; 
// app.use(session(sess)); 
// const withAuth = require('./utils/auth');  

// const sequelize = require('./config/connection'); 
// const SequelizeStore = require('connect-session-sequelize')(session.Store); 

const app = express();
const router = require('express').Router();  
// const PORT = process.env.PORT || 3001; 
const PORT = 3000; 


app.set('view engine', 'hbs'); 
app.engine('hbs', handlebars({
    extname: 'hbs', 
    layoutsDir: __dirname + '/views/layouts', 
    partialsDir: __dirname + '/views/partials', 
}));

app.use(express.json()); 
app.use(express.urlencoded( {extended: true} )); 

app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.render('homepage'); 
// })
// const controllers = require('./controllers'); 
// app.use((req, res, next) => {
//     require('./controllers');
//     next();  
// });

//api
app.get('/', (req, res) => {
    res.render('homepage'); 
}); 
// Router.get('/', (req, res) => res.render('homepage')); DOES NOT WORK!!!! 
app.get('/login', (req, res) => {
    res.render('login'); 
}).get('/signup', (req, res) => {
    res.render('signup'); 
}).get('/updatepost', (req, res) => {
    res.render('updatepost'); 
}).get('/createpost', (req, res) => {
    res.render('createpost'); 
}).get('/dashboard', (req, res) => {
    res.render('dashboard'); 
}).get('/logout', (req, res) => {
    res.render('homepage'); 
}); 

app.listen(PORT, () => console.log(`App listening on ${PORT}`)); 
// sequelize.sync( {force: false} ).then( () => {
//     app.listen(PORT, () => console.log(`App listening on ${PORT}`)); }); 
 
