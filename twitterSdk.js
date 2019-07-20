//dotenv lib to store environmental variables
require('dotenv').config()

/**
 * This is where full api automation takes place with the help of this twit sdk
 * there is no need to automate oauth i.e 
 * to send token access_token which will inturn return oauth access to specific database section
 * from there we can pass the token we got from the server use it as a middleware to retreive the data we want.
 */
module.exports.config = new require('twit')({
    consumer_key:           process.env.consumer_key,
    consumer_secret:        process.env.consumer_secret,
    access_token:           process.env.access_token,
    access_token_secret:    process.env.access_token_secret,
  })