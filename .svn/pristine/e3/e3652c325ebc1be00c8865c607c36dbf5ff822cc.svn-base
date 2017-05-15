/**
 * Created by Administrator on 2017/3/7.
 */
define(["jquery","util","template","lazy"],function($,util,template,lazy){
    //获取十大品牌标题渲染
    var brandtitleid = util.getQueryString('brandtitleid');
    $.get("http://139.199.157.195:9090/api/getbrand?brandtitleid="+brandtitleid,function(data){
        $(".v_good_list").html(template("brand_tpl",data))
    });


    //获取产品销售排行渲染
    $.get("http://139.199.157.195:9090/api/getbrandproductlist?brandtitleid="+brandtitleid+"&pagesize=4",function(data){
        $(".m_l img").lazyload();
        $(".v_sale_menu").html(template("brand_tpl2",data));
    //获取销量排行商品评论的渲染
        var productid=$('.v_sale_menu > ul').attr('data-proid');
        console.log(productid);


        $.get("http://139.199.157.195:9090/api/getproductcom?productid="+productid,function(res){
            $(".m_img img").lazyload();
            res.result.productImg = data.result[0].productImg;
            res.result.productName = data.result[0].productName;
            $(".v_comment_menu").html(template("brand_tpl3",res))

        })
    });


    //列表页返回顶部
    pageScroll();
    function pageScroll() {
        function getScrollTop() {
            return document.documentElement.scrollTop + document.body.scrollTop;
        }

        function setScrollTop(value) {
            if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop = value;
            } else {
                document.body.scrollTop = value;
            }
        }

        function isShowTop() {
            getScrollTop() > 300 ? $('#gotop').show() : $('#gotop').hide();
        }

        var oldonscroll = window.onscroll; //得到上一个onload事件的函数
        if (typeof window.onscroll != 'function') { //判断类型是否为'function',注意typeof返回的是字符串
            window.onscroll = function () {
                isShowTop();
            };
        } else {
            window.onscroll = function () {
                isShowTop(); //调用当前事件函数
                oldonscroll(); //调用之前覆盖的onload事件的函数---->由于我对js了解不多,这里我暂时理解为通过覆盖onload事件的函数来实现加载多个函数
            }
        }

        $('#gotop').bind('touchstart', function () {
            var goTop = setInterval(scrollMove, 8);

            function scrollMove() {
                setScrollTop(getScrollTop() / 1.1);
                if (getScrollTop() < 1) clearInterval(goTop);
            }
        })
    }

})