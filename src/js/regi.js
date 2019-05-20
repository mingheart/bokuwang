/* 
* @Author: Marte
* @Date:   2019-05-14 14:49:55
* @Last Modified by:   Marte
* @Last Modified time: 2019-05-20 19:56:57
*/

$(document).ready(function(){
    // 能够获取cookie的话,跳到首页
    if(getCookie('phone')){
            alert('已经登陆成功');
           location.href='../index.html'; 
        }
    console.log($('.reg-err'));
    var isok1=false;
    // 失去焦点事件,手机号的验证
    $('#phone').on('blur',function(){
        console.log($('#phone').val().trim());
        var phone =$('#phone').val().trim();
        if(phone){
            var reg = /^1[3-9]\d{9}$/;
            var res = reg.test(phone);
            if(res){
                $.ajax({
                    type : 'post',
                    url : '../api/register.php',
                    data : 'name=' + $('#phone').val(),
                    success : function(str) {
                     // console.log(str);
                        if(str == 'yes') {
                            $('.reg-err').html('可以注册');
                            $('.reg-err').css('color','#58bc58');
                            isok1 = true;
                        }else{
                            $('.reg-err').html('该用户已存在');
                            $('.reg-err').css('color','red');
                            isok1 = false;
                        }
                    }
                })
            }else{
                $('.reg-err').html('请输入正确的手机号');
                $('.reg-err').css('color','red');
                isok1 = false;
            }
        }else{
            $('.reg-err').html('手机号不能为空');
             $('.reg-err').css('color','red');
             isok1 = false;
        }
        
    });
    // 二维码的验证
    var isok2=false;
    var verifyCode = new GVerify("v_container");
    $('.reg-btn').on('click',function(){
        var res = verifyCode.validate($('#code_input').val());
        // if(res){
        //     $('.check_img1').html('验证码通过');
        //     $('.check_img1').css({'color':'#58bc58','textAlign':'center','lineHeight':'34',});
        // }
        if(res){
                $('.check_img1').html('验证码通过');
                $('.check_img1').css({'color':'#58bc58'});
                isok2=!isok2;
        }else{
                $('.check_img1').html('验证码错误');
                $('.check_img1').css({'color':'red'});
        }
    })
    // 密码验证,字母开头,大于6
    var isok3=false;
    $('#password').on('blur',function(){
        var pwd=$('#password').val().trim();
        if (pwd){
            var reg = /^[a-zA-Z].{5,}$/;
            var res = reg.test(pwd);
            if(res){
                $('.check_img2').html('密码格式正确');
                $('.check_img2').css({'color':'lightgreen'});
                isok3=!isok3;
            }else{
                 $('.check_img2').html('密码格式不对');
                 $('.check_img2').css({'color':'red'});
                 isok3 = false;
            }
        }else{
            $('.check_img2').html('密码不能为空');
            $('.check_img2').css({'color':'red'});
            isok3 = false;
        }
    })
    // 短信验证
    var isok5=false;
    var temp;
    $('#getchecknum').on('click',function(){
        $.ajax({
                type : 'get',
                url : '../api/yanzheng.php',
                data : '&tpl_value=190578',
                success : function(str) {
                    console.log(str);
                    temp=str;
                }      
            })
    })
    // console.log(temp);
    var isok4;
    // 点击注册按钮
    $('.reg-btn').on('click',function(){
        if($('#treaty-btn').is(':checked')===true){
            isok4=true;
         }else{
            isok4=false;
         }
         console.log(isok1,isok2,isok3,isok4);
        if(isok1&&isok2&&isok3&&isok4){
            $.ajax({
                type : 'post',
                url : '../api/reg.php',
                data : 'name=' + $('#phone').val() + '&psw=' + $('#password').val(),
                success : function(str) {
                    if(str == 'yes') {
                        //成功：跳转到登陆页
                        // location.href = '03login.html?' + username.value;
                        alert('注册成功');
                        var timer=setTimeout(function(){
                            location.href = 'login.html?' + $('#phone').val();
                        },800);
                        
                    }else{
                        alert('注册失败');
                    }
                }      
            })
        }else{
            $('.reg-err').html('请完善信息');
             $('.reg-err').css('color','red');
        }
    })
        
    

});