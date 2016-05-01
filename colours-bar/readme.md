# 前言
前阵子看到尤小右同学的主页上有这样一个彩带[点这里](http://evanyou.me/)

观察了小右的知乎回答之后,找到了实现原理(～￣▽￣)～ [原理点这里](http://krazydad.com/tutorials/makecolors.php)

于是实现了一个简单版本[Demo](http://himmas.github.io/Himmas_demo/colours-bar/)

简单版demo没有专门去计算三角形第三个点的坐标范围,有小小的瑕疵,常常不能横满整个屏幕
# 原理
#### 主要分成以下几块
- 如何生成彩虹色
- 如何绘制连续的三角形

# 如何生成彩虹色
彩虹色[Demo](http://himmas.github.io/Himmas_demo/colours-bar/colour-bar.html)
首先，如何生成一条灰带？

正弦波能帮助我们连续地产生-1~1之间的数,可以满足我们的需求

![](http://7xt8hz.com2.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720160501161024.png)		
```javascript 	
var frequency = .3;
for (var i = 0; i < 32; ++i)
{
   Document.write( Math.sin(frequency * i)  );
}
```

frequency约等于6.2时,正好一个周期(正弦波的周期为2PI 约等于6.2)


| Degrees |Radians |
| ------- |--------|
| 0       |0       |
| 90      | π/2    |
| 180     | π      | 
| 270     | 3π/2   |
| 360     | 2π     |
  
由于正弦波的区间(-1,1),而灰带需要的数值区间在[0,255] 我们需要一些方法来将正弦波进行转换


——To Be Continued——






