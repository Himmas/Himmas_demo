## 关于事件冒泡与事件捕获
 [Demo](http://himmas.github.io/Himmas_demo/event_bubbling/)
## 关于demo

```javascript
$outer.addEventListener("click", function (e) {
    //do something
 
}, false);
 
```
addEventListener:可为元素添加事件监听处理程序,具体可参考[这里](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

第三个参数为布尔类型 

true:在捕获阶段调用 

false:在冒泡阶段调用事件处理程序


```javascript
addEventListener语法：
element.addEventListener(event,function,useCapture);
addEventListener参数值：
event:必须。字符串，指定事件名。（注意：不要使用"on"前缀。例如：使用"click",而不是"onclick"）;
function:必须。指定事件触发事执行的函数。
useCapture:可选。布尔值。
    -true：事件在捕获阶段执行
    -false：默认。事件在冒泡阶段执行。
```
```javascript
e.stopPropagation();
```
stopPropagation:阻止事件冒泡
在demo中打开控制台可以看到打印出相应的target和currenttarget

## 示例图
![](http://7xrkml.com1.z0.glb.clouddn.com/20131028160201571.jpg)
