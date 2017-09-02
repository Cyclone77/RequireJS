require.config({
    baseUrl: "./app",
    paths: {
        //框架
        'jquery': "./../Resource/lib/jquery.min",
        'director': "./../Resource/lib/director",
        'css': "./../Resource/lib/css.min",
        'text': './../Resource/lib/text',
        'domReady': './../Resource/lib/domReady',

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

require(['domReady', 'bootstrap', 'director', 'common'], function(domReady, bs, route, common) {

    domReady(function() {
        console.log('dom加载完成！');
    })

    if (!location.hash) location.hash = "/";

    var router = new route({
        '/': function() {
            common.updateTitle("运维平台", "四川广力软件科技有限公司-运维平台");
        },
        '/examine': intoExamine,
        '/issues': intoIssues,
        '/log': log
    })
    router.configure({
        notfound: function() {
            common.updateTitle("运维平台", "您所在访问的页面不存在！");
        }
    });
    router.init();
    router.on(['/', '/examine', '/issues'], function() {
        $(".receive").empty();
    })

    function intoExamine() {
        require(["examine"], function(examine) {
            examine.init()
        });
    }

    function intoIssues() {
        require(["issues"], function(issues) {
            issues.init()
        });
    }

    function log() {
        require(["log"], function(log) {
            log.init();
        })
    }
})