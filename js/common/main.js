
/**
 * Created by hom on 2017/3/6.
 * Created by hom on 2017/3/8.
 */
require.config({
   baseUrl:'/',
    paths:{
        //第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
        template: 'lib/artTemplate-3.0.1/template',
        util:'js/common/util',
        lazy:'lib/jquery-lazy/jquery.lazyload.min',

        terseBanner:'lib/terseBanner/terseBanner',

        //首页js脚本
        BuyIndex:'js/Buy',
        common:'js/common/common',

        //自己写的路径
       categorylist:'js/category/category-list',
       productlist:'js/product/product-list',
       common: 'js/common/common',
       index: 'js/index',
        //品牌模块

       BIndex:'js/brand/b_index',
		VIndex:'js/brand/v_index',
       index: 'js/index',
        list:'js/brand/brandTitle',
        compare:'js/brand/brandTitle-compare',
        categorylist:'js/category/category-list',
        productlist:'js/product/product-list',
        common: 'js/common/common',
        index: 'js/index',
        BIndex:'js/brand/b_index',


       categorylist:'js/category/category-list',
       productlist:'js/product/product-list',
       common: 'js/common/common',
       index: 'js/index',   
       BaiCaiJia:'js/baicaijia/baicaijia',
        //商城导航js
        sitenav:'js/sitenav/sitenav',
        Gsshop:'js/gsshop/gsshop',
        SeaAmoy:'js/seaAmoy/seaAmoy',
        Discount:'js/discount/discount',
        DiscountGoodsDetails:'js/discount/discount_goods_details',
        coupon:'js/coupon/coupon',
        couponproduct:'js/coupon/couponproduct',
		//商城导航js
		sitenav:'js/sitenav/sitenav',
        //商品详情功能界面

        product:'js/product/product-detail',
        bransProduct:'js/brand/brans-Product',


       money:'js/money/money',





       //商城导航js
       sitenav:'js/sitenav/sitenav',

        viewhistory:'js/viewhistory/category',


        login:'js/login/login'

    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        toTop:{
            deps:['jquery']
        },
        lazy:{
            deps:['jquery']
        }
    }
})
require(["jquery"],["bootstrap"]);

require(["jquery"],["bootstrap"]);
require(['jquery', 'bootstrap', 'common']);










(function(window) {

    var pathname = window.location.pathname;
     require(['jquery', 'jqueryCookie'], function($, undefined) {
         //页面的跳转，加载对应的模块
        //椤甸潰鐨勮烦杞紝鍔犺浇瀵瑰簲鐨勬ā鍧�

        switch (pathname) {
            case '/htmls/brand/b_index.html':
                require(['BIndex']);
	        break;
 	        case '/htmls/brand/v_index.html':
                require(['VIndex']);
                break;
            case '/htmls/brand/brandTitle.html':
                require(['list']);
	            break;
 	        case '/htmls/brand/brandTitle-compare.html':
                require(['compare']);
                break;
            case '/htmls/category/category-list.html':
                require(['categorylist']);
                break;
            case '/htmls/category/category.html':
                require(['categorylist']);
                break;
            case '/':
                require(['BuyIndex']);
                break;
            case '/htmls/product/product-list.html':
                require(['productlist']);
                break;
            case '/htmls/sitenav/sitenav.html':
                require(['sitenav']);
　　　　　　     break;
　　　　　　 case '/htmls/brand/b_index.html':
                require(['BIndex']);
　　　　　　     break;
　　　　　　 case '/htmls/brand/brandTitle.html':
                require(['BIndex']);
　　　　　　     break;
          case '/htmls/product/product-detail.html':
                require(['product']);
                break;
            require(['sitenav']);
　　　　　　break;
　　　　　　case '/htmls/brand/b_index.html':
            require(['BIndex']);
　　　　　　break;
            require(['sitenav']);
　　　　　　break;
　　　　　　case '/htmls/brand/brandTitle.html':
            require(['BIndex']);
　　　　　　break;
            case '/htmls/baicaijia/baicaijia.html':
            require(['BaiCaiJia']);
            break;
            require(['sitenav']);
                break;
　　　　　　case '/htmls/brand/b_index.html':
                require(['BIndex']);
　　　　　　     break;
　　　　　　case '/htmls/brand/brandTitle.html':
                require(['BIndex']);
　　　　　　     break;
            case '/htmls/baicaijia/baicaijia.html':
                require(['BaiCaiJia']);
                break;
            case '/htmls/gsshop/gsproduct.html':
                require(['Gsshop']);
                break;
            case '/htmls/seaAmoy/moneyctrl.html':
                require(['SeaAmoy']);
                break;
			case '/htmls/seaAmoy/seaAmoy.html':
                require(['SeaAmoy']);
                break;	
            case '/htmls/money/moneyctrl.html':
                require(['money']);
                break;
            case '/':
                require(['BuyIndex']);
                break;
            case '/htmls/category/category.html':
                require(['categorylist']);
                break;
            case '/htmls/viewhistory/category.html':
                require(['viewhistory']);
                break;
            case '/htmls/discount/inlanddiscount.html':
                require(['Discount']);
                break;
            case '/htmls/discount/discount-goods_details.html':
                require(['DiscountGoodsDetails']);
                break;
            case '/htmls/coupon/couponproduct.html':
                require(['couponproduct']);
                break;
            case '/htmls/coupon/coupon.html':
                require(['coupon']);
                break;
            case '/htmls/brand/bransProduct.html':
                require(['bransProduct']);
                break;
            case '/htmls/login/login.html':
                require(['login']);
                break;


        }

    });
})(window);








