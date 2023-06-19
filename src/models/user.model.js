const {DataTypes} = require('sequelize');
const Category = require('./category.model')
const {sequelize} = require('../db');

const User = sequelize.define("User", {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    picture : {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
    }
})


User.hasMany(Category, {
    foreignKey: {
        name: 'userId'
    }
})
module.exports = User;