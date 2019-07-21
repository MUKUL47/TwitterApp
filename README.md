# TwitterApp
<h1><b><u>Summary</u></b></h1> 
<h4>Retreive #hashtag and @userName tweets sorted in recency</h4>
<h4>node_modules</h4>
express     : To automate request and response
<br>
dotenv : To store api keys in nodeJs environmental variable as process.env.variableName, which will prevent exposing on git.
<br>
body-parser : convert/pass encoded data from post on to req.body
<br>
<a href="https://github.com/ttezel/twit">twit</a>: Offical twitter SDK for nodeJs, where oauth2 authentication is predefined, the only thing user has to do is pass consumer_key, consumer_secret etc
these keys will be used by twit everytime an api request has been made which will work bascially like oauth in an abstacted way.

<br>
<h3>Setting up twitter developer console</h3>
<ol>
<li>Visit the Twitter Developers Site. The first thing you need to do is head on down to <a href="dev.twitter.com">here</a></li>
<li>Sign in with your Twitter Account.</li>
<li>Go to My Applications.</li>
<li>Create a New Application.</li>
<li>Fill in your Application Details.</li>
<li>Create Your Access Token.</li>
<li>Create a New Application.</li>
<li>Choose what Access Type You Need. (read only, read and write etc).</li>
<li>Then you will recieve 4 tokens which will be used in authentication whenever an api call is been made.</li>
</ol>

<h3>Requests</h3>
<ul>
<li>/getTweets (POST) this request will have either "@userName" or "#hashTag" and will determine which route will be selected next.</li>
<li>/h/{hashTag} (GET) this request will envoked from /getTweets if #hashTag, and will fetch recent tweets having #hashTag in it.</li>
<li>/h/{userName} (GET) this request will envoked from /getTweets if @userName, and will fetch all activities of @userName by recency.</li>
</ul>

<h3>Client side (views/*.ejs)</h3>
<ul>
<li>home.ejs : Home page containing textbox for #hashTag and @userName.</li>
<li>user.ejs : Will render @userName tweets with date.</li>
<li>hash.ejs : Will render #hashTag tweets with date.</li>
</ul>

<h3>Routes</h3>
<ul>
<li>getUser : This is a GET request from <a href="dev.twitter.com">twit</a> module where 
'statuses/user_timeline' is route where  tweets will be retrieved from twitter api and { screen_name: `${username}`,  tweet_mode : "extended"}
are screen name of the user and tweet_mode extended to retreive any truncated tweets such has "what a lovely day today..." </li>

<li>getHashTagInfo: This is a GET request from <a href="dev.twitter.com">twit</a> module where 
'search/tweets' is route where  tweets will be retrieved from twitter api containing #{hashTag} and { q : `${username}`,  tweet_mode : "extended"}
are specific hashTag and tweet_mode extended to retreive any truncated tweets such has "#india is a beautiful country..." </li>
</ul>

<h3>Setting up files</h3>
<ol>
<li>Clone the repository.</li>
<li>Create .env file inside same directory containing consumer_key, consumer_secret, access_token, access_token_secret.</li>
<li>In command run node app.</li>
<li>In browser localhost:1000.</li>
</ol>

<h4>".env" file</h4>
<a href="https://imgflip.com/gif/365x08"><img src="https://i.imgflip.com/365x08.gif" title="made at imgflip.com"/></a>

<h4>Home</h4>
<a href="https://imgflip.com/gif/365x2b"><img src="https://i.imgflip.com/365x2b.gif" title="made at imgflip.com"/></a>

<h4>Username /u/{userName}</h4>
<table> 
            <tr>
            <th>Tweet from main twitter app</th>
            <th>Tweet from twitter api</th>
            </tr>
            <tr>
            <th><a href="https://imgflip.com/gif/3660x4"><img src="https://i.imgflip.com/3660x4.gif" title="made at imgflip.com"/></a></th>
            <th><a href="https://imgflip.com/gif/3660w6"><img src="https://i.imgflip.com/3660w6.gif" title="made at imgflip.com"/></a></th>
            </tr>
 </table>
 
 <h4>Hashtag /h/{hashTag}</h4>
 <table> 
            <tr>
            <th>Tweet from main twitter app</th>
            <th>Tweet from twitter api</th>
            </tr>
            <tr>
            <th><a href="https://imgflip.com/gif/3660yt"><img src="https://i.imgflip.com/3660yt.gif" title="made at imgflip.com"/></a></th>
            <th><a href="https://imgflip.com/gif/3660yb"><img src="https://i.imgflip.com/3660yb.gif" title="made at imgflip.com"/></a></th>
            </tr>
 </table>
 
 <h4>Real time example</h4>
 Takes approximately 10-15 seconds after tweeting from main app.
 <table> 
            <tr>
            <th>Before tweeting</th>
            <th>After around 15 seconds</th>
            </tr>
            <tr>
            <th><a href="https://imgflip.com/gif/3661lp"><img src="https://i.imgflip.com/3661lp.gif" title="made at imgflip.com"/></a></th>
            <th><a href="https://imgflip.com/gif/3661pe"><img src="https://i.imgflip.com/3661pe.gif" title="made at imgflip.com"/></a></th>
            </tr>
 </table>
