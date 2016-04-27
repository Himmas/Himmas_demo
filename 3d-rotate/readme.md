## 关于3D的图片旋转
 [Demo](http://himmas.github.io/Himmas_demo/3Dpic/)
## 关于demo的几点注意事项
1. demo是jquery语法写的
- Demo仅供学习,兼容性不佳,建议谷歌浏览器打开
- 打开控制台可以看到每次调用的事件

2.demo的使用方式

```javascript
  $('body').append("<div style='width:5px;height:5px;background-color:red;position:absolute;top:"+y+"px;left:"+x+"px;'></div>");
```
具体在代码的这个位置![](http://7xrkml.com1.z0.glb.clouddn.com/QQ%E6%88%AA%E5%9B%BE20160426093932.png)

上诉的代码是为了方便大家理解做的，目前是注释的，可以去掉注释看看效果

```javascript
 play=setInterval(function(){
                  xn*=0.95;
                  yn*=0.95;
                  roy+=xn*0.2;
                  rox-=yn*0.1;
                  console.log(xn);
                  if(xn<1){
                    clearInterval(play);
                  }
```
setInterval计时器，使得鼠标抬起以后，旋转还可以继续，模拟了惯性。代码里的0.2和0.1类似于反向的加速度，系数越大，停止越快，可以尝试修改，

## css中比较难的知识点
1. 3d布局，了解[这里](http://www.w3school.com.cn/css3/css3_3dtransform.asp)
- 阴影的制作，了解[这里](http://www.css88.com/book/css/properties/only-webkit/box-reflect.htm)



