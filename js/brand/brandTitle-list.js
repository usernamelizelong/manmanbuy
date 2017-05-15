define(["jquery","template"],function($,template){

//获取热门品牌排行渲染
       function getXuanRan(){
           $.get("http://139.199.157.195:9090/api/getbrandtitle",function(data){
               console.log(data);
               $(".menu").html(template("brand_tpl",data))
               console.log(data);
           });

       }
    getXuanRan();

    $(".menu").on("click",".brand_d > a",function(){
        //获取标题的id
        var brandTitleId=$(this).attr("brasndTitleId");
        location.href="/htmls/brand/brandTitle-compare.html?brandtitleid="+brandTitleId;
    });


    /*
     *列表页返回顶部
     */
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
    pageScroll();

})
