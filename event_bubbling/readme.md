## �����¼�ð�����¼�����
 [Demo](http://himmas.github.io/Himmas_demo/event_bubbling/)
## ����demo

```javascript
$outer.addEventListener("click", function (e) {
    //do something
 
}, false);
 
```
addEventListener:��ΪԪ������¼������������
����������Ϊ�������� true:�ڲ���׶ε��� false:��ð�ݽ׶ε����¼��������
```javascript
addEventListener�﷨��
element.addEventListener(event,function,useCapture);
addEventListener����ֵ��
event:���롣�ַ�����ָ���¼�������ע�⣺��Ҫʹ��"on"ǰ׺�����磺ʹ��"click",������"onclick"��;
function:���롣ָ���¼�������ִ�еĺ�����
useCapture:��ѡ������ֵ��
    -true���¼��ڲ���׶�ִ��
    -false��Ĭ�ϡ��¼���ð�ݽ׶�ִ�С�
```
```javascript
e.stopPropagation();
```
stopPropagation:��ֹ�¼�ð��
��demo�д򿪿���̨���Կ�����ӡ����Ӧ��target��currenttarget

## ʾ��ͼ
![](http://7xrkml.com1.z0.glb.clouddn.com/20131028160201571.jpg)
