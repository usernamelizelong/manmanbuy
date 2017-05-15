define(['jquery','common','template'],function($,undefined,template){

    init();
    //初始化事件
    function init(){
        //调用绑定切换菜单事件
        MenuToggle();
        //调用菜单栏数据的函数
        getIndexMenu();
        //调用折扣商品列表的数据的函数
        getIndexProduct();

    }


    //绑定切换菜单事件
    function MenuToggle(){
        //设置单击第8个按钮，显示第三行
        $('#memuData .row').on('click','>div:nth-of-type(8)', function () {
            $('.mm_menu .row >div:nth-last-of-type(-n+4)').slideToggle();
        });
    }



    //获取菜单栏数据的函数
    function getIndexMenu(){
        //获取菜单栏的数据
        $.get("http://139.199.157.195:9090/api/getindexmenu", function (data) {
            data.arrFoter={
                0:'/htmls/category',
                1:'/htmls/money',
                2:'/htmls/discount',
                3:'/htmls/baicaijia',
                4:'/htmls/seaAmoy',
                5:'/htmls/coupon',
                6:'/htmls/viewhistory',
                7:'',
                8:'/htmls/gsshop',
                9:'',
                10:'/htmls/sitenav',
                11:'/htmls/brand'

            }
            var html = template("menu-tpl",data);
            $("#memuData .row").html(html);


        })
    }


    //获取折扣商品列表的数据的函数
    function getIndexProduct(){
    //获取折扣商品列表
        $.get("http://139.199.157.195:9090/api/getmoneyctrl", function (data) {

            var html = template("getmoneyctrl-tpl",data);
            $("#getmoneyctrlData").html(html);


        })
    }


    //console.log($('.mm_menu .row div:nth-of-type(1)'));

});



