/**
 * Created by hom on 2017/3/6.
 */
define(['jquery','template','util'],function($,template,util){
    //��ȡID
    var productId=util.getQueryString('productid');
    var categoryId=util.getQueryString('categoryid');

    //��Ʒ ����
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

    //��������
    //template.helper('getStr', function(){
    //    //������(PHILIPS) HX6730 ���� ���ʽ ������ʽ�綯��ˢ
    //    var data = $('.product-c > p').html();
    //    var str=data.split(' ')[0].split('(')[0];
    //    var str2=data.split(' ')[1];
    //    return str+' '+str2;
    //});

    //ʵ�������˵�
    $.ajax({
        url:'http://139.199.157.195:9090/api/getcategorybyid',
        type:'get',
        data:{categoryid:categoryId},
        success:function(data){
            var html=template('back-tpl',{list:data.result});
            $('#fh-tpl').html(html);
        }
    });

    //���������ʽ
    $('.contrast li >a').on('click',function(){
        $(this).parent().addClass('active').siblings().removeClass('active');

    })

    //��Ʒ��������
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