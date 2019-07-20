module.exports.getHashTag = (req,res)=>{ 
    getHashTagInfo(req.params.hashTag)
    .then((msg)=>  res.render("hash.ejs",{message : msg.data.statuses, hash :req.params.hashTag })
    )
    .catch((err)=> res.render("hash.ejs",{message : err})        
    ) 
}

function getHashTagInfo(hashTag){ 
    return twitter.config.get('search/tweets', { q: `#${hashTag}`, tweet_mode : "extended" }) 
}
