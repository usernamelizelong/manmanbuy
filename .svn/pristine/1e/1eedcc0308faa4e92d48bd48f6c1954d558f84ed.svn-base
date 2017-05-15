define(['jquery'], function ($) {

    //单击关闭按钮让广告栏隐藏
    $('.close_box').on('click', function () {
        $('.banner_down').fadeOut();
    })




    $('input[type="button"]').on('click', function () {

        var login = $('input[type="text"]').val();
        var password = $('input[type="password"]').val()
        if(login && /(^[A-Za-z0-9]{6,16}$)|(^[\u4E00-\u9FA5]{2,8}$)/.test(login) && /^[\da-zA-Z]{6,20}$/.test(password)){
            $('.blank_ogin').html('登录成功');
            window.location.href = '/';
        }else{
            $('.blank_ogin').html('登录失败');
        }
    })





})