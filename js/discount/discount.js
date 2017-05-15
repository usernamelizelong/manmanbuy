/**
 * Created by hywz on 2017/3/7.
 */

define(['jquery','template'],function($,template) {


    $(function () {
//一开始定义objdata,用来存放回调完以后,从后台拿到的所有数据
        var objdata = [];
        var index = 0;
//方法的调用(初始化)
        init();
//方法的定义
        function init() {
            var count = 6;
            index = count;
            getList(count);
            $(window).on("scroll", function () {
//这里是判断当下标已经走到底了,所以的数据都渲染完,就停止
                if (index == objdata.length) {
                    return false;
                }
                var newarr = [];
                var boxOffsetTop = $(".discount").offset().top;
                var boxHeight = $(".discount").height();
                var windowScrollTop = $(window).scrollTop();
                var windowHeight = $(window).height();
                if ((boxOffsetTop + boxHeight) - (windowScrollTop + windowHeight) < 150) {
//让index每次加2,加完后的数据放在一个新数组里
                    newarr.push(objdata[index++]);
                    newarr.push(objdata[index++]);
//只渲染加2的这两个数据,追加到原有的数据后面去
                    var html = template("commodity-tpl", {list: newarr});
                    $(".row").append(html);
                }
            });
        }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        function getList(count) {
            if ($(".border-img").hasClass("loading")) {
                return false;
            }
            ;
            $.ajax({
                url: "http://139.199.157.195:9090/api/getinlanddiscount",
                beforeSend: function () {
                    $(".border-img").addClass("loading")
                },
                success: function (data) {
                    objdata = data.result;
//count上面已经定义了等于6,所以这里就是一开始只拿到下标1到6的数据
                    var arr = data.result.slice(0, count);
                    var html = template("commodity-tpl", {list: arr});
                    $(".row").html(html);
                },
                complete: function () {
                    $(".border-img").removeClass("loading")
                }
            })
        }
    });


    $.get('http://139.199.157.195:9090/api/getinlanddiscount', function (data) {
        var html = template('commodity-tpl', {list: data.result});
        $('.row').html(html);


    })


});









