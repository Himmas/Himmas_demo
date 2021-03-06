#常用命令集合


##删除
1、删除文件夹以及文件夹中的所有文件命令：
```
rm -rf 目录名字
```
其中：
```
-r：向下递归删除
-f：直接强行删除，且没有任何提示
``` 
2、删除文件命令
```
rm -f 文件名
```
将会强行删除文件，且无提示
 
注意：
使用`rm -rf`要格外注意，linux中没有回收站，慎重删除

##新建文件与文件夹
```
cd  /someDir   定位到目标目录
mkdir test  新建一个叫test的文件夹
```
```
touch  test/a.txt 在test文件夹下建一个名为a.txt的文件
```

##查看文件
```
ls -a 查看该目录下所有文件,包括隐藏文件
ls 查看该目录下文件
```

##打开文件
```
cat :由第一行开始显示文件内容；
tac：从最后一行开始显示，可以看出tac与cat字母顺序相反；
nl:显示的时候输出行号；
more：一页一页的显示文件内容；
less与more类似，但它可以向前翻页；
head：只看前几行；
tail：只看最后几行；
od：以二进制的方式读取文件。
vi和vim作为编辑器，也可以打开文件查看内容。
```
```
:wq 保存并退出修改
:wq! 保存并退出修改,无视文件的只读属性
```
##移动文件
- 命令
```
mv [options] 源文件或目录 目标文件或目录,如:
mv node-v6.2.0.tar.gz lib 讲node-v6.2.0.tar.gz移动到lib文件夹下
```

- `[options]`主要参数
```
－i：交互方式操作。如果mv操作将导致对已存在的目标文件的覆盖，此时系统询问是否重写，要求用户回答”y”或”n”，这样可以避免误覆盖文件。
－f：禁止交互操作。mv操作要覆盖某个已有的目标文件时不给任何指示，指定此参数后i参数将不再起作用。
```
- 第二个参数
当第二个参数类型是文件时，mv命令完成文件重命名，它将所给的源文件或目录重命名为给定的目标文件名。
当第二个参数是已存在的目录名称时，源文件或目录参数可以有多个，mv命令将各参数指定的源文件均移至目标目录中。在跨文件系统移动文件时，mv先拷贝，再将原有文件删除，而链至该文件的链接也将丢失。