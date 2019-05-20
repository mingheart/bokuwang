<?php
/**
 * @Author: Marte
 * @Date:   2019-04-26 19:15:46
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-14 15:28:24
 */
    include 'connect.php';
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $psw = isset($_POST['psw']) ? $_POST['psw'] : '';
    $sql = "INSERT INTO user(uname,upwd) VALUES('$name','$psw')";
    $res = $conn->query($sql);
     // var_dump($res);
    if($res) {
        //插入成功
        echo 'yes';
    }else{
        echo 'no';
        }

?>