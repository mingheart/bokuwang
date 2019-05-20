<?php
/**
 * @Author: Marte
 * @Date:   2019-05-16 11:26:01
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-20 11:30:31
 */
include 'connect.php';
   $gid = isset($_GET['gid']) ? $_GET['gid'] : '';//第几页
   $uid = isset($_GET['uid']) ? $_GET['uid'] : '';
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : '';//每页多少条
    $type = isset($_GET['type']) ? $_GET['type'] : '';
    $bookname = isset($_GET['bookname']) ? $_GET['bookname'] : '';
    $price = isset($_GET['price']) ? $_GET['price'] : '';
    $qty = isset($_GET['qty']) ? $_GET['qty'] : '';
    // echo $gid,$imgurl,$type,$bookname,$price,$qty,$uid;
    // var_dump($gid,$imgurl,$type,$bookname,$price,$qty);
    $sql="select *from mycart where gid=$gid and uid=$uid";
    // echo $sql;
    
    
    
    $res = $conn->query($sql);
    // echo $res;

    
    // echo $res;
        if($res->num_rows){
        // $qty1=($qty+1);
            // echo $qty1,$gid;
        $sql2="UPDATE mycart SET qty=qty+$qty WHERE gid=$gid and uid=$uid";
            $res2 = $conn->query($sql2);
            // echo "yes";
            $test='yes';
        }else{           
            $sql3="INSERT INTO mycart(uid,gid,imgurl,bookname,price,type,qty) VALUES('$uid','$gid','$imgurl','$bookname','$price','$type',$qty)";
             $res3 = $conn->query($sql3);
              // echo "yes"; 
              $test='yes' ;
        } 
    $sql4 = "SELECT sum(qty)  FROM mycart where uid=$uid";
    $res4 = $conn->query($sql4);
   //关联数组：存多一点数据再给前端
    $data = array(
        'total' => $res4->fetch_all(MYSQLI_ASSOC),//总条数
        'test' => $test,
    );
    echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>