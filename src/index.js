const express = require('express');
const PORT = 4000;
const app = express();
const {connectDB} = require('./db')
const Users = require('./models/user.model')

connectDB();


app.get('/', async (req,res)=>{
    const users = await Users.findAll()
    res.json({status:200,data:'Hello Bhosadike', users:users})
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
