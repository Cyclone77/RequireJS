define(function() {
    return {
        /*
         *  s {string} 字符串格式化
         */
        format: function(s) {
            if (arguments.length < 2)
                return s;
            for (var i = 1; i < arguments.length; i++) {
                var re = new RegExp("\\{" + (i - 1) + "\\}", "gm");
                s = s.replace(re, arguments[i]);
            }
            return s;
        }
    }
})