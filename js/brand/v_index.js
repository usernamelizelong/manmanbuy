/**
 * Created by Administrator on 2017/3/7.
 */
define(["jquery","util","template"],function($,util,template){
    //��ȡʮ��Ʒ�Ʊ�����Ⱦ
    //��ȡ�����id
    var brandtitleid = util.getQueryString('brandtitleid');
    $.get("http://139.199.157.195:9090/api/getbrand?brandtitleid="+brandtitleid,function(data){
        $(".v_good_list").html(template("brand_tpl",data))
    });
    //����¼�

    //��ȡ��Ʒ����������Ⱦ
    $.get("http://139.199.157.195:9090/api/getbrandproductlist?brandtitleid="+brandtitleid+"&pagesize=4",function(data){
        $(".v_sale_menu").html(template("brand_tpl2",data));
        //��ȡ����������Ʒ���۵���Ⱦ
        var productid=$('.v_sale_menu ul').attr('data-proid');
        console.log(productid);

        $.get("http://139.199.157.195:9090/api/getproductcom?productid="+productid,function(data){
            console.log(0);
            $(".v_comment_menu").html(template("brand_tpl3",data))
        })
    });


})