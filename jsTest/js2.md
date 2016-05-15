---
title: js练习题
date: 2016-05-14 22:52:50
tags: [js]
---

## 适合人群
 > * 有一定的js语言基础
 > * 基础知识不稳固，容易混淆的人

## 题目讲解说明
接上篇[js练习题](http://leaves.miaoclub.cc/2016/05/13/js1/)，由于是自己的理解，可能有些错误，欢迎指出：

## 题目三

### 代码 
```javascript
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);
```
###  运行结果
10

### 知识点说明

活动对象是在进入函数上下文时刻被创建的，它通过函数的arguments属性初始化。arguments属性的值是Arguments对象：

Arguments对象是活动对象的一个属性，它包括如下属性：

 >* callee — 指向当前函数的引用
 >* length — 真正传递的参数个数
 >* properties-indexes (字符串类型的整数) 属性的值就是函数的参数值(按参数列表从左到右排列)。 properties-indexes内部元素的个数等于arguments.length. properties-indexes 的值和实际传递进来的参数之间是共享的。

这个共享其实不是真正的共享一个内存地址，而是2个不同的内存地址，使用JavaScript引擎来保证2个值是随时一样的，当然这也有一个前提，那就是这个索引值要小于你传入的参数个数，也就是说如果你只传入2个参数，而还继续使用arguments[2]赋值的话，就会不一致，例如：
 
```javascript
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2);
```
这时候因为没传递第三个参数a，所以赋值10以后，alert(a)的结果依然是undefined，而不是10，但如下代码弹出的结果依然是10，因为和a没有关系。

### 添加思考

```javascript
function b(x, y, a) {
    arguments[2] = 10;
    alert(arguments[2]);
}
b(1, 2);
```
