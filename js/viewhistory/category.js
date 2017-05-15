define(['jquery'], function ($) {

    //给事件源注册事件
    $('.text_link').on('focus', function () {
        if(this.value == '请通过购物App中使用分享或浏览器打开商品页面获取商品链接'){
            this.value = '';
        }else{
            this.value = this.value;
        }
    })

    //失去焦点的时候，如果没有内容输入的时候，要把默认的值还原回去
    $('.text_link').on('blur', function () {
        if(this.value == ''){
            this.value = '请通过购物App中使用分享或浏览器打开商品页面获取商品链接';
        }else{
            this.value = this.value;
        }
    })



    $('.sub_price').on('click', function () {
        alert('请通过京东，天猫等App分享商品链接到输入框');
        window.location.reload();
    })

    $('.sub_reset').on('click', function () {
        window.location.reload();
    })

    $('.close_box').on('click', function () {
        $('.banner_down').fadeOut();
    })




})