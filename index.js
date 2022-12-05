const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const Article = require('./models/article')
const router = require('./routes/user');
const auth = require('./routes/auth.js')

const methodOverride = require('method-override')

const app = express();
const port = process.env.PORT || 8000;

const passportJWT = require('./config/passportJWT');

//Passport JWT
const Passport = require('./config/passportJWT')

//connect the mongoDB
const db = require('./config/mongoose');


// Asstes for Css
app.use(express.static('assets'))
// app.use(express.urlencoded())

app.set('view engine', 'ejs')

//Rout
app.get('/main', async (req,res) =>{
  const article= await Article.find();  
    res.render('index',{article:article});
  // res.render('home');
})



app.get('/', async (req,res) =>{
   res.render('home');
})
//Body Parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//User Routes
app.use('/article',router);
app.use('/user',auth);
// app.use('/users/create',router)


app.listen(port,function(err){
    if(err){
        console.log('Error in connection to the server',err)
    }
    console.log('Server run on port::',port)
})