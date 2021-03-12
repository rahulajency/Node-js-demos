const express = require('express');
const PORT = 3000;

const app = express();

app.get('/',(req,res)=>{
    res.send('Server Active');
});

app.listen(PORT,()=>{
    console.log('Server active on port '+PORT);
});