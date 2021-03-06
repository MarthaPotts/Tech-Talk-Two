const { Model, DataTypes } = require('sequelize'); 
const bcrypt = require('bcrypt'); 
const sequelize = require('../config/connection'); 

class Post extends Model {}

Post.init(
    {
        title: DataTypes.STRING, 
        body: DataTypes.STRING, 
    }, 
    {
        sequelize, 
        modelName: 'Post', 
    }, 
); 

module.exports = Post; 