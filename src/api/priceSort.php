<?php
/**
 * @Author: Marte
 * @Date:   2019-04-28 22:10:19
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-04-28 22:37:47
 */
   include 'conn.php';
   // $page = isset($_GET['page']) ? $_GET['page'] : '';//第几页
    // $num = isset($_GET['num']) ? $_GET['num'] : '';//每页多少条
    // $type = isset($_GET['type']) ? $_GET['type'] : '';
    // $order = isset($_GET['order']) ? $_GET['order'] : '';
    $price1 = isset($_GET['price1']) ? $_GET['price1'] : '';
    $price2 = isset($_GET['price2']) ? $_GET['price2'] : '';
    // var_dump($price1,$price2);
    // $index = ($page - 1) * $num;
    $sql="select *from goods where price >=$price1 and price<=$price2";
    $res = $conn->query($sql);
    // var_dump($res);
    // $sql2="select *from goods where content LIKE '%$search%' LIMIT $index,$num";
    // $res2 = $conn->query($sql2);
    $content1 = $res->fetch_all(MYSQLI_ASSOC);
    // $data = array(
    //     'total' => $res->num_rows,//总条数
    //     'goodslist' => $content1,
    //     'page' => $page,
    //     'num' => $num
    // );
    
    echo json_encode($content1,JSON_UNESCAPED_UNICODE);
?>