<?php
  $servername="localhost";
  $username="root";
  $password="";
  $dbname='bokuwang';
  $conn = new mysqli($servername,$username,$password,$dbname);
  if($conn->connect_error){
    die("链接失败:" . $conn ->connect_error);
  }
  $conn->set_charset('utf-8');
  // echo "链接成功";
?>