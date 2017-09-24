<?php

define ('SYSPATH' , 'system/');

require SYSPATH."client.php";

require SYSPATH.'site.php';
require ('site/action/main.php');
//require ('public/site/test1.html');
// $action = input_get('action'); 
// if (file_exists('site/action/'.$action.'.php')) {
// require('site/action/'.$action.'.php');
// }
// else {
//     echo 'URL not found';
// }   



?>