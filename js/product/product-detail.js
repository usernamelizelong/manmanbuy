/**
 * Created by hom on 2017/3/6.
 */
define(['jquery','template','util'],function($,template,util){
    //截取ID
    var productId=util.getQueryString('productid');
    var categoryId=util.getQueryString('categoryid');

    //商品 详情
    $.ajax({
        url:'http://139.199.157.195:9090/api/getproduct',
        type:'get',
        data:{productid:productId},
        success:function(data){
            //console.log(data);
            var html=template('xq-tpl',{list:data.result});
            $('#xiangqing').html(html);
        }
    });

    //处理数据
    //template.helper('getStr', function(){
    //    //飞利浦(PHILIPS) HX6730 成人 充电式 声波震动式电动牙刷
    //    var data = $('.product-c > p').html();
    //    var str=data.split(' ')[0].split('(')[0];
    //    var str2=data.split(' ')[1];
    //    return str+' '+str2;
    //});

    //实现三级菜单
    $.ajax({
        url:'http://139.199.157.195:9090/api/getcategorybyid',
        type:'get',
        data:{categoryid:categoryId},
        success:function(data){
            var html=template('back-tpl',{list:data.result});
            $('#fh-tpl').html(html);
        }
    });

    //点击更换样式
    $('.contrast li >a').on('click',function(){
        $(this).parent().addClass('active').siblings().removeClass('active');

    })

    //商品详情评论
    $.ajax({
        url:'http://139.199.157.195:9090/api/getproductcom',
        type:'get',
        data:{productid:productId},
        success:function(data){
            //console.log(data);
            var html=template('pl-tpl',{list:data.result});
            $('#pj-pl').html(html);
        }
    });
});