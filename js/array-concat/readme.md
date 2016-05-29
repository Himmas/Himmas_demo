#数组合并并去重

[Demo](http://himmas.github.io/Himmas_demo/js/array-concat/)



Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

讲两个数组合并并去掉重复的部分

如:

`[1, 2], [3, 4] => [1,2,3,4]`

`[1, 3, 2], [5, 2, 1, 4], [2, 1] => [1, 3, 2, 5, 4]`

`[4, "a", 2], [] => [4, "a", 2]`

> 普通版本

```javascript
function uniteUnique() {
  //your code here
  var obj = {};
  var res = [];
  for(var i in arguments){ 
      arguments[i].forEach(function(e){
          if(!obj[e]){
             res.push(e);
             obj[e] = true;//讲当前值作为键,值为true
          }
      });
  }
  
  return res;
}
```
arguments是一个隐藏参数，能够获取到所有传递进来的参数，是一个对象

> 酷炫版本

```javascript
function uniteUnique(...lsts) {
    let args = [].concat(...lsts);
    return args.filter((arg, i) => args.indexOf(arg) == i);
}
```
`...lsts` es6引入了rest参数,用于获取函数的多余参数,这样就可以不使用arguments对象了,与arguments不同的是，它是一个数组

`array.concat()`可以合并多个数组

`array.fliter()` filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组

```javascript
arr.filter(callback[, thisArg])
```


参数

- callback
  用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。
  返回true表示保留该元素（通过测试），false则不保留。
- thisArg
  可选。执行 callback 时的用于 this 的值。
  
  
  filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或 等价于 true 的值 的元素创建一个新数组。callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。
  
  callback 被调用时传入三个参数：
  
- 元素的值
- 元素的索引
- 被遍历的数组
  
  如果为 filter 提供一个 thisArg 参数，则它会被作为 callback 被调用时的 this 值。否则，callback 的 this 值在非严格模式下将是全局对象，严格模式下为 undefined。
 
```javascript
 (arg, i) => args.indexOf(arg) == i//箭头函数
```

es6引入了箭头函数，允许用`=>`定义函数

```javascript
var f = v => v;
```

等同于

```javascript
var f = function(v){
    return v;
}
```
若箭头函数的代码块部分多余一条语句，就要使用大括号讲他们括起来，并使用return返回