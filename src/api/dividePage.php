<?php
/**
 * @Author: Marte
 * @Date:   2019-04-28 11:24:33
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-15 16:06:27
 */
   include 'connect.php';
   $page = isset($_GET['page']) ? $_GET['page'] : '';//第几页
    $num = isset($_GET['num']) ? $_GET['num'] : '';//每页多少条
    $type = isset($_GET['type']) ? $_GET['type'] : '';
    $order = isset($_GET['order']) ? $_GET['order'] : '';
    //1.写sql语句
    $index = ($page - 1) * $num;
    // echo $page,$num,$type,$order,$index;
       // 1    10   price  ''    0  
    // var_dump($page,$num,$type,$order,$index);
    //没有排序之前只需要获取第一页
    if($type) {
        //有排序
        $sql = "SELECT * FROM goodslist ORDER BY $type $order LIMIT $index,$num";    
    }else {
        //没有排序
        $sql = "SELECT * FROM goodslist LIMIT $index,$num";
    }
    //2.执行语句
    $res = $conn->query($sql);
    
//  var_dump($res);//结果集，想要内容
    
    //3.获取结果集里面的内容
    $content1 = $res->fetch_all(MYSQLI_ASSOC);
    
 // var_dump($content1);//结果集，想要内容
 // echo json_encode($content1,JSON_UNESCAPED_UNICODE);
    
//     2.获取总条数
    $sql2 = 'SELECT * FROM goodslist';
    
//     //执行语句
    $res2 = $conn->query($sql2);

//  var_dump($res2);

    //关联数组：存多一点数据再给前端
    $data = array(
        'total' => $res2->num_rows,//总条数
        'goodslist' => $content1,
        'page' => $page,
        'num' => $num
    );
    
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>