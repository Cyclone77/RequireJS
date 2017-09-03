define([
    'common',
    "text!./../view/log.html"
], function(common, viewHTML, imglogo) {
    return {
        init: function() {
            common.updateTitle("日志系统", "日志系统，记录开发过程内容。", viewHTML);
        }
    }
})