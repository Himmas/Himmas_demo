#canvas彩色小花
[Demo](http://himmas.github.io/Himmas_demo/canvas-flower/)

![](http://7xt8hz.com1.z0.glb.clouddn.com/canvas-flower3.png)

#实现原理

我们的小花是由36片叶片围绕圆形构成

###原理大致分为两部分

- 如何生成花瓣
- 如何绕圆心生成花瓣
- 如何实现色环

#如何生成花瓣

这里主要使用的是`canvas` 的 `arcTo()`这个方法

`arcTo()`方法用于画布上创建介于两个切线之间的弧

如 [Demo](http://himmas.github.io/Himmas_demo/canvas-flower/arcTo.html)

```javascript

     var thisCanvas = document.getElementsByTagName('canvas')[0];
     var x = thisCanvas.getContext('2d');
     x.beginPath();
     x.moveTo(100, 100);
     x.arcTo(200, 100, 200, 200, 100);
     x.strokeStyle = "rgba(0,0,0,0.5)";
     x.stroke();

```

![](http://7xt8hz.com1.z0.glb.clouddn.com/arcTo.png)

这里分别以A(100,100),C(200,100),B(200,200)为端点,100为半径(AD),D为圆形画与AC,BC相切的圆弧

两条圆弧即可拼成一片花瓣

#如何绕圆心生成花瓣

如图

![](http://7xt8hz.com1.z0.glb.clouddn.com/canvas-flower2.png)

我们需要绕圆心生成n个花瓣,每个花瓣的两端分别位于半径为r和半径为R的圆上。这里的变量为两点连线相对于水平线的夹角,即∠COB

我这边需要36个花瓣，所以每个花瓣的角度增量为PI/18

我们设定东方水平线上为第一片花瓣

假设我们要花第i片花瓣(假设以图上的EC为端点),我们需要的数值有 点O,E,H,D,C的坐标，以及圆弧半径ED

```javascript
E.x = r*Math.cos(Math.PI/18*i)
E.y = r*Math.sin(Math.PI/18*i)
C.x = R*Math.cos(Math.PI/18*i)
C.y = R*Math.sin(Math.PI/18*i)
```

接下来要求点H,D的坐标
以点H为例子
假设将点H移到G这个位置

```javascript
var xr = 0.707(R-r) //OG的长度
G.x = xr*Math.cos(Math.PI/18*i+Math.PI/4) //45度+当前角度
G.y = xr*Math.sin(Math.PI/18*i+Math.PI/4)
H.x = G.x + (R-r)/2
H.y = G.y + (R-r)/2
```
由此可推点D坐标

以上就是我们所需的全部数据了,需要注意的是，当年计算所得是相对于圆心的坐标，还要装换成相对于canvas左上角的坐标

最终代码如下:

```javascript
    function draw(i){
        x.beginPath();
        var pointr = {
            x:r*Math.cos(baseIncrement*i)+centerPoint.x,
            y:r*Math.sin(baseIncrement*i)+centerPoint.y
        };
        var pointR = {
            x:R*Math.cos(baseIncrement*i)+centerPoint.x,
            y:R*Math.sin(baseIncrement*i)+centerPoint.y
        }
        x.moveTo(pointr.x, pointr.y);
        var y1 = xr*Math.sin(baseIncrement*i-Math.PI/4)+r*Math.sin(baseIncrement*i)+centerPoint.y;
        var x1 = xr*Math.cos(baseIncrement*i-Math.PI/4)+r*Math.cos(baseIncrement*i)+centerPoint.x;
        var y2 =  xr*Math.sin(baseIncrement*i+Math.PI/4)+r*Math.sin(baseIncrement*i)+centerPoint.y;
        var x2 = xr*Math.cos(baseIncrement*i+Math.PI/4)+r*Math.cos(baseIncrement*i)+centerPoint.x;
        x.arcTo(x1, y1, pointR.x, pointR.y, xr);
        x.arcTo(x2, y2,pointr.x,pointr.y, xr);
        x.closePath();
        rr-=u/-36;
        var red = Math.cos(rr)*127+128;
        var green = Math.cos(rr+u/3)*127+128;
        var blue = Math.cos(rr+u/3*2)*127+128;
        x.fillStyle = "#dadada"//色彩计算
        x.fill();
    }
```

再用一个循环来生成36个花瓣

```javascript
    for(var i=0;i<36;i++){
        draw(i);
    }
```

#如何实现色环

色环的生成原理可以参考[这里](https://github.com/Himmas/Himmas_demo/tree/gh-pages/colours-bar)

#最后

然后就能生成小花拉~

这里还实现了一个滚动版本[Demo](http://himmas.github.io/Himmas_demo/canvas-flower/index_test.html)

完毕(～￣▽￣)～