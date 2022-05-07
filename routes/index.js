const express = require('express');
const router  = express.Router();
const {ensureAuthenticated} = require("../config/auth.js")

//página de login
router.get('/', (req,res)=>{
    res.render('home'); //executa um GET da página home.ejs.
})

//página de registro
router.get('/registro', (req,res)=>{
    res.render('registro'); //executa um GET para a página de registro.ejs
})

router.get('/dashboard',ensureAuthenticated, (req,res)=>{
    console.log(req);
    res.render('dashboard', {
        user: req.user
    });
})

module.exports = router; 