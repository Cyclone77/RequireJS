define(['common', 'text!./../view/examine.html', 'util'], function(common, viewHTML, util) {

    var
        result = null,
        $el = $(".receive"),
        audit = {
            "01": { value: 2, text: "启动任务" },
            "02": { value: 2, text: "等待领取" },
            "03": { value: 2, text: "等待确认" },

            "04": { value: 4, text: "任务办理" },
            "05": { value: 2, text: "经理分配任务" },
            "06": { value: 4, text: "转发任务" },


            "07": { value: 1, text: "等待审批" },
            "08": { value: 0, text: "审核未通过" },
            "09": { value: 1, text: "审核通过" },

            "10": { value: 2, text: "确认收到" },
            "11": { value: 1, text: "经理确认任务" },
            "12": { value: 1, text: "屏蔽任务" },

            "13": { value: 3, text: "审批子任务" },
            "14": { value: 3, text: "等待上报" },
            "15": { value: 3, text: "等待归档" },
            "16": { value: 3, text: "任务归档" }
        };

    //获得任务列表
    function getReceiveTaskData() {
        $.getJSON("Service.ashx", { Action: "GetUserReceiveTaskData" }, function(res) {
            if (res.length > 0) {
                result = res;
                bulidHTMLReceiveList();
            } else {
                $(".spinner").addClass("hide");
            }
        });
    }

    function bulidHTMLReceiveList() {
        var html = [
            '<div class="panel panel-primary">',
            '<div class="panel-heading">',
            '<h3 class="panel-title">任务状态: {1}</h3>',
            '</div>',
            '<div class="panel-body">{0}</div>',
            '</div>'
        ].join("");

        $Tsk = [];
        result.forEach(function(item) {
            $Tsk.push(util.format(html, item.I020G, audit[item.AuditState].text));
        });

        $el.html($Tsk.join(""));
    }

    return {
        init: function() {
            common.updateTitle("查看任务", "目前尚未完成的任务。", viewHTML);
            getReceiveTaskData();
        }
    }
})