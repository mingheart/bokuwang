<?php
	
	//接收数据，做查询，查到了就可以登陆，查不到就是账号或密码不对
	include 'connect.php';

	$name = isset($_POST['name']) ? $_POST['name'] : '';
	$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
	
	
	// echo $name,$psw;
	//1.sql语句
	$sql = "SELECT * FROM user WHERE uname='$name' AND upwd='$psw'";
	// $sql = "SELECT * FROM user WHERE uname='13420108226' AND upwd='123456'";

	//2.执行语句
	$res = $conn->query($sql);//结果集
	
	
	
	//3.找到就返回状态
	// if($res->num_rows) {
	// 	//找到，允许登陆
	// 	$exi='yes';
	// }else{
	// 	//找不到，不允许登陆
	// 	$exi='no';
	// }
	$content =$res->fetch_all(MYSQLI_ASSOC);
	// echo $content;
	// var_dump($content[0]);
	// $data = array(
	// 	'exi' =>$exi,
	// 	'goodslist'=>$content,
	// 	)
	echo json_encode($content[0],JSON_UNESCAPED_UNICODE);
	//下面可以关闭数据库
	// $res->close();
	// $conn->close();
	
?>