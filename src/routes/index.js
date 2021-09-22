const express = require('express');
const router = express.Router();
//Routes
router.get('/',(req,res)=>{
    res.render('index.html',{ title: 'Primera web con NODE' });
});

router.get('/contact',(req,res)=>{
    res.render('contact.html',{ title: 'Contacto'});
});


module.exports = router;