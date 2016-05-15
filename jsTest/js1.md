---
title: js练习题
date: 2016-05-13 11:19:24
tags: [js]
---

## 适合人群
 > * 有一定的js语言基础
 > * 基础知识不稳固，容易混淆的人

## 题目讲解说明
接上篇[js练习题](http://leaves.miaoclub.cc/2016/05/12/js/)，由于是自己的理解，可能有些错误，欢迎指出：

## 题目二

### 代码 
```javascript
var a = 1,
    b = function a(x) {
        x && a(--x);
    };
alert(a);
```
###  运行结果
1

### 知识点说明

这个题目看起来比实际复杂，alert的结果是1；这里依然有3个重要的概念需要我们知道。

 - 上篇我们知道了变量声明在进入执行上下文就完成了，其实函数声明也是提前的，所有的函数声明都在执行代码之前都已经完成了声明，和变量声明一样。

 - 函数声明和函数表达式的区别，澄清一下，函数声明是如下这样的代码：
 
```javascript
function functionName(arg1, arg2){
    //函数体
}
```
如下不是函数，而是函数表达式，相当于变量赋值(函数表达式没有提前，就相当于平时的变量赋值。)：

```javascript
var functionName = function(arg1, arg2){
    //函数体
};
```

 - 函数声明会覆盖变量声明，但不会覆盖变量赋值，这个可能不好理解，我们来看个例子
 
```javascript
function value(){
    return 1;
}
var value;
alert(typeof value);    //"function"
```
尽快变量声明在下面定义，但是变量value依然是function，也就是说这种情况下，函数声明的优先级高于变量声明的优先级（函数的形参 > 函数申明 > 变量申明），但如果该变量value赋值了，那结果就完全不一样了：

```javascript
function value(){
    return 1;
}
var value = 1;
alert(typeof value);    //"number"
```
该value赋值以后，变量赋值初始化就覆盖了函数声明。

### 添加思考

针对上面的举例，假如将alert(typeof value);改为alert(typeof value（）);答案将是，第一种情况，number，因为是返回的数字，第二种情况报错，因为value()不是一个方法。
 

### 总结

理解清楚内容后，可以更为理解的表达为

```javascript
var a = 1,
    b = function(x) {
        x && b(--x);
    };
alert(a);
```
这个函数其实是一个有名函数表达式，函数表达式不像函数声明一样可以覆盖变量声明，但你可以注意到，变量b是包含了该函数表达式，而该函数表达式的名字是a；不同的浏览器对a这个名词处理有点不一样，在IE里，会将a认为函数声明，所以它被变量初始化覆盖了，就是说如果调用a(--x)的话就会出错，而其它浏览器在允许在函数内部调用a(--x)，因为这时候a在函数外面依然是数字。基本上，IE里调用b(2)的时候会出错，但其它浏览器则返回undefined。
