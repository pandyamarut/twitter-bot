var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

// set up params which we will return.
var params = {
  q: 'any hashtag you want to search',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

// plugging search params to GET requests to search for the tweets.


// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data, response) {
  // If there is no error, proceed
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      // Get the tweet Id from the returned data
      let id =  data.statuses[i].id_str
      // Try to Favorite the selected Tweet
      let username = data.statuses[i].user.screen_name;
      console.log('tweet: ', `https://twitter.com/${username}/status/${id}`)
    }
  } else {
    console.log(err);
  }
})
