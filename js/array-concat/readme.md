#����ϲ���ȥ��

[Demo](http://himmas.github.io/Himmas_demo/js/array-concat/)



Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

����������ϲ���ȥ���ظ��Ĳ���

��:

`[1, 2], [3, 4] => [1,2,3,4]`

`[1, 3, 2], [5, 2, 1, 4], [2, 1] => [1, 3, 2, 5, 4]`

`[4, "a", 2], [] => [4, "a", 2]`

> ��ͨ�汾

```javascript
function uniteUnique() {
  //your code here
  var obj = {};
  var res = [];
  for(var i in arguments){ 
      arguments[i].forEach(function(e){
          if(!obj[e]){
             res.push(e);
             obj[e] = true;//����ǰֵ��Ϊ��,ֵΪtrue
          }
      });
  }
  
  return res;
}
```
arguments��һ�����ز������ܹ���ȡ�����д��ݽ����Ĳ�������һ������

> ���Ű汾

```javascript
function uniteUnique(...lsts) {
    let args = [].concat(...lsts);
    return args.filter((arg, i) => args.indexOf(arg) == i);
}
```
`...lsts` es6������rest����,���ڻ�ȡ�����Ķ������,�����Ϳ��Բ�ʹ��arguments������,��arguments��ͬ���ǣ�����һ������

`array.concat()`���Ժϲ��������

`array.fliter()` filter() ����ʹ��ָ���ĺ�����������Ԫ�أ�������һ����������ͨ�����Ե�Ԫ�ص�������

```javascript
arr.filter(callback[, thisArg])
```


����

- callback
  �������������ÿ��Ԫ�صĺ���������ʱʹ�ò��� (element, index, array)��
  ����true��ʾ������Ԫ�أ�ͨ�����ԣ���false�򲻱�����
- thisArg
  ��ѡ��ִ�� callback ʱ������ this ��ֵ��
  
  
  filter Ϊ�����е�ÿ��Ԫ�ص���һ�� callback ����������������ʹ�� callback ���� true �� �ȼ��� true ��ֵ ��Ԫ�ش���һ�������顣callback ֻ�����Ѿ���ֵ�������ϱ����ã�������Щ�Ѿ���ɾ�����ߴ�δ����ֵ���������ᱻ���á���Щû��ͨ�� callback ���Ե�Ԫ�ػᱻ���������ᱻ�������������С�
  
  callback ������ʱ��������������
  
- Ԫ�ص�ֵ
- Ԫ�ص�����
- ������������
  
  ���Ϊ filter �ṩһ�� thisArg �����������ᱻ��Ϊ callback ������ʱ�� this ֵ������callback �� this ֵ�ڷ��ϸ�ģʽ�½���ȫ�ֶ����ϸ�ģʽ��Ϊ undefined��
 
```javascript
 (arg, i) => args.indexOf(arg) == i//��ͷ����
```

es6�����˼�ͷ������������`=>`���庯��

```javascript
var f = v => v;
```

��ͬ��

```javascript
var f = function(v){
    return v;
}
```
����ͷ�����Ĵ���鲿�ֶ���һ����䣬��Ҫʹ�ô����Ž���������������ʹ��return����