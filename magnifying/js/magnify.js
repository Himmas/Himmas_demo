var min = document.querySelector('.min'),
    max = document.querySelector('.max'),
    fd = document.querySelector('.fd'),
    img = document.querySelector('.max img');

min.onmouseover = function (){
	//鼠标覆盖显示max和fd
	max.style.display='block';
	fd.style.display='block';
	//离开时隐藏
	min.onmouseout = function (){
		max.style.display = 'none';
		fd.style.display = 'none';
	}
	//放大镜移动范围
	min.onmousemove = function(){
		//鼠标触摸点
		var x = event.clientX - min.offsetLeft - fd.offsetWidth/2;
		var y = event.clientY - min.offsetTop - fd.offsetHeight/2;
		//最大移动距离
		var maxX = min.clientWidth-fd.offsetWidth;
		var maxY = min.clientHeight - fd.offsetHeight;
		
		//边界判断
		if(x<=0){
			x = 0;
		}else if(x>=maxX){
			x = maxX;
		}
		if(y<=0){
			y=0;
		}else if(y>=maxY){
			y=maxY;
		}
		//放大镜的位置
		fd.style.left = x + 'px';
		fd.style.top = y + 'px';
		
		//移动比例
		var yX = x/maxX;
		var yY = y/maxY;
		
		//max对应显示
		img.style.left = yX*(max.clientWidth-img.offsetWidth)+'px';
		img.style.top = yY*(max.clientHeight-img.offsetHeight)+'px';
	}
}
