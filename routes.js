/**
 * getHashTagInfo will take 
 * @param request of hashTag and will return a promise if resolve then render the data else catch the error
 */
module.exports.getUser = (req,res)=>{ 
    getUserTimeLine(req.params.username)
    .then((msg)=> res.render("user.ejs",{message : msg.data, name :req.params.username })
    )
    .catch((err)=> res.render("user.ejs",{message : err})        
    ) 
}
module.exports.getHashTag = (req,res)=>{ 
    getHashTagInfo(req.params.hashTag)
    .then((msg)=>  res.render("hash.ejs",{message : msg.data.statuses, hash :req.params.hashTag })
    )
    .catch((err)=> res.render("hash.ejs",{message : err})        
    ) 
}

/**
 * From twitterSdk file import pre-defined method of "twit module" containing requests. Will be inturn returns a promise 
 * @params q:hashTag, tweet_mode : extended (to retreive truncated tweets)
 */

function getHashTagInfo(hashTag){ 
    return twitter.config.get('search/tweets', { q: `#${hashTag}`, tweet_mode : "extended" }) 
}

function getUserTimeLine(username){
    return twitter.config.get('statuses/user_timeline',  { screen_name: `${username}`,  tweet_mode : "extended"})
}