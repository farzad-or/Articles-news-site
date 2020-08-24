const express = require('express');
const router = express.Router();
const multer = require('multer');
const jalali = require("jalali-moment");
const path = require('path');
const fs = require('fs')
const Article = require('../models/article');
const Comment = require('../models/comment');
const Message = require('../models/message');

//////////////////////////////////////////////
//              CONFIG MULTER              //
////////////////////////////////////////////




//////////////////////////////////////////////
//            GET ADD ARTICLE PAGE         //
////////////////////////////////////////////

router.get('/addArticle',async (req, res) => {

})

//////////////////////////////////////////////
//           GET MY ARTICLES PAGE          //
////////////////////////////////////////////
 
router.get('/myArticles:page', async (req, res) => {

})

//////////////////////////////////////////////
//       GET ARTICLE PAGE IN DASHBOARD     //
////////////////////////////////////////////

router.get('/details/:id', async (req, res, next) => {

})

//////////////////////////////////////////////
//            CREATE NEW ARTICLE           //
////////////////////////////////////////////

router.post('/addArticle', upload.single('articleImage'), async (req, res) => {

})

//////////////////////////////////////////////
//            DELETE ARTICLE ROUTE         //
////////////////////////////////////////////

router.delete('/delete/:id', async (req, res) => {

})

//////////////////////////////////////////////
//          GET UPDATE_ARTICLES PAGE       //
////////////////////////////////////////////

router.get('/update/:id', async (req, res) => {
 
})

//////////////////////////////////////////////
//          SAVE ARTICLE UPDATE            //
////////////////////////////////////////////

router.put('/update/:id',upload.single('articleImage'),async (req,res)=>{
    
  
})

//////////////////////////////////////////////
//          CHANGE PUBLISH STATUS          //
////////////////////////////////////////////

router.put('/publish/:id' ,async (req ,res)=>{

    

})

module.exports = router;