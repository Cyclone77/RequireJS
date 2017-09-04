define(function() {
    return {
        updateTitle: function(title, subtitle, viewHTML) {
            //设置头文件
            var el = document.querySelector(".jumbotron"),
                titEl = el.querySelector("h1"),
                subEl = el.querySelector("p");
            titEl.textContent = title || titEl.textContent;
            subEl.textContent = subtitle || subEl.textContent;

            //加载页面内容
            if (!!viewHTML) $("#app").html(viewHTML);
        }
    }
})