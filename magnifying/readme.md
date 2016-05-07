## 关于放大镜效果
- 所谓放大镜效果其实是由两张图片来完成，一张小图一张大图，鼠标放在小图上移动，从而控制大图来移动，给人一种图片被放大的错觉。
- 展示页 [链接](http://himmas.github.io/Himmas_demo/magnifying/index.html)

## 关于DEMO
#### html部分
- `min`是小图片，`max`是放大图片,`fd`是放大镜
- css样式中：max的`overflow：hidden`是把大图片超出的部分隐藏
- 放大镜最后要随鼠标移动而移动，是通过改变左边的距离为实现的，所以要设置定位`position:absolute`,且`left:0`
- 原生js：注释大部分都写在代码里，其中鼠标进入小图片的放大镜和大图片的出现比较简单，就是`display=none/block`
-
