require.config({
    baseUrl: "./app",
    paths: {
        //框架
        'jquery': "./../Resource/lib/jquery.min",
        'director': "./../Resource/lib/director",
        'css': "./../Resource/lib/css.min",
        'bootstrap': "./../Resource/lib/bootstrap.min",

        //自定义工具
        'util': './../Resource/utils/util',
        'common': './../Resource/utils/common'
    },
    shim: {
        'jquery': {
            'deps': ["css!./../Resource/utils/common.css"]
        },
        'bootstrap': {
            'deps': ['jquery', 'css!./../Resource/css/bootstrap.min.css']
        },
        'director': {
            exports: "Router"
        }
    }
});

require(['bootstrap', 'director', 'common'], function(bs, route, common) {

    if (!location.hash) location.hash = "/";

    var router = new route({
        '/': function() {
            common.updateTitle("运维平台", "四川广力软件科技有限公司-运维平台");
        },
        '/examine': intoExamine,
        '/issues': intoIssues
    })

    router.init();
    router.on(['/', '/examine', '/issues'], function() {
        $(".receive").empty();
    })

    function intoExamine() {
        var ex = require('director');
        require(["examine"], function(examine) {
            examine.init()
        });
    }

    function intoIssues() {
        require(["issues"], function(issues) {
            issues.init()
        });
    }
})