/**
 * Created by linruilian on 2017/3/6.
 */
    define(['jquery',"template","util"],function ($,template,util) {

        var getData=util.getQueryString('id');
        // console.log(getData)

        $.get('http://mmb.ittun.com/api/getcouponproduct?couponid='+getData,function(data) {
            // console.log(couponi);
            $('.couponproduct-link').html(template('couponproduct-tpl',data));
            // console.log("ooo");

            // <!--轮播图部分-->

            $(".couponproduct-link").on("click","a",function () {
                var proId = $(this).parent().attr('data-productId');
                // console.log(proId);


                // 轮播图内图片的渲染
                $('.placeholder').html(template('sliderList-tpl',data.result[proId].couponProductImg))
                var lis = data.result[proId];
                var imgs = $('.placeholder img');
                var img = $('.placeholder img') .width();
                var imgWidth = $('.placeholder').width();
                console.log(imgs);
                console.log(lis);
                console.log(imgWidth);
                // $('.placeholder').terseBanner();
                // console.log(terseBanner)

                //
                var pic=0;
                var lis=document.getElementById("placeholder");
                var ul=document.getElementById("gallerySlider");
                //右按钮
                $('#nextArrow').on("click",function (event) {
                    // $(".placeholder").nextAll().css("color","blue");
                    // console.log(12);
                    playNext();
                    console.log(playNext());

                    event.stopPropagation();

                })
                //左按钮
                $('#prevArrow').on("click",function (event) {
                    // $(".placeholder").nextAll().css("color","blue");
                    // console.log(12);
                    playNext();
                    console.log(playNext());

                    event.stopPropagation();

                })

                function playNext() {
                    if(pic==lis.length-1){
                        console.log(122);
                        pic=0;
                        ul.style.left="0px";
                    }
                    pic++;
                    var target = -imgWidth * pic;
                    animate(ul,target)
                }




                //轮播图左右按钮步凑
                // 1.克隆第一张图片，放在最后面

                $("#galleryOverlay").fadeIn();
                // 轮播图内渲染完毕
            })
            $("#galleryOverlay").on("click",function () {
                $("#galleryOverlay").fadeOut(1000);

            })


            //KFC广告图
            $("#pageflip").click(function(){

                $("#pageflip img , .msg_block").stop().animate({width: '200px', height: '150px'}, 500);

            },function(){

                $("#pageflip img").stop().animate({width: '50px', height: '52px'}, 220);

                $(".msg_block").stop().animate({width: '50px', height: '50px'}, 200);

            });

            /**
             * 封装了一个匀速移动的动画函数
             * @param obj
             * @param target
             */
            function animate(obj,target) {
                clearInterval(obj.timerId);
                obj.timerId=setInterval(function () {
                    var leader=obj.offsetLeft;
                    var step=800;
                    step=leader<target?step:-step;
                    if(Math.abs(leader-target)>Math.abs(step)){
                        leader=leader+step;
                        obj.style.left=leader+'px';
                    }else{
                        clearInterval(obj.timerId);
                        obj.style.left=target+'px ';
                    }
                    console.log(123);
                },15)
            }
        })


        $( document ).ready(function() {

            // swap all the gifs on the page.
            $('.gif').each(function() {
                $(this).gif();
            });

        });



    })
