var _scorll=18;
var _width=600;
var _height=600;
var arr_r = [];
var arr_x = [];
var arr_y = [];
//主函数
window.onload=function(){
	var canvas=document.getElementById("canvas");
	canvas.width=_width;
	canvas.height=_height;
	var context=canvas.getContext("2d");
	var i=1;
	
//	径向渐变背景图片
	// var skyStyle=context.createRadialGradient(
	// 	canvas.width/2,canvas.height,0,
	// 	canvas.width/2,canvas.height,canvas.height
	// );
	// skyStyle.addColorStop(0.0,'#035');
	// skyStyle.addColorStop(1.0,'#000');
	// context.fillStyle=skyStyle;
	// context.fillRect(0,0,canvas.width,canvas.height);
	
//	星星单循环部分

	for(var j=0;j<10;j++){
		var _r=Math.random()*10+10;
		var _R=_r*2;
		var _x=Math.random()*canvas.width;
		var _y=Math.random()*canvas.height;
//		var _sor=Math.random()*360;
		var draw=drawStar(context,_r,_R,_x,_y,_scorll);	
		arr_r.push(_r);
		arr_x.push(_x);
		arr_y.push(_y);
	}
// 	console.log(_scorll,_r,_R,_x,_y);
	setInterval(function(){	
		context.clearRect(0,0,_width, _height);//清除指定画布区域
		//	径向渐变背景图片
		var skyStyle=context.createRadialGradient(
		canvas.width/2,canvas.height,0,
		canvas.width/2,canvas.height,canvas.height
		);
		skyStyle.addColorStop(0.0,'#035');
		skyStyle.addColorStop(1.0,'#000');
		context.fillStyle=skyStyle;
		context.fillRect(0,0,canvas.width,canvas.height);
		//循环区域
		for(var j=0;j<10;j++){
			_scorll=i*1.5;
			i++;
			context.save();
			drawStar(context,arr_r[j],arr_r[j]*2,arr_x[j],arr_y[j],_scorll);
			context.restore();
		}			
	},80);
}

//五角星计算函数
function drawStar(cxt,r,R,x,y,sor){
	// cxt.clearRect(0,0,_width, _height);清除指定画布区域
	// cxt.clearRect(x,y,r,R);/*清除指定画布区域*/
	cxt.beginPath();
	for(var i=0;i<5;i++){
		cxt.lineTo(
			Math.cos((18+i*72-sor)/180*Math.PI)*R+x,/*内角计算函数*/
			-Math.sin((18+i*72-sor)/180*Math.PI)*R+y
		);
		cxt.lineTo(
			Math.cos((54+i*72-sor)/180*Math.PI)*r+x,/*外角计算函数*/
			-Math.sin((54+i*72-sor)/180*Math.PI)*r+y
		);
	}
	cxt.closePath();
	cxt.fillStyle="#4087ce";
	cxt.strokeStyle="#e0e0e0";
	cxt.lineWidth=5;
	
	cxt.fill();
	cxt.stroke();
}

