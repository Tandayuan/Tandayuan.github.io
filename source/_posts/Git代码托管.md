---
title: Git代码托管
date: 2021-06-29 23:36:32
tags:
- Git
description: 
---

本文讲解了将代码托管在Git上的详细过程

<!-- more -->

## 设置本机绑定SSH公钥

+ 进入C:\\用户\电脑名\\.ssh 目录 需要开启隐藏文件显示
+ 如过没有.ssh可以自行建立
+ 在.ssh目录下执行命令,获取SSH公钥

```
ssh-keygen -t rsa
```

+ 三次回车,得到ssh文件

  ![](1.png)



## 本地用户关联到Gitee账户

+ 本地ssh公钥绑定到gitee

![](2.png)

+ gitee 设置->安全设置->SSH公钥

![](3.png)

## Git实现代码托管

+ Gitee上新建仓库

![](4.png)

+ 仓库基本信息
  ![](5.png)

### 实现仓库远程克隆到本地

+ 克隆命令

```
git clone 仓库url
```

+ 已有项目，直接拉取合并

```
git pull origin master --allow-unrelated-histories
```


![](6.png)


+ 实现同步

![](7.png)


### 本地项目托管到Gitee

+ 初始化仓库

  + 新建一个仓库文件夹demo
  + 在demo文件夹下输入命令

  ```
  git init
  ```

+ 跟踪文件

  + demo创文件test.txt

  + 查看跟踪状态

    ```
    git status
    ```

    ![](8.png)

  + 实现跟踪

    ```
    git add .
    ```

    ![](9.png)

+ 托管到本地仓库

  + 托管命令

    ```
    git commit -m "demo_test"
    ```

  + 成功托管
    ![](10.png)

+ 关联Gitee仓库

  **实现托管的最重要的一步**

  + 关联命令

    ```
    git remote add origin 仓库url
    ```

  + 关联成功后,以后就不用再重复关联了

  + 查看托管状态

    ```
    git remote -v
    ```

    ![](11.png)

+ 本地仓库提交到Gitee仓库

  + 提交命令

    master 是gitee仓库创建好的默认分支

    有需求,可以更改成其他的分支。

    ```
    git push origin master
    ```

  + 提示失败解决办法

    1. 实现分支同步

    ```
    git pull --all
    ```

    2. 如果还是失败,强制提交

    ```
    git -u push origin master -f
    ```

  + 成功效果

    ![](12.png)

    ![](13.png)


+ 实现Gitee仓库同步到本地仓库

  **两台设备上有同个的项目,在一台设备上进行文件修改同步到gitee了,另一台设备如何实现只同步修改的文件而不是要重新克隆整个项目呢？**

  + 假设在gitee仓库上增加了个test2.txt文件

    ![](14.png)


  + 拉取命令实现远程gitee仓库同步到本地仓库

    ```
    git pull --all
    ```

  + 成功效果

    ![](15.png)

