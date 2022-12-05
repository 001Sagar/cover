const { Router } = require('express');
const express = require('express');
const Article = require('../models/user');
const router = express.Router();

const usersController = require('../controllers/auth')

router.get('/main', async (req,res) =>{
      const article= await Article.find();  
        res.render('index',{article:article});
    })


router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.post('/create',usersController.create)
router.post('/create-session',usersController.createSession)

module.exports = router;