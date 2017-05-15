define(['jquery','common','util','template','lazy'],
    function($,undefined,util,template,lazy) { //获取商品分类的id


     //实现页面的懒加载



    //渲染商品列表页
        var category=util.getQueryString('categoryId')
    $.get(' http://139.199.157.195:9090/api/getproductlist',
        {categoryid:category,
         pageid :1},function(data){

         //初始化商品列表
        var html=template('product-item',{list:data.result});
        $(".product-list").html(html);
        $(".pic img").lazyload();
        $($('.current .rowbody ul>li:gt(5)')).hide();



            //下拉框选择项的模块渲染
            var htmlstr='';
            //当前页的选项
            var index =Math.ceil(data.totalCount/data.pagesize);
            for (var i=0;i<index;i++){
                htmlstr +='<option  value='+(i+1)+'>'+ (i+1)+'/'+index +'</option>'
            }
            $('#selectPage').html(htmlstr);


            var page=1;
            //默认情况下，在第一个页面的时候，选择分页框发生改变事件，跳转指定页面
            $("#selectPage").on('change',function(){
                //获取当前选择的分页下标值
                page=this.options[this.options.selectedIndex].value;
                $.get('http://mmb.ittun.com/api/getproductlist',{categoryid:util.getQueryString('categoryId'),pageid:page},function(data){

                    $(".product-list").html(template('product-item',{list:data.result}));
                    $("html,body").animate({scrollTop:0}, 500);  //回滚到头部部分
                    $(".pic").lazyload();
                    $($('.current .rowbody ul>li:gt(5)')).hide();




                });



            });

            //点击上一页的时候，触发事件
            $(document).on('click','#prePage',function(){

                //判断如果当前的页大于1的时候
                if(page>1){
                   page--;
                }else{
                    $('#prePage').css('disabled');
                    alert('已经是第一页了');
                    return;
                }

                $('#selectPage option').prop('selected',false);
                $('#selectPage option').eq(page-1).prop('selected','selected');

                $.get('http://mmb.ittun.com/api/getproductlist',{categoryid:util.getQueryString('categoryId'),pageid:page},function(data){
                    $(".product-list").html(template('product-item',{list:data.result}));
                    $("html,body").animate({scrollTop:0}, 500);  //回滚到头部部分
                    $(".pic img").lazyload();                    //懒加载部分
                    $($('.current .rowbody ul>li:gt(5)')).hide(); //隐藏筛选内容


                });



            });

            //点击下一页，跳转到下一个页面
            $(document).on('click','#nextPage',function(){

                //判断如果当前的页小于的时候
                if(page<index){
                    page++;
                }else{
                    $('#nextPage').css('disabled');
                    alert('已经是最后一页了');
                    return;
                }

                $('#selectPage option').prop('selected',false);
                $('#selectPage option').eq(page-1).prop('selected','selected');

                $.get('http://mmb.ittun.com/api/getproductlist',{categoryid:util.getQueryString('categoryId'),pageid:page},
                    function(data){
                    $(".product-list").html(template('product-item',{list:data.result}));
                    $("html,body").animate({scrollTop:0}, 500);  //回滚到头部部分
                    $(".pic img").lazyload();
                    $($('.current .rowbody ul>li:gt(5)')).hide();


                });



            });


            //点击商品的信息，跳转到指定的商品详情页
            $(document).on('click','.item',function(){
            //获取商品的id
            var productid=$(this).attr('data-id');
            location.href='/htmls/product/product-detail.html?productid='+productid+'&categoryid='+category;


        });


           //点击筛选按钮，触发的事件
           $(document).ready(function(){


               ////获取要操作de对象
               var box=$('productfilter');         //获取筛选内容
               var close=$('close');           //获取关闭按钮
               var mask=$('mask');             //遮罩层

               //给筛选按钮注册事件
               $('#filter').on('click',function(){

                   $.get('brand.json',function(data){

                       $('.current .rowbody').html(template('rowli-item',{list:data.result}));
                       $($('.current .rowbody ul>li:gt(5)')).hide();

                       //点击品牌信息，跳转到指定品牌的商品列表
                       $(document).on('click','.rowbody ul>li',function(data){
                           var brandId=$(this).attr('data-id');
                           console.log(brandId);
                           $('.rowbody li.on').removeClass('on');
                           $(this).addClass('current').siblings().removeClass('current');  //移除其他的元素，添加当前样式
                           location.href='/htmls/brand/bransProduct.html?id='+brandId;


                       });


                   })

                   $("#productfilter").css('display','block');
                   $("#mask").css('display','block');
                   //动画效果
                  $('#productfilter').animate({
                          'width':'85%',
                          'height':'100%'
                  });



               });

               //关闭按钮
               $('#close').on('click',function(){

                   //动画效果
                   $('#productfilter').animate({
                       'width':0
                   },function(){
                       $("#productfilter").css('display','none');
                       $("#mask").css('display','none');
                   });




               });


               //上下拉下按钮的显示问题
               $(document).on('click','.down',function(){

                   if($(this).data("show")=='show'){
                          //动态生成文本

                          $('.rowheader  .down').html('&#xe600;');

                          $('.row .rowbody').css('visibility','inherit');
                          if($($('.current .rowbody ul>li:gt(5)')).toggle()){
                              $(this).show().html('&#xe61f;');
                          }else{
                              $('.rowheader  .down').html('&#xe600;');
                          }



                   }
                      else{
                          $('.rowheader  .down').html('&#xe600;');
                          $(this).hide().html('&#xe61f;');


                      }





               });



           });




    });






});
