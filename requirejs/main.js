require.config({
    //基本路径
    baseUrl: "./app",
    //模块路径
    paths: {
        "jquery": "./../js/jquery.min",
        'bootstrap': '../lib/bootstrap.min',
        "css": './../lib/css.min'
    },
    shim: {
        "bootstrap": {
            "deps": ["jquery", "css!./../css/bootstrap.min.css"]
        }
    }
})

require(["jquery", "util", "bootstrap"], ($, util, bs) => {
    console.log(util.format("hello {0}.js", "requre"));
})