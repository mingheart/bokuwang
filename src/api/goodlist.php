<?php
/**
 * @Author: Marte
 * @Date:   2019-05-17 16:25:12
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-17 16:52:55
 */
include 'connect.php';
 $num = isset($_GET['num']) ? $_GET['num'] : '';//每页多少条
 $index=0;
 // echo $num,$index;
  $sql = "SELECT * FROM goodslist LIMIT $index,$num";
  $res = $conn->query($sql);
  // var_dump( $res);
  $content = $res->fetch_all(MYSQLI_ASSOC);
  echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>