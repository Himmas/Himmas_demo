## 关于放大镜效果
- 所谓放大镜效果其实是由两张图片来完成，一张小图一张大图，鼠标放在小图上移动，从而控制大图来移动，给人一种图片被放大的错觉
- 展示页 [链接](http://himmas.github.io/Himmas_demo/special-effects/magnifiers//index.html)

## 关于DEMO
#### html部分
- 样式`min`是小图片
- `max`是放大图片
- `fd`是放大镜

#### css样式
- max的`overflow：hidden`是把大图片超出的部分隐藏
- 放大镜最后要随鼠标移动而移动，是通过改变左边的距离为实现的，所以要设置定位`position:absolute`,且`left:0`

#### 原生js
- 注释大部分都写在代码里，其中鼠标进入小图片的放大镜和大图片的出现比较简单，就是`display=none/block`
- 放大镜的中心随鼠标移动而移动，需要用到两个属性`clientX`和`clientY`，鼠标距浏览器左边和上边的距离，是实时获取的
- 设置放大镜移动的位置即距离左边的距离，设为x, `x=event.clientX-min.offsetLeft-fd.offsetWidth/2`，即鼠标的横向移动距离减去小图片距左边的距离再减去放大镜本身宽度的一半
- 垂直方向和水平方向一个原理
- 大图片的移动：鼠标移动多少，大图片移动相应的比例就OK，即`(fd/min=img/max)`.注意大图片移动方向是和放大镜移动方向相反的.注意负号.

#### 关于`client`,`offset`属性的具体用法 [参考这里](http://www.cnblogs.com/panjun-Donet/articles/1294033.html)
