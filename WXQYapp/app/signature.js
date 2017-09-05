define([
    'common',
    "text!./../view/signature.html"
], function(common, viewHTML, imglogo) {

    //生成画板
    function canvas() {

        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        //画一个黑色矩形  
        ctx.fillStyle = "#002200";
        ctx.fillRect(0, 0, 600, 400);
        //按下标记  
        var onoff = false;
        var oldx = -canvas.offsetLeft;
        var oldy = -canvas.offsetTop;
        //设置颜色默认为白色  
        var linecolor = "white";
        //宽度默认为4  
        var linw = 4;
        //鼠标移动事件，事件绑定  
        canvas.addEventListener("mousemove", draw, true);
        canvas.addEventListener("mousedown", down, false);
        canvas.addEventListener("mouseup", up, false);

        function down(event) {
            onoff = true;
            oldx = event.pageX - canvas.offsetLeft;
            oldy = event.pageY - canvas.offsetTop;
        }

        function up() {
            onoff = false;
        }

        function draw(event) {
            if (onoff == true) {
                var newx = event.pageX - canvas.offsetLeft;
                var newy = event.pageY - canvas.offsetTop;
                ctx.beginPath();
                ctx.moveTo(oldx, oldy);
                ctx.lineTo(newx, newy);
                ctx.strokeStyle = linecolor;
                ctx.lineWidth = linw;
                ctx.lineCap = "round";
                ctx.stroke();

                oldx = newx;
                oldy = newy;
            }
        }
    }

    return {
        init: function() {
            common.updateTitle("电子签名", "《电子签名》具有法律效益", viewHTML);
            canvas();
        }
    }
})