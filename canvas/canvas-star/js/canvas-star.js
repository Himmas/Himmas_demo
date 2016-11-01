/**
 * Created by lijie on 16/7/6.
 */
var canvas,ctx,w,h;
var picture = new Image();
var starpic = new Image();
var starNum = 60;
var stars=[];
var lastTime;
var deltaTime;
var isIn;
var globalAlpha = 0;
function init() {
    console.log("init");
    canvas =  document.getElementById("star");
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;
    document.addEventListener("mousemove",mousemove,false);
    picture.src = "pic/background.jpg";
    starpic.src = "pic/star.png";
    for(var i = 0; i < starNum; i++){
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }

    lastTime = Date.now();
    gameloop();
}
document.body.onload=init;
//设置背景
function drawBackground() {
    ctx.fillStyle =  "#f5f5f5";
    ctx.fillRect(50,0,w,h);
}
//每过一段时间刷新画布
function gameloop() {
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    window.requestAnimFrame(gameloop);
    drawBackground();
    drawpic();
    drawStars();
    alive();
}
//绘制背景图
function drawpic(){
    ctx.drawImage(picture,150,50,900,450);
}
//鼠标函数
function mousemove(e) {
    if(e.offsetX || e.layerX){
        var px = e.offsetX == undefined ?e.layerX:e.offsetX;
        var py = e.offsetY == undefined ?e.layerY:e.offsetY;
        console.log(px+" py:"+py);
        if(px > 150 && px < 1050 && py >50 && py < 500){
            isIn = true;
        }else{
            isIn = false;
        }
    }
}