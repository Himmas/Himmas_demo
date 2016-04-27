## 关于幽灵按钮的制作
 [Demo](http://himmas.github.io/Himmas_demo/btn-transform/)

## 关于demo
1.具体的用法在css文件也可看到，我这里只做简单声明
- 主要知识点：transform；transition；box-sizing；border-radius
- 具体的属性请自己查看

## Transform

### 定义和用法
- transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜
- rotate(angle )定义 2D 旋转，在参数中规定角度
- rotateX(angle)定义沿着 X 轴的 3D 旋转。
- rotateY(angle)定义沿着 Y 轴的 3D 旋转。
- rotateZ(angle)定义沿着 Z 轴的 3D 旋转。
- scale(x,y)定义 2D 缩放转换。
- scale3d(x,y,z)定义 3D 缩放转换。
- scaleX(x)通过设置 X 轴的值来定义缩放转换。
- scaleY(y)通过设置 Y 轴的值来定义缩放转换。
- scaleZ(z)通过设置 Z 轴的值来定义 3D 缩放转换。

### 浏览器支持
- Internet Explorer 10、Firefox、Opera 支持 transform 属性。
- Internet Explorer 9 支持替代的 -ms-transform 属性（仅适用于 2D 转换）。
- Safari 和 Chrome 支持替代的 -webkit-transform 属性（3D 和 2D 转换）。
- Opera 只支持 2D 转换。

## Transition

### 定义和用法
- transition 属性是一个简写属性，用于设置四个过渡属性：
 - transition-property
 - transition-duration
 - transition-timing-function
 - transition-delay

### 语法
- transition: property duration timing-function delay;

### 值描述
- transition-property规定设置过渡效果的 CSS 属性的名称。
- transition-duration规定完成过渡效果需要多少秒或毫秒。
- transition-timing-function规定速度效果的速度曲线。
- transition-delay定义过渡效果何时开始(延时执行时间)。 

### 浏览器支持
- Internet Explorer 10、Firefox、Opera 和 Chrome 支持 transition 属性。
- Safari 支持替代的 -webkit-transition 属性。
- 注释：Internet Explorer 9 以及更早版本的浏览器不支持 transition 属性。

## box-sizing
### 定义和用法
- box-sizing 属性允许以特定的方式定义匹配某个区域的特定元素。

### 语法
- box-sizing: content-box|border-box|inherit

### 值描述
- content-box
 - 宽度和高度分别应用到元素的内容框。
 -在宽度和高度之外绘制元素的内边距和边框。
- border-box
 - 为元素设定的宽度和高度决定了元素的边框盒。
 - 就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
 - 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
- inherit  规定应从父元素继承 box-sizing 属性的值。

### 浏览器支持
- Internet Explorer、Opera 以及 Chrome 支持 box-sizing 属性。
- Firefox 支持替代的 -moz-box-sizing 属性。

## border-radius

### 定义和用法
- border-radius 属性是一个简写属性，用于设置四个 border-*-radius 属性。

### 语法
- border-radius: 1-4 length|% / 1-4 length|%;

### 值描述
- length 定义圆角的形状。
- border-box 以百分比定义圆角的形状。

### 浏览器支持
- IE9+、Firefox 4+、Chrome、Safari 5+ 以及 Opera 支持 border-radius 属性。

