const express = require('express')
      router  = express()
      twitter = require('./twitterSdk'),
      routes  = require('./routes')
      bp      = require('body-parser')
      
      router.use(express.static("views")); 
      router.use(bp.urlencoded({extended:true}));

      router.get("/",(req,res)=>{
          res.render("home.ejs",{err : undefined})
      })

      router.post("/getTweets",(req,res)=>{
        let hashOrName = req.body.name,
            firstChar  = hashOrName.charAt(0)
            
        if( firstChar === '@'){
            res.redirect(`/u/${hashOrName}`)
        }
        else if( firstChar === '#'){
            res.redirect(`/h/${hashOrName.substring(1)}`)
        }
        else{
            res.render("home.ejs",{err : true})
        }
      })

      router.get("/u/:username",routes.getUser)

      router.get("/h/:hashTag",routes.getHashTag)     
      

router.listen(1000)