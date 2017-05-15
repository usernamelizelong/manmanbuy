/**
 * Created by hywz on 2017/3/8.
 */
//
define(['jquery','util','template' ],function($,util,template){
    var cententData=util.getQueryString("productId");

    $.get('http://139.199.157.195:9090/api/getdiscountproduct',{  productid:cententData},function(data){

        var html=template('discount-goods_details',{list:data.result});

        $('.container').html(html);

    });



});


