<?php
  /* inject dependencies */
  include_once("config.php");
  include_once("library/library.php");
  console("Account: @" . $account);

  /* cache build vars */
  $host = "https://twitter.com/";
  $url = $host . $account;

  /* grab html */
  $accountHTML = file_get_contents($url);
  $tweetCount = getBetweenText($accountHTML, 'data-is-compact="false">', '</span>');
  $tweetCount = (int)str_replace(' ', '', $tweetCount);
  console("Tweets: " . $tweetCount);
?>