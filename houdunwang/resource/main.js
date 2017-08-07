require.config({
    //基准路径
    baseUrl: '../resource/app',
    //模块路径
    paths: {
        'hd': 'hd',
        'css': '../lib/css.min',
        'jquery': '../lib/jquery.min',
        'angular': '../lib/angular.min',
        'bootstrap': '../lib/bootstrap.min',
        'director': '../lib/director'
    },
    //依赖关系
    shim: {
        'hd': {
            // exports: 'modal',
            init: function () {
                return {
                    modal: modal,
                    success: success,
                }
            }
        },
        //houdunren.com
        'bootstrap': {
            'deps': ['jquery', 'css!../css/bootstrap.min.css']
        }
    }
});
// require(['jquery', 'angular'], function ($, angular) {
//     $('body').css({'backgroundColor': 'red'});
// })