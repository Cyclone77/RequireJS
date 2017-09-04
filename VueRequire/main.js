require.config({
    baseUrl: "./app",
    paths: {
        //框架
        'jquery': "./../Resource/lib/jquery.min",
        'vue': './../Resource/lib/vue',
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
        'bootstrap': {
            'deps': ['jquery', 'css!./../Resource/css/bootstrap.min.css']
        },
        'director': {
            exports: "Router"
        }
    }
})

require(['bootstrap', 'domReady', 'director', 'common'],
    function(bootstrap, domReady, route, common) {
        if (!location.hash) location.hash = "/";

        function index() {
            require(["index"], function(index) {
                index.init()
            });
        }

        function blog() {
            common.updateTitle("博客", "JavaScript, Css, HTML, ASP.NET");
        }

        function about() {
            common.updateTitle("关于我", "从ASP.NET到前端到架构师");
        }

        domReady(function() {
            var router = new route({
                '/': index,
                '/blog': blog,
                '/about': about
            });

            router.configure({
                before: function() {
                    $("#app").empty();
                },
                notfound: function() {
                    common.updateTitle("404页", "页面不存在!");
                }
            });
            router.init();
        })
    })