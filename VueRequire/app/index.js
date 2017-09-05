define([
    'common',
    "text!./../view/index.html"
], function(common, viewHTML, imglogo) {
    return {
        init: function() {
            common.updateTitle("主页", "前后端分离Require.js+Vue.js+ASP.NET MVC WebAPI", viewHTML);
            $.ajax({
                url: "http://cyclone77.ngrok.io/Git.Framework.WebAPI/api/Contact",
                //crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                contentType: "application/x-www-form-urlencoded, multipart/form-data",
                type: "GET",
                dataType: "jsonp",
                success: function(data, textStatus, jqXHR) {
                    //Store("local").set("Cyclone77-GitHub-Blog", JSON.stringify(data.data || data));
                    _bulidHtml(data.data || data);
                },
                error: function() {

                }
            });
        }
    }
})