var Twit = require('twit');
var config = require('./config.js');
var fs = require('fs');

var T = new Twit(config);

T.get('statuses/user_timeline', {
  screen_name: 'jadeallencook',
  include_rts: false,
  tweet_mode: 'extended'
}, (err, data, response) => {

  data = data.map((tweet) => {
    var obj = {
      url: undefined,
      id: undefined
    }
    if (tweet.entities.urls[0]) {
      obj.url = tweet.entities.urls[0].expanded_url;
    }
    obj.id = tweet.id;
    console.log(obj.url);
    return tweet;
  });

  fs.writeFile('./data.json', JSON.stringify(data), (err) => {
    if (err) {
      console.log('error');
    } else {
      console.log(data.length + ' tweets found');
    }
  });
})