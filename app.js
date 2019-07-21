/**
 * @authur mukul
 *
 */
const express = require('express')
      router  = express()
      twitter = require('./twitterSdk'),
      routes  = require('./routes')
      bp      = require('body-parser')
      
      router.use(express.static("views")); 
      router.use(bp.urlencoded({extended:true}));

      //home page 
      router.get("/",(req,res)=>{
          res.render("home.ejs",{err : undefined})
      })

      //After submit the request will have hashName or username
      router.post("/getTweets",(req,res)=>{
        let hashOrName = req.body.name,
            firstChar  = hashOrName.charAt(0)
        
            /**
            validate request i.e starting from either '@' or '#'
            then redirect that request to specific url              
            */
        if( firstChar === '@'){
            res.redirect(`/u/${hashOrName}`)
        }
        else if( firstChar === '#'){
            res.redirect(`/h/${hashOrName.substring(1)}`)
        }
        else{
            //reload same page with err if criteria doesn't match
            res.render("home.ejs",{err : true})
        }
      })

      //default routes for #hash and @username
      
      router.get("/u/:username",routes.getUser)

      router.get("/h/:hashTag",routes.getHashTag)     
      

router.listen(1000)