/* 
* @Author: Marte
* @Date:   2019-05-14 19:16:28
* @Last Modified by:   Marte
* @Last Modified time: 2019-05-15 17:58:46
*/

$(document).ready(function(){
     // 获取验证码,php相关知识,暂时放下.
    $('.get_authcode').click(function () {
        $(".check_img").attr('src', '../authcode.php?_=' + Math.random());
    });
    // 登陆的一些细节
 function login(obj) {

        var $this = $(obj);
        $this.removeAttr('onclick');
        var username = $('#phone').val();
        var authcode = $('#authcode').val();
        var password = $('#password').val();
        var msg = '';

        if (!username) {
            msg = '请输入帐号';
        }
        if (authcode.length != 4) {
            msg = '图形验证码不正确';
        }
        if (!password) {
            msg = '请输入登录密码';
        }

        if (msg) {
            $('.reg-err').html('<p class="cl-rd"><span class="icon-zzzinfo-block">&#xe968;</span>&nbsp;' + msg + '</p>');
            $this.attr('onclick', 'login(this)');
            return false;
        }

        $.post(
            'login.php?act=login_check',
                {username: username, password: password, authcode: authcode, referer:'aHR0cHM6Ly93d3cuYm9va3V1LmNvbQ=='},
            function (data) {
                if (data.status) {
                    window.location.href = data.url;
                } else {
                    $('.reg-err').html('<p class="cl-rd"><span class="icon-zzzinfo-block">&#xe968;</span>&nbsp;' + data.message + '</p>');
                    $this.attr('onclick', 'login(this)');
                }
            }, 'json'
        );
    }

 //获取购物车的数量
        function getCartNum(){
            var num = getCookie('gwshoppingcart');
            if(num == null){
                //公共：购物车数量统计
                $.ajax({
                    type: "get",
                    url:"/ajax/cart.php?act=count",
                    dataType: "json",
                    success: function(data) {
                        if( parseInt(data.status) == 200 && parseInt(data.list_number)>0){
                            $('.cart_num').addClass('bc-rd-d pd-0005').html(data.list_number);
                        }
                    }
                });
            }
            if(num >0 ){
                $('.cart_num').addClass('bc-rd-d pd-0005').html(num);
            }
        }

        function getCookie(name) {
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        }

        // 进度条
        $('.progress-box').progress();
        // 
        // 
        //公共：签到
            $('.checkin').on('click',function(){
                $.ajax({
                    type: "post",
                    url:"/ajax/checkin.php?act=signed",
                    data: {},
                    dataType: "json",
                    success: function(data) {
                        if(parseInt(data.status) == 404){
                            window.location.href = data.info;
                        }else{
                            alert(data.info);
                        }
                    },error:function(){
                        alert('签到失败');
                    }
                });
            }); 
           //公共：加入购物车
$('.addcart').on('click',function(){
    var goods_id = $(this).attr('goods-id');
    var number = $(this).attr('goods-number');
    $.ajax({
        type: "post",
        url:"/ajax/cart.php?act=add",
        data: {id:goods_id,number: typeof(number) == 'undefined' ? 1 :number},
        dataType: "json",
        success: function(data) {
            if(parseInt(data.status) == 404){
                window.location.href = data.info;
            }else{
                if(data.status == 200){
                    $('.cart_num').addClass('bc-rd-d pd-0005').html(data.list_number);
                }
                alert(data.info);
            }
        },error:function(){
            alert('加入失败');
        }
    });
});
 getCartNum();
//公共：加入收藏
$('.collect').on('click', function(){
    var _span = $(this).find('span');

    var goods_id = $(this).attr('goods-id');
    if( _span.hasClass('icon-star-line') ){
        $.ajax({
            type: "get",
            url:"/ajax/collect.php",
            data: {act:'collect',type:'add',id:goods_id},
            dataType: "json",
            success: function(data) {
                if(parseInt(data.status) == 1){
                    alert(data.info);

                    _span.removeClass('icon-star-line').addClass('icon-star-block').html('&#xe945;');
                    $('.collect').removeClass('bd-1-a cl-9').addClass('bd-1-bl-d cl-bl-l');
                    


                } else if(parseInt(data.status) == 404){
                    window.location.href = data.info;
                } else {
                    alert(data.info);
                }
            }
        });
    }else{
        confirm('', '你要取消收藏该商品吗?', '', function(res){
            if (res) {
                $.ajax({
                    type: "get",
                    url:"/ajax/collect.php",
                    data: {act:'collect',type:'delete',id:goods_id},
                    dataType: "json",
                    success: function(data) {
                        if(parseInt(data.status) == 1){
                            alert(data.info);

                            _span.removeClass('icon-star-block').addClass('icon-star-line').html('&#xe946;');
                            $('.collect').removeClass('bd-1-bl-d cl-bl-l').addClass('bd-1-a cl-9');

                        } else if(parseInt(data.status) == 404){
                            window.location.href = data.info;
                        } else {
                            alert(data.info);
                        }
                    }
                });
            }else{
                _span.removeClass('icon-star-line').addClass('icon-star-block').html('&#xe945;');
                $('.collect').removeClass('bd-1-a cl-9').addClass('bd-1-bl-d cl-bl-l');
            }
        });
    }

});
//频道 tab切换
    $(".my_tab").click(function(){
        var tabId = $(this).attr("data-id");
        $(this).addClass('on-click');
        $(this).siblings().removeClass('on-click');

        $("#my_tab_"+tabId).removeClass("dn");
        $("#my_tab_"+tabId).siblings(".my_tab_content").addClass('dn');

        //tablazy 图片加载
        let id = "#my_tab_"+ tabId + ' img'
        let slidingImgs = $(id);
        for (let i = 0; i < slidingImgs.length; i++) {
            // 遍历操作
            if(slidingImgs[i].getAttribute('data-srctaplazy')){
                slidingImgs[i].src = slidingImgs[i].getAttribute('data-srctaplazy');
                slidingImgs[i].removeAttribute('data-srctaplazy');
            }
        }
    });
// 懒加载
        lazyLoading();

        // 菜单
        mouseenterAndTab();


//         <script type="text/javascript" src="./博库网-登录_files/7moorInit.js.下载" async="async">
// </script>
         function openQimooChat(){
        if(chatflag == 1){
            console.log(qimoClientId);
            console.log(m7CardInfo);
        }
        window.qimoChatClick();
    }

// 设计了一些组件和php的知识,先放下
    var qimoClientId = {};
    var m7CardInfo = {
        "left":{
            "url": ""
        },
        "right1": {
            "text": "",
            "color": "",
            "fontSize": 12
        },
        "right2": {
            "text": "",
            "color": "",
            "fontSize": 12
        },
        "right3": {
            "text": "",
            "color": "",
            "fontSize": 14
        },
        "extraInfos": [],
        "url": "//www.bookuu.com/"
    };
    var chatflag = 0;

    //获取用户登陆信息并
    $.ajax({
        type: "post",
        url: "/ajax/user.php",
        dataType: "json",
        success: function (data) {
            var user_str = '';
            if(data.code == "0000" && data.info.is_login == 1){
                $("#header_user_session_userid").val(data.info.userid);
                $("#header_user_session_name").val(data.info.name);
                $("#header_user_session_mobilephone").val(data.info.mobilephone);
                $("#header_user_session_header").val(data.info.header);
                //console.log(11);
                user_str += '欢迎，' + data.info.name;
                user_str += '<span class="pd-0005 cl-c">|</span>';
                user_str += '<a class="mr-30 hover cl-6" href="/login.php?act=loginout" title="退出登录">退出登录</a>';

                qimoClientId = {
                    userId: data.info.userid, 
                    nickName: data.info.name,
                    customField: { //扩展字段，json对象，对象中的key-value都自定义
                        "用户UID":data.info.userid,
                        "用户名称":data.info.name,
                        "手机号码":data.info.mobilephone
                    }
                };
                
                chatflag = 1;

                var dq_goods_id = "";
                                    
                if(dq_goods_id != ""){
                    //扩展信息
                    m7CardInfo = {
                        "left":{
                            "url": "https://bnmppic.bookuu.com/"  // 左侧图片地址，可不填
                        },
                        "right1": {
                            "text": "",  // 首行文字内容，展示时超出两行隐藏，卡片上单行隐藏
                            "color": "#595959",                 // 字体颜色，支持十六位 #ffffff 格式的颜色，不填或错误格式默认#595959
                            "fontSize": 12                      // 字体大小， 默认12 ， 请传入number类型的数字
                        },
                        "right2": {
                            "text": "",        // 第二行文字内容，展示时超出两行隐藏，卡片上单行隐藏
                            "color": "#595959",                 // 字体颜色，支持十六位 #ffffff 格式的颜色，不填或错误格式默认#595959
                            "fontSize": 12                      // 字体大小， 默认12 ， 请传入number类型的数字
                        },
                        "right3": {
                            "text": "¥",           // 第三行文字内容，展示时超出两行隐藏，卡片上单行隐藏
                            "color": "#ff6b6b",                 // 字体颜色，支持十六位 #ffffff 格式的颜色，不填或错误格式默认#ff6b6b
                            "fontSize": 14                      // 字体大小， 默认14 ， 请传入number类型的数字
                        },
                        "extraInfos": [],             // 额外信息，访客不可见，座席点击卡片上的更多可见，可不填，字符串形式的文本数组
                        "url": "//www.bookuu.com/detail.php?id="                     // 点击可跳转的链接
                    };
                }

            }else{
                user_str += '<a class="hover cl-6" href="/login.php" target="_blank" title="登录">登录</a><span class="pd-0005 cl-c">|</span><a class="mr-30 hover cl-6" href="/passport/register.php" target="_blank" title="免费注册">免费注册</a>';
            }

            user_str += '<a class="hover cl-6" href="/download.php" target="_blank" title="下载博库APP"><span class="icon-phone-line cl-bl-l fs-16 tp-3 mr-2 pr">&#xe933;</span>下载博库APP</a>';

            $("#www_user_session_info").html(user_str);

        }
    });

// 滚动交互
        $(window).on('scroll', function(){
            var _scroll = $(window).scrollTop();
            if(_scroll >= 200 ){
                $('#search-container').addClass('active');
            }else{
                $('#search-container').removeClass('active');
            }
        });
        $(".tosearch").click(function(){
            var key = $(this).parent().find(".searchkey").val();
            if(key == ''){
                key = $(this).parent().find(".searchkey").attr('placeholder');
            }
            location.href = '//www.bookuu.com/search.php?k=' + key;
        });

        function getKeyMore(_associateBox,_key){

            console.log('开始请求',_key);
            //获取关联词
            $.ajax({
                type: "post",
                url:"/goods/search.php",
                data: {act:"getMoreKeys",keyword:_key},
                dataType: "json",
                success: function(data) {
                    if(data.length > 0){
                        _associateBox.empty();
                        var str = "";
                        for(var i=0;i<data.length;i++){
                            var search_url = '//www.bookuu.com/search.php?k=' + data[i].key;
                            str += '<li class="associate-content">'+
                                    '<a class="fl" href="'+search_url+'">'+data[i].akey+'</a>'+
                                    '<label class="fr delete"><span class="icon-close-line fr">&#xe919;</span></label>'+
                                    '<div class="cb"></div>'+
                                    '</li>';
                        }
                        _associateBox.append(str);
                    }
                }
            });
        }
        function getHistoryKeys(_associateBox,_key){
            console.log('历史记录',_key);
            //获取最近搜索
            $.ajax({
                type: "post",
                url:"/goods/search.php",
                data: {act:"getHistoryKeys",keyword:_key},
                dataType: "json",
                success: function(data) {
                    if(data.length > 0){
                        _associateBox.empty();
                        var str = '<li class="associate-title">'+
                                '<div class="fl text">最近搜索</div>'+
                                '<label class="fr delete all"><span class="icon-delete-line">&#xe91d;</span></label>'+
                                '<div class="cb"></div>'+
                                '</li>';
                        for(var i=0;i<data.length;i++){
                            var search_url = '//www.bookuu.com/search.php?k=' + data[i].key;
                            str += '<li class="associate-content">'+
                                    '<a class="fl" href="'+search_url+'">'+data[i].key+'</a>'+
                                    '<label class="fr delete"><span class="icon-close-line fr">&#xe919;</span></label>'+
                                    '<div class="cb"></div>'+
                                    '</li>';
                        }
                        _associateBox.append(str);
                    }
                }
            });
        }
                var timer1 = '';    //定时器1
        var timer2 = '';    //定时器2

        $('body').on('hover', '.associate-box li.associate-content', function(){
            $('.associate-box li.associate-content').removeClass('active');
            $(this).addClass('active');
        });

        //输入完成回车搜索
        $('body').on('keyup focus', '.search-box input', function(event){
            var e = event || window.event || arguments.callee.caller.arguments[0];


            var _this = $('.search-box input');
            var _inputId = _this.attr("id");
            var _key = _this.val();
            var _associateContainer = _this.parents('.associate-container');
            var _associateBox = _this.siblings('.associate-box');
            var _associateTitle = _associateBox.find('.associate-title');   //最近搜索
            var _associateLi = $('.associate-box li');
            var _associateLiActive = $('.associate-box li.active');
            // 键盘向上
            if( e && e.keyCode == 38 ){
                var _associateTitleLength = _associateTitle.length;
                var _associateContentLength = _associateLi.length;
                var _associateContentActiveLength = _associateLiActive.length;
                var _index = _associateLiActive.index();
                _associateLi.removeClass('active');
                _index = _index - 1;
                // 历史记录
                if( _associateTitleLength == 0 ){
                    // 第一次focuse
                    if( _index == -1 ) _index = _associateContentLength - 1;
                    if( _associateContentActiveLength == 0 ) _index = 0;
                }else{
                    // 第一次focuse
                    if( _index == 0 ) _index = _associateContentLength - 1;
                    if( _associateContentActiveLength == 0 ) _index = 1;

                }
                _associateLi.eq( _index ).addClass('active');
                _this.val( _associateLi.eq( _index ).find('a').text() );

                return false;
            }
            // 键盘向下
            if ( e && e.keyCode == 40 ){
                var _associateTitleLength = _associateTitle.length;
                var _associateContentLength = _associateLi.length;
                var _associateContentActiveLength = _associateLiActive.length;
                var _index = _associateLiActive.index();
                _associateLi.removeClass('active');
                _index = _index + 1;
                // 历史记录
                if( _associateTitleLength == 0 ){
                    if( _associateContentActiveLength == 0 || _index == _associateContentLength ) _index = 0;
                }else{
                    if( _associateContentActiveLength == 0 || _index == _associateContentLength ) _index = 1;
                }
                _associateLi.eq( _index ).addClass('active');
                _this.val( _associateLi.eq( _index ).find('a').text() );

                return false;
            }
            //清空
            _associateBox.empty();
            // 文字为空，显示搜索记录
            if( _key == '' ){
                //延迟xx
                if(timer2){
//                    console.log(22,timer2);
                    clearTimeout(timer2);
                    console.log('未结束',timer2);
                } else{
                    console.log('开始了');
                }
                timer2 = setTimeout(function(){getHistoryKeys(_associateBox, _key)},600);
                _associateBox.addClass('history');
            }else{
                //延迟xx
                if(timer1){
//                    console.log(11,timer1);
                    clearTimeout(timer1);
                    console.log('未结束',timer1);
                } else{
                    console.log('开始了');
                }
                timer1 = setTimeout(function(){getKeyMore(_associateBox, _key)},600);
                _associateBox.removeClass('history');
            }
            // 搜索出来数据不为空才显示出来
            _associateBox.css('display', 'block');
            // enter键
            if( e && e.keyCode == 13 ){
                if( _key == '' ){
                    _key = _this.attr('placeholder');
                    _this.val(_key);
                }
                location.href = '//www.bookuu.com/search.php?k=' + _key;
            }
        });
        $('.search-box input').on('blur', function(){
            blurFunc();
        });
        // 删除历史记录
        $('body').on('click', '.associate-box label.delete', function(){
            var _this = $(this);
            var _associateBox = _this.parents('.associate-box');
            var _input = _this.parents('.search-box').find('input');
            var _associateContent = _this.parents('.associate-content');
            var _associateTitle = _associateBox.find('.associate-title');
            var keyword = _associateContent.children("a").html();
            if( _this.hasClass('all') ){
                _associateBox.empty();
                keyword = '';
            }
            _associateContent.remove();
            var _contentLength = _associateBox.find('.associate-content').length;
            if( _contentLength == 0 ){
                _associateTitle.remove();
                _associateBox.css('display', 'none');
            }else{
//                _input.focus();
            }
            //删除记录
            $.ajax({
                type: "post",
                url:"/goods/search.php",
                data: {act:"deleteKeys",keyword:keyword},
                dataType: "json",
                success: function(data) {

                }
            });
        });
        $('.associate-box').on('mouseenter', function(){
            var _input = $('.search-box input');
            _input.off('blur');
        });
        $('.associate-box').on('mouseleave', function(){
            var _input = $('.search-box input');
            _input.on('blur', function(){
                blurFunc();
            });
        });
        function blurFunc(){
            var _associateBox = $('.search-box .associate-box');
            _associateBox.css('display', 'none');
        }
    // 首页公共功能
<script>

    //关键字搜索
    $("#keysearch").click(function(){
        var cate_cid = $(".allcategory a:last").attr("data-cid");
        var key = $(this).parent().find(".searchkey").val();
        if(key != ''){
            location.href = '//www.bookuu.com/search.php?cid='+cate_cid+'&k=' + key;
        }
    });

    // 懒加载
    lazyLoading();

    // 菜单
    mouseenterAndTab();

    // 商品检索列表排序
    $('.sort').on('click', function(){
        var sorttype = $(this).attr("data-type");
        if(sorttype != ''){
            var url = bildurl('sorttype',1,sorttype,'');
            location.href = url;
        }
    });

    //促销、现货选购
    function doselect(obj,val){
        var isselect = parseInt($("#"+val).val());
        var url = bildurl('page',0,1,'');
        if(isselect==1){
            obj.classList.remove("bc-bl");
            obj.classList.remove("cl-f");
            $("#"+val).val('0');
            url = bildurl(val,0,0,url);
        } else  {
            obj.classList.add("bc-bl");
            obj.classList.add("cl-f");
            $("#"+val).val('1');
            url = bildurl(val,0,1,url);
        }
        location.href = url;
    }

    //重构url
    function bildurl(key,type,value,url){
        if(url == ''){
            url = location.href;
        }

        if(type ==1 ){
            value = value + '_desc';
            if(value == ''){
                value = value.replace(/desc/, "asc");
            }else{
                value = value.replace(/desc/, "desc");
            }
        }
        if(url.indexOf(key) > -1){
            if('activityonly' == key){
                url=url.replace(/activityonly=\d+/,key+'='+value);
            }
            if('havestoreonly' == key){
                url=url.replace(/havestoreonly=\d+/,key+'='+value);
            }
            if('sorttype' == key){
                url=url.replace(/sorttype=\w*/gi,key+'='+value);
            }
            if('page' == key){
                url=url.replace(/page=\d+/,key+'='+value);
            }
        }else{
            url += '&'+key+'='+value;
        }

        return url;
    }

    //展现样式切换 重构url
    $(".search-tab-title li").click(function(){
        url = location.href;
        var type = $(this).attr('data-type');

        if(url.indexOf('showtype') > -1){
            url=url.replace(/showtype=\d+/,'showtype='+type);
        }else{
            url += '&showtype='+type;
        }
        location.href = url;
    });

</script>


 $(function(){
            //默认搜索词更新
            var bar_type = 'detail';
            if(bar_type == 'index' || bar_type == 'detail'){
                $("#gudingsearch").attr('value','');
            }
            $.ajax({
                type: "post",
                url: "/ajax/getdefaultkey.php",
                dataType: "json",
                success: function (data) {
                    var defaultkey = '';
                    if(data.code == "0000"){
                        defaultkey = data.info.defaultkey;
                        $("#gudingsearch").attr('placeholder',defaultkey);
                    }
                }
            });
        })

//获取购物车的数量
function getCartNum(){
    var num = getCookie('gwshoppingcart');
    if(num == null){
        //公共：购物车数量统计
        $.ajax({
            type: "get",
            url:"/ajax/cart.php?act=count",
            dataType: "json",
            success: function(data) {
                if( parseInt(data.status) == 200 && parseInt(data.list_number)>0){
                    $('.cart_num').addClass('bc-rd-d pd-0005').html(data.list_number);
                }
            }
        });
    }
    if(num >0 ){
        $('.cart_num').addClass('bc-rd-d pd-0005').html(num);
    }
}


   $(function(){
            // 商品详情
            $('#slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel"
            });
            $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 80,
                itemMargin: 5,
                asNavFor: '#slider'
            });

            // 商品列表
            $('.flexslider.product-six').flexslider({
                animation: "slide",
                animationLoop: false,
                itemWidth: 200,
                itemMargin: 0,
                controlNav: ''
            });
        });

    // 单张图片放大
        $('.action-zoom').on('click', function(){
            var _src = $(this).siblings('.square-box.one-one').data('tmp');
            if ( ! _src ) {
                // _src = 'https://bnmpstyle.bookuu.com/wap/images/wu.jpg';
            }
            var obj = {
                color: '#000',
                zoomboxHtml:  '<div class="wd-50p ma"><div class="bgimg square-box one-one" style="background-image: url(' + _src + ');"></div></div>'
            };
            imgZoom(obj);
        });
         //当滚到动 评论模块时候，自动加载内容
        var isload = 0;
        $(window).scroll(function () {
            var bodyheight = 1400;//body 中几个相对固定的div的高度之和
            var headerheight = $(".header").height();//头部高度
            var goodsheight = 550;
            var cainixihuan = '0';
            var detailheight = $(".goods_destail_show").height();
            var contetnheight = $(".content_height").height();//动态内容详情的高度
            var scrollTop = $(window).scrollTop();//距离滚动条顶端的距离
            var content = $('#anchor-judge').find('div');
            var ccon = '<img src="https://bnmpstyle.bookuu.com/www/images/loading.gif" style="margin-top:20px;">';
            var guding = headerheight+goodsheight+parseInt(cainixihuan);
            var biandong = 0;
            if(contetnheight < detailheight){
                biandong = contetnheight;
            }else{
                biandong = detailheight;
            }
            //当滚动条滑动到据底部120px时触发
            if(scrollTop >= guding+biandong){
                if(content.length == 0 && isload == 0){
                    isload = 1;
                    ajaxloadcollect('judge');
                }
            }
        });

        //排序
        function sortt(str){
            var arr = str.split(",");
            arr.sort();
            return arr.join(",");
        }

         function ajaxloadcollect(_type){
            $('#anchor-' + _type).html('<img src="https://bnmpstyle.bookuu.com/www/images/loading.gif" style="margin-top:20px;">');
            $.ajax({
                type: "get",
                url:"/ajax/assess.php",
                data: {act:'detail',type:'list',goods_id:$('#anchor-' + _type).attr("goods-id")},
                dataType: "html",
                success: function(data) {
                    $('#anchor-' + _type).html(data);
                }
            });
        }
        var tel = false;

        function sendReminder(activity_id){
            var goods_id = $("#rush_goods_id").val();
            var phone = $("#tel-number").val();

            //发送
            $.ajax({
                type: "post",
                url: "/system/sendsms.php",
                dataType: "json",
                data: { "act": "sendRushSms","goods_id":goods_id,"activity_id":activity_id,"phone":phone},
                success: function (data) {

                    //清空错误信息
                    $('.reminds-err').html("").hide();
                    //隐藏设置弹窗
                    $('.remind-tip').addClass('hidden');

                    if(data.code == "0000"){
                        location.href = location.href;
                    }else{
                        alert(data.msg);return false;
                    }
                }
            });
        }

        function checkPhone(telNumber){
            var reg = /^1[3|4|5|7|8|9][0-9]\d{8}$/;
            if(telNumber == '' || !reg.test(telNumber)){
                $('.reminds-err').html("请输入正确的手机号").show();
                return false;
            }
            return true;
        }

         // input
        function MyinputChange(_this){
            var goods_store = parseInt($(".goods-store").attr("goods-store"));
            var _val = parseInt( $(_this).val() ),
                    _number = $(_this).parents('.delete-box').find('.number-box'),
                    _addBox = $(_this).siblings('.count-add'),
                    _subBox = $(_this).siblings('.count-sub');

            // 负数和非int型，强制转换为1
            if( isNaN(_val) || _val <= 1 ){
                _subBox.addClass('cl-c');
                _addBox.removeClass('cl-c');
                _val = 1;
            }

            if(_val > goods_store){
                alert('库存数量不足',function(){
                    _val = 1;
                    _addBox.removeClass('cl-c');
                    _subBox.addClass('cl-c');
                    $(_this).val(_val);
                    $(".addcart").attr("goods-number",_val);
                    return false;
                });
            } else{
                _addBox.removeClass('cl-c');
                _subBox.removeClass('cl-c');
            }

            $(_this).val( _val );
            $(".addcart").attr("goods-number",_val);
        }
});