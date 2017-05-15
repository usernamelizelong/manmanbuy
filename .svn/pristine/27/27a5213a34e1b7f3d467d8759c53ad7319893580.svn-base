/**
 * Created by hom on 2017/3/6.
 */
define(['jquery','common','template'],
    function($,undefined,template) {

        //渲染分类页面
        $.get('http://139.199.157.195:9090/api/getcategorytitle',function(data){
            var html=template('brieflist',{list:data.result});
                $(".brief").html(html);


        });

        //隐藏其他分类内容
       $(document).ready(function(){
           //$(".fl_all").hide();

           //点击a标签的下拉按钮，进行切换,显示模块
           $(document).on('click','.fl_t',function(){

               //获取分类标题的id
               var titleid=$(this).parent().attr('data-id');


               $(document).on('click','.divs a',function(){
                   //获取商品分类页的id
                   var categoryId=$(this).attr('data-id');
                   location.href='/htmls/product/product-list.html?categoryId='+categoryId;


               });



               $.get('http://139.199.157.195:9090/api/getcategory',{titleid:titleid},
                   function(data){
                       //console.log(data.result);
                       var html=template('table_tpl',{List:data.result});
                       $(".fl_all").html(html);

               });

               //判断当点击当前下拉项的时候，隐藏其他所有的内容

               //$(".fl_all:hidden").hide();
               //$(this).next().toggle();
               if($(this).next().css("display")=='none'){
                   $(".fl_all").hide();
                   $(this).next().show();
                   //动态的切换背景图片
                   console.log($(this));
                   $(".fl_t a").css('background','url(../../images/category/cg-arrow1.gif)right center no-repeat')
                   $(this).find('a').css('background','url(../../images/category/cg-arrow2.gif)right center no-repeat');


               }else{
                   $(this).next().hide();
                   $(".fl_t a").css('background','url(../../images/category/cg-arrow1.gif)right center no-repeat');

               }



           });


       });






});


