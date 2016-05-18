#canvas彩色小花
[Demo](http://himmas.github.io/Himmas_demo/canvas-flower/)

![](http://7xt8hz.com1.z0.glb.clouddn.com/canvas-flower3.png)

#实现原理

我们的小花是由36片叶片围绕圆形构成

###原理大致分为两部分

- 如何生成花瓣
- 如何绘制如何绕圆心生成花瓣
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