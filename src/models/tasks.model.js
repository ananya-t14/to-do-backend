const {DataTypes} = require('sequelize')
const {sequelize} = require('../db')

const Tasks = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'This is a task'
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = Tasks;