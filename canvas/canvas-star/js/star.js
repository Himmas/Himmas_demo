var starObj = function () {
    this.x;
    this.y;
    this.n;
    this.timer;
    this.xSpeed;
    this.ySpeed;
}
starObj.prototype.init = function () {
    this.x = Math.random()*900+150;
    this.y = Math.random()*450+50;
    this.n = Math.floor(Math.random()*7);
    this.timer = 0;
    this.xSpeed = Math.random()*6-3;
    this.ySpeed = Math.random()*6-3;
}
starObj.prototype.update = function () {
    if(this.x > 1050 || this.x < 150 ||this.y > 500||this.y < 50){
        this.init();
        return;
    }
    this.timer += deltaTime;
    if(this.timer >50){
        this.n +=1;
        this.n %=7;
        this.timer = 0;
    }
    this.x += this.xSpeed * deltaTime * 0.001;
    this.y += this.ySpeed * deltaTime * 0.001;
}
starObj.prototype.draw = function () {
    ctx.save();
    ctx.globalAlpha = globalAlpha;
    //drawImage(img,sx,sy,swidth,sheight,x,y,width,sheight)
    ctx.drawImage(starpic,this.n*7,0,7,7,this.x,this.y,7,7);
    ctx.restore();
}

function drawStars() {
    for(var i = 0; i < starNum; i++){
        stars[i].draw();
        stars[i].update();
    }
}
function alive() {
    if(isIn){
        globalAlpha += 0.03 * deltaTime * 0.05;
        if(globalAlpha > 1){
            globalAlpha = 1;
        }
    }else{
        globalAlpha -= 0.03 * deltaTime * 0.05;
        if(globalAlpha < 0 ){
            globalAlpha = 0;
        }
    }
}