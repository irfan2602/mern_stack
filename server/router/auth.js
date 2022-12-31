const jwt = require('jsonwebtoken')
const express = require('express')
const User = require('../model/userSchema')
const router = express.Router()
const bcrypt = require('bcrypt')



router.get('/', (req, res) => {
    res.send("Hello Home Page from router js");
})
/* router.post('/users', (req,res) =>{
    const {name,email,phone,work,password,cpassword} = req.body
    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error : "Please fill the data"})
    }
    User.findOne({email:email})
    .then((userExist) =>{
        if(userExist){
            return res.status(422).json({error: "Already Exists"})
        }

        const user = new User({name,email,phone,work,password,cpassword})
        user.save().then(() =>{
            res.status(201).json({message :"Successful registration"})
        }).catch((err) => res.status(500).json({error: "Registration failed"}))
    }).catch(err =>{ console.log(err) }) */


router.post('/users', async (req, res) => {
    try {
        const { name, email, phone, work, password, cpassword } = req.body
        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).json({ error: "Please fill the data" })
        }

        const existUser = await User.findOne({ email: email });
        if (existUser) {
            return res.status(422).json({ error: "Already Exists" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        if(user.password === user.cpassword) {
            const newUser = await user.save()
            return res.status(201).json({ message: "Successful" })

        }
        else{
            return res.status(201).json({ error: "Password & confirm password are not same" })
        }
        

    } catch (err) {
        res.status(400).json({ error: "Error" })
    }
})

router.post('/signin', async (req, res) => {
    try {
        //let token;
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(422).json({ error: "Please fill the data" })
        }

        const existUser = await User.findOne({ email: email })
        
        const passwordCompare = await bcrypt.compare(password,existUser.password)
        const token = await existUser.generateAuthToken()
        console.log(token)
        res.cookie('jwtoken',token, {
            expires: new Date(Date.now()+25892000000),
            httpOnly:true,
        })
        if (!passwordCompare) {
            return res.status(400).json({ error: "Login Failed" })
        }
        else {
            return res.status(201).json({ message: "Login successfully" })
        }


    } catch (err) {
        res.status(500).json({ message: "Login Failed" })
    }
})

module.exports = router