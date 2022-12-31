const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express');
const app = express();
dotenv.config({path: './config.env'})
require('./db/connection')
require('./model/userSchema')
app.use(express.json())
app.use(require('./router/auth'))

const port = process.env.PORT

const middleware = (req,res,next) =>{
    console.log("middleware");
    next();
}
/* middleware() */

app.get('/', (req,res) =>{
    res.send("Hello Home Page");
})

app.get('/about', middleware, (req,res) =>{
    console.log('About Middleware')
    res.send("Hello About Page");
})

app.get('/contact', (req,res) =>{
    res.cookie("jwt","irfan")
    res.send("Hello Contact Page");
})

app.get('/login', (req,res) =>{
    res.send("Hello Login Page");
})

app.get('*', (req,res) =>{
    res.send("Page Not Found!!!");
})

app.listen(port,() =>{
    console.log(`Application is running at ${port}`);
})