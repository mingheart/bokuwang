<?php
/**
 * @Author: Marte
 * @Date:   2019-04-26 20:15:43
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-14 15:16:56
 */
    //后端：接收前端传来的数据，查询用户名是否存在，返回状态给前端
    include 'connect.php';
    
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    // echo $name;
    
    //1.写sql语句
    $sql = "SELECT *FROM user WHERE uname='$name'";
    
    //2.执行sql语句
    $res = $conn->query($sql);//结果集
    
    // var_dump($res);
    //直接判断返回状态
    if($res->num_rows) {
        //找出，存在，不给注册
        echo 'no';
    }else{
        //找不到，可以注册
        echo 'yes';
    }
?>