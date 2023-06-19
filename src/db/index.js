const {Sequelize} = require('sequelize');
const dbConfig = require('../config/db.config');
// import dbConfig from '../config/db.config';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

async function connectDB(){
    try {
        await sequelize.authenticate();
    console.log("Connection to DB has been established successfully.");
    await sequelize.sync({force:true});
    console.log("database synced ");
    }
    catch (error) {
    console.log("Error in connecting to DB "+error);
    }
}

// ES6
// export default sequelize;
// ES5
// module.exports = sequelize;
module.exports = {connectDB, sequelize};