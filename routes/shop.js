const express = require('express');

const router = express.Router();

router.post('/',(req ,res ,next)=>{
    res.send('<h1>Welcome to my express js</h1>')
 });


 module.exports = router ; 
 