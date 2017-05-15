/**
 * Created by ±ê±ê on 2017/3/6.
 */
define(['jquery','template'],function($,template){
    $.get('http://139.199.157.195:9090/api/getsitenav',function(data){
        var html=template('sitenav-tpl',{list:data.result});
        $('.list').html(html);
    });
});
