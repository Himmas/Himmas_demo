## 关于事件冒泡与事件捕获
 [Demo](http://himmas.github.io/Himmas_demo/event_bubbling/)
## 关于demo

```
$outer.addEventListener("click", function (e) {
    //do something
 
}, false);
 
```
addEventListener:可为元素添加时间监听处理程序
第三个参数为布尔类型 true:在捕获阶段调用 false:在冒泡阶段调用事件处理程序
```
e.stopPropagation();
```
stopPropagation:阻止事件冒泡
在demo中打开控制台可以看到打印出相应的target和currenttarget

## 示例图
![](http://7xrkml.com1.z0.glb.clouddn.com/20131028160201571.jpg)
