const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/user');
const Article = require('../model/article');

// const Message = require('../model/message');
// const Comment = require('../model/comment');
const jalali = require("jalali-moment");
const multer = require('multer');
// const checkLength = require('../tools/checkLength');
const fs = require('fs');
const path=require('path');



///////////////////////////////////////////////
//               CONFIG MULTER              //
/////////////////////////////////////////////

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'public/images/avatar')
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
  }
})
const uploadAvatar = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
      let ext = path.extname(file.originalname);
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
          return callback(new Error('Only images are allowed'))
      }
      callback(null, true)
  },
});

///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// CONFIG MULTER  ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////      GET DASHBOARD PAGE    ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


router.get("/dashboard", async (req, res) => {

  try {
      //get message
      const MESSAGES= await Message.find({receiver : req.session.user._id})
      .populate('sender').sort({createdAt:-1}); 
console.log(req.session.user);
      return res.render("pages/dashboard", {
          user: req.session.user,
          jalali: jalali,
           messages: MESSAGES
          // allArticleCount : ALL_ARTICLES_COUNT,
          // publishedArticles :PUBLISH_ARTCLES,
          // totalViews : totalViews,
          // mostViews : MOST_VISITED_ARTICLES,
          // lastComment: LAST_COMMENT
      })

  } catch (error) {
      return res.redirect('/api/signIn')
  }
})





///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////      GET PROFILE PAGE    ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

router.get("/profile", (req, res) => {
  try {
    //get message
    // const MESSAGES= await Message.find({receiver : req.session.user._id})
    // .populate('sender').sort({createdAt:-1}); 
console.log(req.session.user);
    return res.render("pages/profile", {
        user: req.session.user,
        jalali: jalali
        //  messages: MESSAGES,
        // allArticleCount : ALL_ARTICLES_COUNT,
        // publishedArticles :PUBLISH_ARTCLES,
        // totalViews : totalViews,
        // mostViews : MOST_VISITED_ARTICLES,
        // lastComment: LAST_COMMENT
    })

} catch (error) {
    return res.redirect('/api/signIn')
}
})

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////      ADD AVATAR   ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////



router.post('/uploadAvatar', (req, res) => {


})


///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////       UPDATE USER INFO   ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


router.put('/update', async (req, res) => {
   
})

module.exports = router;