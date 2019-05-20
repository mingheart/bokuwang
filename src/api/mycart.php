<?php
/**
 * @Author: Marte
 * @Date:   2019-05-18 02:33:23
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-05-20 17:27:51
 */
include 'connect.php';
$uid = isset($_GET['uid']) ? $_GET['uid'] : '';
// echo $uid;
// var_dump($uid);
$sql = "SELECT * FROM mycart where uid=$uid and type='儿童科教'";
$res = $conn->query($sql);
// var_dump($res);
$content1 = $res->fetch_all(MYSQLI_ASSOC);
// var_dump($res);
$sql2 = "SELECT * FROM mycart where uid=$uid and type='科学历史'";
$res2 = $conn->query($sql2);

$content2 = $res2->fetch_all(MYSQLI_ASSOC);

$data = array(
        
        'goodslist1' => $content1,
        'goodslist2' => $content2,
    );
echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>