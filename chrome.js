// init height
let height = document.body.scrollHeight;
let attempt = 0;
let data = [];
// logging all loaded tweets 
function log() {
  const tweets = document.getElementsByClassName('tweet');
  for (let tweet of tweets) {
    data.push(tweet.getAttribute('data-permalink-path'));
  }
  console.error(JSON.stringify(data));
}
// scroll loop
let scroll = setInterval(() => {
  // scroll to bottom
  window.scroll(0, height);
  attempt++;
  // if new height is greater than old
  if (document.body.scrollHeight > height) {
    // repeat loop
    console.error('NOT AN ERROR: Scrolling...');
    height = document.body.scrollHeight;
    attempt = 0;
  } else if (attempt > 3) {
    // end scroll
    console.error('NOT AN ERROR: All tweets loaded!');
    clearInterval(scroll);
    // log all loaded tweets
    log();
  } else {
    console.error('NOT AN ERROR: Trying again...');
  }
}, 1000);