###链接 ECS 实例

``` bash
$ ssh username@remotehost //如 ssh root@115.20.39.163
```

接下来会提示输入登录密码,在冒号之后输入然后回车

```bash
root@115.20.39.163's password:
```

成功登录后会提示

```bash
Welcome to Ubuntu 14.04.4 LTS (GNU/Linux 3.13.0-86-generic x86_64)

 * Documentation:  https://help.ubuntu.com/
New release '16.04.1 LTS' available.
Run 'do-release-upgrade' to upgrade to it.


Welcome to aliyun Elastic Compute Service!
```

###下载node安装包

```bash
root@himmas:~# wget https://nodejs.org/dist/v6.2.0/node-v6.2.0.tar.gz
```

若下载速度较慢,可以在本地下载后传给远程服务器

```bash
scp /some/directory/node-v6.2.0.tar.gz root@115.20.39.163:/some/remote/directory
```

###解压并安装

使用解压命令(需要定位到文件所在目录)

```bash
root@himmas:~# tar zxvf node-v6.2.0.tar.gz
```

解压完成后进入源代码目录,打开.configure文件

```bash
root@himmas:~# ls
node-v6.2.0 node-v6.2.0.tar.gz
root@himmas:~# cd node-v6.2.0/
root@himmas:~/node-v6.2.0# ./configure
root@himmas:~/node-v6.2.0# make install
```

等待安装完成

![](http://7xrqm7.com1.z0.glb.clouddn.com/linux-node.png)

###测试

输入`node -v`显示版本号则安装成功

```bash
root@himmas:~/node-v6.2.0# node -v
v6.2.0
```
###小技巧

在terminal中使用两次tab可补全命令


