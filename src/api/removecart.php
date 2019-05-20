<?php
/**
 * @Author: Marte
 * @Date:   2019-05-18 19:20:31
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-18 19:40:24
 */
include 'connect.php';
$gid = isset($_GET['gid']) ? $_GET['gid'] : '';
$uid = isset($_GET['uid']) ? $_GET['uid'] : '';
$sql="delete from mycart where gid=$gid and uid=$uid";
$res = $conn->query($sql);
echo 'yes';
?>