const {DataTypes} = require('sequelize')
const {sequelize} = require('../db')

const Tasks = require('./tasks.model')

const Category = sequelize.define('Category', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}
)

Category.hasMany(Tasks, {
    foreignKey: {
        name: 'categoryId'
    }
})

module.exports = Category;