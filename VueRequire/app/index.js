define([
    'common',
    "text!./../view/index.html"
], function(common, viewHTML, imglogo) {
    return {
        init: function() {
            common.updateTitle("主页", "前后端分离Require.js+Vue.js+ASP.NET MVC WebAPI", viewHTML);
        }
    }
})