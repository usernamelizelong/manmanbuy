/**
 * Created by Administrator on 2017/3/7.
 */
define(["jquery","util","template"],function($,util,template){
    //获取十大品牌标题渲染
    //获取标题的id
    var brandtitleid = util.getQueryString('brandtitleid');
    $.get("http://139.199.157.195:9090/api/getbrand?brandtitleid="+brandtitleid,function(data){
        $(".v_good_list").html(template("brand_tpl",data))
    });
    //点击事件

    //获取产品销售排行渲染
    $.get("http://139.199.157.195:9090/api/getbrandproductlist?brandtitleid="+brandtitleid+"&pagesize=4",function(data){
        $(".v_sale_menu").html(template("brand_tpl2",data));
        //获取销量排行商品评论的渲染
        var productid=$('.v_sale_menu ul').attr('data-proid');
        console.log(productid);

        $.get("http://139.199.157.195:9090/api/getproductcom?productid="+productid,function(data){
            console.log(0);
            $(".v_comment_menu").html(template("brand_tpl3",data))
        })
    });


})