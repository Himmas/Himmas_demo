## �����¼�ð�����¼�����
 [Demo](http://himmas.github.io/Himmas_demo/event_bubbling/)
## ����demo

```
$outer.addEventListener("click", function (e) {
    //do something
 
}, false);
 
```
addEventListener:��ΪԪ�����ʱ������������
����������Ϊ�������� true:�ڲ���׶ε��� false:��ð�ݽ׶ε����¼��������
```
e.stopPropagation();
```
stopPropagation:��ֹ�¼�ð��
��demo�д򿪿���̨���Կ�����ӡ����Ӧ��target��currenttarget

## ʾ��ͼ
![](http://7xrkml.com1.z0.glb.clouddn.com/20131028160201571.jpg)
