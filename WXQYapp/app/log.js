define([
    'common',
    "text!./../view/log.html"
], function(common, viewHTML) {
    return {
        init: function() {
            $(".receive").html(viewHTML);
            common.updateTitle("日志系统", "日志系统，记录开发过程内容。");
        }
    }
})