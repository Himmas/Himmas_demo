var windows_width=1024,
	windows_height=768,
	radius=8,
	round_top=60,
	round_left=30,
	minutesShowTimeSeconds=0,
	curShowTimeSeconds=0;
//const endTime=new Date('2016/3/4,13:13:13');
var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];

//主函数
window.onload=function test1(){
	windows_width = $(window).width()-40;
    windows_height = $(window).height()-40;
	$("#canvas").attr("width",windows_width);
	$("#canvas").attr("height",windows_height);
	round_left = Math.round(windows_width /10);
	round_top = Math.round(windows_height /5);
	radius = Math.round(windows_width * 4 / 5 / 108)-1;
	var _canvas=document.getElementById('canvas').getContext("2d");
	
	curShowTimeSeconds = getShowTime();
	
	setInterval(function(){
//		updateBalls();
		randerTest(_canvas);
		update();
    },50);
//  setInterval(function(){
//      update();
//  },1000);
//  圆角矩形背景调用方法(画布清除方法冲突)
//  saveRoundRect(_canvas,0,0,windows_width,windows_height,50);
}

function getShowTime(){
	var test_time=new Date();
	var ret = test_time.getHours() * 3600 + test_time.getMinutes() * 60 + test_time.getSeconds();
	console.log("40",ret);
	return ret;
}

//更新时间&&判断更新部分添加小球方法
function update(){
//	var test_time=new Date();
	var newShowTime=getShowTime();
	
	var hours=parseInt( newShowTime / 3600);
	var minutes=parseInt( (newShowTime - hours * 3600)/60 );
	var seconds=newShowTime % 60;
	
	var now_hours=parseInt( curShowTimeSeconds / 3600);
	var now_minutes=parseInt( (curShowTimeSeconds - now_hours * 3600)/60 );
	var now_seconds=curShowTimeSeconds % 60;
	
	if(seconds!=now_seconds){
		if( parseInt(hours/10)!=parseInt(now_hours/10)){
	        addBalls( round_left + 0 , round_top , parseInt(hours/10) );
	    }
	    if( parseInt(hours%10)!=parseInt(now_hours%10)){
	        addBalls( round_left + 15*(radius+1) , round_top , parseInt(hours%10) );
	    }
	    if( parseInt(minutes/10)!=parseInt(now_minutes/10)){
	        addBalls( round_left + 40*(radius+1) , round_top , parseInt(minutes/10) );
	    }
		if( parseInt(minutes%10)!=parseInt(now_minutes%10)){
		    addBalls( round_left + 55*(radius+1) , round_top , parseInt(minutes%10) );
		}
	    if( parseInt(seconds/10)!=parseInt(now_seconds/10)){
	        addBalls( round_left + 80*(radius+1) , round_top , parseInt(seconds/10) );
	    }
	    if( parseInt(seconds%10)!=parseInt(now_seconds%10)){
	        addBalls( round_left + 95*(radius+1) , round_top , parseInt(seconds%10) );
	    }
	    curShowTimeSeconds = newShowTime;
    }
    updateBalls();
    console.log( balls.length)
}

//添加小球函数
function addBalls(x,y,num){
	for( var i = 0  ; i < digit[num].length ; i ++ ){
	    for( var j = 0  ; j < digit[num][i].length ; j ++ ){
	        if( digit[num][i][j] == 1 ){
	            var _Ball = {
	            	x:x+j*2*(radius+1)+(radius+1),
                    y:y+i*2*(radius+1)+(radius+1),
	            	g:1.5+Math.random(),
	          		vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
	          		vy:Math.pow(0,Math.ceil(Math.random()*1000))*(-5),
	          		color:colors[Math.floor( Math.random()*colors.length)]
	            }
	            balls.push(_Ball);
	        }
	    }
	}
}

//小球更新函数和碰撞监测
function updateBalls(){
	for(var i=0;i<balls.length;i++){
		balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
        if(balls[i].y>=windows_height-radius){
        	balls[i].y=windows_height-radius;
        	balls[i].vy=-balls[i].vy*0.75;
        }
	}
	var cnt = 0
    for( var i = 0 ; i < balls.length ; i ++ )
        if( balls[i].x + radius > 0 && balls[i].x -radius < windows_width ){
            balls[cnt++] = balls[i]
           }
    while( balls.length > cnt ){
        balls.pop();
    }
}

//画布上显示当前时间(基础显示)
function randerTest(cxt){
	cxt.clearRect(0,0,windows_width, windows_height);
//	var test_time=new Date();
	var hours=parseInt( curShowTimeSeconds / 3600);
	var minutes=parseInt( (curShowTimeSeconds - hours * 3600)/60 );
	var seconds=curShowTimeSeconds % 60;
	
	renderDigit(round_left,round_top,parseInt(hours/10),cxt);
    renderDigit(round_left + 15*(radius+1),round_top,parseInt(hours%10) ,cxt);
    renderDigit(round_left + 30*(radius+1),round_top,10,cxt )
    renderDigit(round_left + 40*(radius+1),round_top,parseInt(minutes/10) ,cxt);
    renderDigit(round_left + 55*(radius+1),round_top,parseInt(minutes%10) ,cxt);
    renderDigit(round_left + 70*(radius+1),round_top,10,cxt )
    renderDigit(round_left + 80*(radius+1),round_top,parseInt(seconds/10) ,cxt);
    renderDigit(round_left + 95*(radius+1),round_top,parseInt(seconds%10) ,cxt);
	
	for( var i = 0 ; i < balls.length ; i ++ ){
        cxt.fillStyle=balls[i].color;
        cxt.beginPath();
        cxt.arc( balls[i].x , balls[i].y , radius , 0 , 2*Math.PI , true );
        cxt.closePath();

        cxt.fill();
    }
}

//画布上用点阵显示时间(基础点阵)
function renderDigit(x,y,num,cxt){
	cxt.fillStyle = "rgb(0,102,153)";	
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(radius+1)+(radius+1),y+i*2*(radius+1)+(radius+1),radius,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
			
		}
	}
}

//保存圆角矩形背景
function saveRoundRect(cxt,x,y,_width,_height,_r){
	cxt.save();
	cxt.translate(x,y);
	pathRoundRect(cxt,_width,_height,_r);
	cxt.strokeStyle="blue";
	cxt.stroke();
	cxt.restore();
}

//圆角矩形背景
function pathRoundRect(cxt,_width,_height,_r){
	console.log('150');
	cxt.closePath();
	cxt.arc(_width-_r,_height-_r,_r,0,Math.PI/2);
	cxt.lineTo(_r,_height);
	cxt.arc(_r,_height-_r,_r,Math.PI/2,Math.PI);
	cxt.lineTo(0,_r);
	cxt.arc(_r,_r,_r,Math.PI,Math.PI*3/2);
	cxt.lineTo(_width-_r,0);
	cxt.arc(_width-_r,_r,_r,Math.PI*3/2,Math.PI*2);
	cxt.closePath();
}
