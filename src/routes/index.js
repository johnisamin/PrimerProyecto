const express = require('express');
const router = express.Router();
//Routes
router.get('/',(req,res)=>{
    res.render('index',{ title: 'Primera web con NODE' });
});

router.get('/contact',(req,res)=>{
    res.render('contact',{ title: 'Contact Page'});
});


module.exports = router;