<?php
/**
 * @Author: Marte
 * @Date:   2019-05-19 23:01:37
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-20 17:38:05
 */
include 'connect.php';
$uid = isset($_GET['uid']) ? $_GET['uid'] : '';
// echo $uid;
$sql4 = "SELECT sum(qty)  FROM mycart where uid='$uid'";
$res4 = $conn->query($sql4);
// var_dump($res4->fetch_field());
// var_dump($res4->fetch_field());
$content=$res4->fetch_all();
// echo $content;
echo json_encode($content[0],JSON_UNESCAPED_UNICODE);
?>