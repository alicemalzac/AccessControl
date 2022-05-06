const express = require('express');
const router  = express.Router();

//página de login
router.get('/', (req,res)=>{
    res.render('home'); //executa um GET da página home.ejs.
})

//página de registro
router.get('/registro', (req,res)=>{
    res.render('registro'); //executa um GET para a página de registro.ejs
})

router.get('/dashboard',(req,res)=>{
    user: req.user
})

module.exports = router; 