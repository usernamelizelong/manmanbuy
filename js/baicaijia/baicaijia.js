define(["jquery", 'common', "template"], function ($, undefined, template) {

    //初始化
    init();

    function init(){
        var titleid=0;
        gettitleid();
        getlist(titleid);
        clickTitleEvent();
        pageScroll();
    }


    function gettitleid(){
        $.get("http://139.199.157.195:9090/api/getbaicaijiatitle", function (data) {
            $(".ui-navigator-list").html(template("bcj_tpl", data));

            /*搜索框拉动*/
            /*计算产品块标签页ul的宽度*/
            var allLis=$(".tabs").find("li");
            var totalWidth=0;/*总宽度*/
            allLis.each(function(index,value){
                totalWidth=totalWidth+$(value).outerWidth();
                /*width:只能获取内容的宽度
                 * outerWidth:获取内容+padding+border*/
            });
            $(".tabs > ul").width(totalWidth);
        });
        /*实现滑动操作*/
        itcast.iScroll({
            /*这里只能使用dom元素*/
            swipeDom:$(".tabs")[0],
            swipeType:"x",
            swipeDistance:400,
        })

    }

    //搜索框切换
    $('.searchbtn').on('click',function(){
       $('.searchbox').slideToggle();
        $('.searchbtn').toggleClass('on');

    });


    /*商品列表渲染*/
    function getlist(titleid){
        $.get("http://139.199.157.195:9090/api/getbaicaijiaproduct?titleid="+titleid, function (data) {
            $(".bcj-list").html(template("pro_tpl", data));
        });
    }

    /* 点击标题事件*/
    function clickTitleEvent() {
        $(".tabs").on("click", " li a", function () {
            var titleid = $(this).data("titleid");
            // 渲染选中的标题
            $(".tabs ul li:eq(" + titleid + ")").addClass("active").siblings().removeClass("active");

            getlist(titleid);
        });
    }


    /*
     *列表页返回顶部
     */
    function pageScroll() {
        /*获取卷去高度*/
        function getScrollTop() {
            //console.log(document.documentElement.scrollTop+ document.body.scrollTop);
            return document.documentElement.scrollTop + document.body.scrollTop;
        }
            //设置卷去高度
        function setScrollTop(value) {
            if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop = value;
            } else {
                document.body.scrollTop = value;
            }
        }
        //判断卷去高度来显隐
        function isShowTop() {
            getScrollTop() > 300 ? $('#gotop').show() : $('#gotop').hide();
            //console.log(111);
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
