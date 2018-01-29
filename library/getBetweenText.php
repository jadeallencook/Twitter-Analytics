<?php
  function getBetweenText($str,$from,$to) {
    $sub = substr($str, strpos($str,$from)+strlen($from),strlen($str));
    return substr($sub,0,strpos($sub,$to));
  }
?>