# 关于demo
>时钟小demo.[Demo](http://himmas.github.io/Himmas_demo/canvas/particle-clock/)

时钟小Demo所有的代码都有注释.本宝宝就不一一解释了.(尴尬的说人话,不喜欢贴代码)

说下大概的实现原理把：
    1.先想好0-9的点阵怎么写.(百度或者谷歌或者.看本宝宝的代码)
    2.然而想想怎么体现出时间差.如果你做的是时钟而不是计时器的话(也就是判断前后差一秒的时间差,这个本宝宝的实现比较蠢.尴尬)
    3.时间差时间了么.就是添加小球了.(之前不是写了点阵了么,就是它)循环点阵.给每个点阵你自己定义的显示值(显示值就是你要添加小球的位置).添加小球.颜色自定.
    4.如果你想的话可以坐下碰撞检测和初始位移让它看起来更真实一点(不做也可以,到这里逻辑就完美了).
    
实现:
  1.点阵我就不贴代码了.(尴尬)
  
  2.时间差的部分(全部的自己去看.讲真)
      function getShowTime(){
      	var test_time=new Date();
      	var ret = test_time.getHours() * 3600 + test_time.getMinutes() * 60 + test_time.getSeconds();
      	console.log("40",ret);
      	return ret;
      }
      var newShowTime=getShowTime();
	
    	var hours=parseInt( newShowTime / 3600);
    	var minutes=parseInt( (newShowTime - hours * 3600)/60 );
    	var seconds=newShowTime % 60;
    	
    	var now_hours=parseInt( curShowTimeSeconds / 3600);
    	var now_minutes=parseInt( (curShowTimeSeconds - now_hours * 3600)/60 );
    	var now_seconds=curShowTimeSeconds % 60;
    	
    	这应该是更新部分...
    	
  3.小球循环部分:
      var balls=[];
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
  	
  	4.自己看代码注释...
  	
  	5.[本宝宝的canvas启蒙老师](https://github.com/liuyubobobo)
