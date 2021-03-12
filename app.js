const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3001;

const Users = [];

const app = express();
app.use(cookieParser());

app.get('/',(req,res)=>{
    Users.filter((user) => {
        if( Users && req.cookies.name == user.name ){
            res.send('Logged in');
        }
    })
    res.send('Sign up please');
  //  res.cookie('name', 'express').send('cookie set');
});

app.post('/signup',(req,res)=>{
    if( !req.body.uname || !req.body.pass ){
        res.send('Invalid data');
    }else{
        let newUser = {uname:req.body.name,pass:req.body.pass};
        Users.push(newUser);
        res.send('Signup successfull')
       // console.log('Sign up successfull');
    }
});

app.listen(PORT,()=>{
    console.log('Server active on port '+PORT);
});