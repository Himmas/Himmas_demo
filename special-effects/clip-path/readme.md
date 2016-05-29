# clip-path 与动画
[demo](http://himmas.github.io/Himmas_demo/special-effects/clip-path/)

clip-path:polygon 可创建多边形
前后两个相同顶点数量的多边形可借助 `transition`等属性生成补间动画

```css
.path {
    clip-path: polygon(5px 10px, 16px 3px, 16px 17px);
}
```