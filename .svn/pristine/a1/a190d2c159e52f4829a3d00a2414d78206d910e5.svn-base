/**
 * Created by linruilian on 2017/3/6.
 */
define(['jquery',"template"],
    function ($,template) {
        $.get("http://mmb.ittun.com/api/getcoupon",{},function(result) {
            var html = template("couponindex-tpl",result);
            $('.couponindex-link').html(html);
            console.log("3333")
        })
    }
)