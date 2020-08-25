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
    //   const MESSAGES= await Message.find({receiver : req.session.user._id})
    //   .populate('sender').sort({createdAt:-1}); 
    



      return res.render("pages/dashboard", {
          user: req.session.user,
          jalali: jalali,
        //    messages: MESSAGES
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





///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////       UPDATE USER INFO   ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


router.put('/update', async (req, res) => {
   
})

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////       UPDATE USER INFO   ///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////
//               ADD AVATAR                 //
/////////////////////////////////////////////

router.post('/uploadAvatar', (req, res) => {
console.log(3232);
  const upload = uploadAvatar.single('avatar');
  upload(req, res, async err => {
     
      if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          return res.status(500).send(err)
      } else if (err) {
          // An unknown error occurred when uploading.
          return res.status(500).send(err)
      }
      try {
        console.log(req.body);
        console.log(req.file);
          //update user avatar and get oldUser for delete old avatar file
          const LAST_USER = await User.findByIdAndUpdate(req.session.user._id, {
              avatar: req.file.filename
          })

          //delete old avatar file (if exist)
          if (req.session.user.avatar && fs.existsSync('public/images/avatar/' + LAST_USER.avatar)) {
              fs.unlinkSync('public/images/avatar/' + LAST_USER.avatar)
          }
          //update session.user.avatar
          req.session.user.avatar = req.file.filename;
          return res.json({
              message: "تصویر پروفایل با موفقیت تغییر کرد",
              color: 'alert-success',
              avatar: req.file.filename

          })
      } catch (err) {
          return res.json({
              message: "تصویر بارگذاری نشد",
              color: 'alert-danger'
          })
      }
  })
})



module.exports = router;