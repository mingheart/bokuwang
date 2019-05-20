<?php
/**
 * @Author: Marte
 * @Date:   2019-05-15 20:08:21
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-15 20:38:07
 */
include 'connect.php';
$gid = isset($_GET['gid']) ? $_GET['gid'] : '';
// echo $gid;
// var_dump($gid);
$sql = "SELECT * FROM goodslist WHERE gid='$gid'";
$res = $conn->query($sql);
$content1 = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content1,JSON_UNESCAPED_UNICODE);
?>