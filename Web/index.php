<?php
$action = isset($_GET['action']) ? $_GET['action'] : false; 
if (file_exists('site/action/'.$action.'.php')) {
require('site/action/'.$action.'.php');
}
else {
    echo 'URL not found';
}

?>