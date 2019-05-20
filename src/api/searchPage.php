<?php
/**
 * @Author: Marte
 * @Date:   2019-04-28 19:49:21
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-15 17:03:49
 */
include 'connect.php';
   $page = isset($_GET['page']) ? $_GET['page'] : '';//第几页
    $num = isset($_GET['num']) ? $_GET['num'] : '';//每页多少条
    $type = isset($_GET['type']) ? $_GET['type'] : '';
    $order = isset($_GET['order']) ? $_GET['order'] : '';
    $search = isset($_GET['search']) ? $_GET['search'] : '';
    // echo  $search;
    $index = ($page - 1) * $num;
    $sql="select *from goodslist where bookname LIKE '%$search%'";
    $res = $conn->query($sql);
    // var_dump($res);
    $sql2="select *from goodslist where bookname LIKE '%$search%' LIMIT $index,$num";
    $res2 = $conn->query($sql2);
    $content1 = $res2->fetch_all(MYSQLI_ASSOC);
    $data = array(
        'total' => $res->num_rows,//总条数
        'goodslist' => $content1,
        'page' => $page,
        'num' => $num
    );
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>