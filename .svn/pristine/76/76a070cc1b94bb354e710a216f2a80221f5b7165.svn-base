define(['jquery','template','util','lazy'],function ($,template,util,lazy) {


    // 定义模版的方法
    template.helper('getAmount',getAmount)




    /*页面打开就获取第一页的数据*/
    var pageid=util.getQueryString('pageid')
    $.get('http://139.199.157.195:9090/api/getmoneyctrl',
        {pageid:1},function (result) {
        // var html = template('getmoneyctrl-tpl',result);
        $('#getmoneyctrl').html(template('getmoneyctrl-tpl',result));
        Imgload();
        $("html,body").animate({scrollTop:0}, 500);



            //下拉框选择项的模块渲染
            var htmlstr='';
            //当前页的选项
            var index =Math.ceil(result.totalCount/result.pagesize);
            for (var i=0;i<index;i++){
                htmlstr +='<option  value='+(i+1)+'>'+ (i+1)+'/'+index +'</option>'
            }
            $('#selectPage').html(htmlstr);


            var page=1;
            //默认情况下，在第一个页面的时候，选择分页框发生改变事件，跳转指定页面
            $("#selectPage").on('change',function(){
                //获取当前选择的分页下标值
                page=this.options[this.options.selectedIndex].value;

                /*调用getData获取数据*/
                getData(page);


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


                /*调用getData获取数据*/
                getData(page);


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

                /*调用getData获取数据*/
                getData(page);


            });


    })



    /*封装了一个获取页面的数据*/
    function getData(i) {
        $.get('http://139.199.157.195:9090/api/getmoneyctrl',{pageid:getQueryString('pageid'),pageid:i},
            function(result){
                $("#getmoneyctrl").html(template('getmoneyctrl-tpl',result));
                Imgload();
                $("html,body").animate({scrollTop:0}, 500);
            });
    }
    
    
    
    
    
    /*基于懒加载的封装*/
    function Imgload() {
        /*创建一个空数组*/
        var arr = [];
        /*遍历容器内的img标签*/
        $('.img img').each(function(){
            arr.push($(this).attr('src'));
        })
        /*清空src属性*/
        $('img').attr('src','');
        /*给img标签添加类名（lazy）*/
        $('.img img').attr('class','lazy');


        /*遍历数组，给每一个img标签添加懒加载专用属性*/
        arr.forEach(function(val,index){
            $('img').eq(index).attr('data-original',val);
        })

        /*调用懒加载插件*/
        $("img.lazy").lazyload();
    }



    /*获取字符中的数字*/
    function getAmount(key) {
        return key.match(/\d+/)[0]
    }

    function getQueryString (key) {
        var search = location.search.slice(1);
        var searchArr = search.split('&');
        var tempArr = null;
        var searchObj = {};
        for( var i =0, len = searchArr.length; i < len; i++) {
            tempArr = searchArr[i].split('=');
            searchObj[ tempArr[0] ] = tempArr[1];
        }
        return arguments.length? searchObj[key]: searchObj;
    }
})