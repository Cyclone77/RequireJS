define(['common'], function(common) {

    return {
        init: function() {
            console.log("发布任务");
            common.updateTitle("发布任务", "发布新的任务、需求或者BUG。");
        }
    }
})