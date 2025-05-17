let mousePressed = false;
let lastX, lastY;
let ctx;

function InitThis() {
    let canvas = document.getElementById("myCanvasDraw");
    ctx = canvas.getContext("2d");
    //   ctx.fillStyle = "white";
    //   ctx.fillRect(0, 0, canvas.width, canvas.height);
    $('#myCanvasDraw').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#myCanvasDraw').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#myCanvasDraw').mouseup(function (e) {
        mousePressed = false;
    });
    $('#myCanvasDraw').mouseleave(function (e) {
        mousePressed = false;
    });
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}

$(function () {
    InitThis();
})