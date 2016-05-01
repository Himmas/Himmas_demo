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

value = Math.sin(frequency*increment)*amplitude + center;

`center`是我们期望的中间值,`amplitude`是波峰与波谷的绝对值

如`amplitude = 255/2` `center = 255/2` 则色彩区间为0-255
`Math.sin(frequency*i)*128 + 127`也足够接近了

```javascript
 var amplitude = 128;
    var center = 127;
    //rgb分量相同时是灰色
    for (var i = 0; i < 64; ++i)
    {
        v = Math.sin(frequency*i) * amplitude + center;

        // Note that &#9608; is a unicode character that makes a solid block
        document.write( '<font v='+v+' color="' + RGB2Color(v,v,v) + '">&#9608;</font>');
    }
```

`RGB2Color`是将rgb分量转换成16进制色值的方法

```javascript
    //将rgb转换成16进制
    function RGB2Color(r,g,b)
    {
        return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
    }
    //将rgb分量装换成对应的两位十六进制形式 170=>AA
    function byte2Hex(n)
    {
        var nybHexString = "0123456789ABCDEF";
        return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
    }
    //4位二进制数对应一个十六进制数 170>>1 = 85 170>>3 = 21 m>>n = m/2^n 并取整
    //n & 0x0F = n%16
```

三条正弦或余弦波错位可得到一条彩带
![](http://7xt8hz.com2.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720160501221455.png)

以下是我的实现版本:

```javascript
     var j= 1/6;
     while(j<=2){
        for (var i = 0; i < 64; ++i)
        {
            red   = Math.sin(frequency*i + 0) * amplitude + center;
            green = Math.sin(frequency*i +j) * amplitude + center;
            blue  = Math.sin(frequency*i +j*2) * amplitude + center;
    
            document.write( '<font color="' + RGB2Color(red,green,blue) + '">&#9608;</font>');
        }
        document.write( '<br/>');
        j+=1/6;
     }
```
不同的振幅和相位以及不同的错位间距可以产生不同的彩带,如
```javascript
amplitude =55;
center = 200;
```

![](http://7xt8hz.com2.z0.glb.clouddn.com/QQ%E5%9B%BE%E7%89%8720160501222256.png)

# 如何绘制连续的三角形
[demo](http://himmas.github.io/Himmas_demo/colours-bar/canvas-triangle.html)
```javascript
    //画连续的三角形并填色
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(150,70);
    ctx.lineTo(80,120);
    ctx.closePath();
    ctx.fillStyle = "#89FE8F";//设置颜色
    ctx.fill();//填色
    ctx.beginPath();
    ctx.moveTo(80,120);
    ctx.lineTo(150,70);
    ctx.lineTo(300,130);
    ctx.closePath();
    ctx.fillStyle = "#AEF673";
    ctx.fill();
```

### 完毕(～￣▽￣)～




