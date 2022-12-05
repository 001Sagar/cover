const { Router } = require('express');
const express = require('express');
const Article = require('../models/article');
const router = express.Router();

//  router.use('/auth', require('./auth'));

router.get('/new', (req,res) =>{
    res.render('article/form')
    { article: new Article() }
    res.redirect('/main')
})

router.get('/edit/:id', async (req, res) => {
   const article = await Article.findById(req.params.id)
   res.render('article/edit', { article: article })
 })


 router.get('/:slug', async (req, res) => {
   const article = await Article.findOne({ slug: req.params.slug })
   if (article == null) res.redirect('/')
   res.render('article/show', { article: article })
 })


// router.post('/', (req,res) =>{
//    const article = new Article({
//     title:req.body.title,
//     desc:req.body.desc,
//     info:req.body.info
//    })
//    article.save().then(()=>{
//     res.redirect('/main')
//    })
// })



// router.get('/',(req,res)=>{
//    Article.find({},function(err,data){
//        if(err){
//         console.log('err',err);
//        }
//        console.log(data);
//       return res.render('index',{data:data});
//    }) 
// })

// router.use('/user',require('./auth.js'))
// //delete API
// router.get('/delete/:id',(req ,res) =>{
//    // console.log(req.params.id);
//  Article.findById(req.params.id , function(err,data){
//    if(err){
//       console.log('err',err);
//      }
//      data.remove();
//      return res.redirect('back');
//  })
// })


router.post('/', async (req, res, next) => {
   req.article = new Article()
   next()
 }, saveArticleAndRedirect('new'))
 
 router.put('/:id', async (req, res, next) => {
   req.article = await Article.findById(req.params.id)
   next()
 }, saveArticleAndRedirect('edit'))
 
 router.delete('/:id', async (req, res) => {
   await Article.findByIdAndDelete(req.params.id)
   res.redirect('/')
 })
 
 function saveArticleAndRedirect(path) {
   return async (req, res) => {
     let article = req.article
     article.title = req.body.title
     article.description = req.body.description
     article.markdown = req.body.markdown
     try {
       article = await article.save()
       res.redirect(`/user/${user.slug}`)
     } catch (e) {
       res.render(`user/${path}`, { user: user })
     }
   }
 }
 

module.exports = router;