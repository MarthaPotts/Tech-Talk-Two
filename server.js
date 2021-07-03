const path = require('path'); 
const express = require('express'); 
const handlebars = require('express-handlebars'); 

const sequelize = require('./config/connection'); 
// const SequelizeStore = require('connect-session-sequelize')(session.Store); 

const app = express(); 
const PORT = process.env.PORT || 3001; 

app.use(express.json()); 
app.use(express.urlencoded( {extended: true} )); 

app.use(express.static('public'));

app.set('view engine', 'hbs'); 
app.engine('hbs', handlebars({
    extname: 'hbs', 
    layoutsDir: __dirname + '/views/layouts', 
    partialsDir: __dirname + '/views/partials', 
})); 

// app.get('/', (req, res) => {
//     res.render('homepage'); 
// })
// const controllers = require('./controllers'); 
app.use((req, res, next) => {
    require('./controllers');
    next();  
}); 

sequelize.sync( {force: false} ).then( () => {
    app.listen(PORT, () => console.log(`App listening on ${PORT}`)); 
}); 
