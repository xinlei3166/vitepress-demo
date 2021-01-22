---
title: Git学习笔记
tags:
    - Git
categories:
    - Git
---

[TOC]

# Git简介

## 描述

​	Git(读音为/gɪt/。)是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

​	Torvalds 开始着手开发 Git 是为了作为一种过渡方案来替代 BitKeeper，后者之前一直是 Linux 内核开发人员在全球使用的主要源代码工具。开放源码社区中的有些人觉得BitKeeper 的许可证并不适合开放源码社区的工作，因此 Torvalds 决定着手研究许可证更为灵活的版本控制系统。尽管最初 Git 的开发是为了辅助 Linux 内核开发的过程，但是我们已经发现在很多其他自由软件项目中也使用了 Git。例如 很多 Freedesktop 的项目迁移到了 Git 上。



## 特点

分布式相比于集中式的最大区别在于开发者可以提交到本地，每个开发者通过克隆（git clone），在本地机器上拷贝一个完整的Git仓库。

下图是经典的git开发过程。

![git-流程](https://ws4.sinaimg.cn/large/006tKfTcly1fpei91avvcj30ll0fqmxm.jpg)



Git的功能特性：

从一般开发者的角度来看，git有以下功能：

1、从服务器上克隆完整的Git仓库（包括代码和版本信息）到单机上。

2、在自己的机器上根据不同的开发目的，创建分支，修改代码。

3、在单机上自己创建的分支上提交代码。

4、在单机上合并分支。

5、把服务器上最新版的代码fetch下来，然后跟自己的主分支合并。

6、生成补丁（patch），把补丁发送给主开发者。

7、看主开发者的反馈，如果主开发者发现两个一般开发者之间有冲突（他们之间可以合作解决的冲突），就会要求他们先解决冲突，然后再由其中一个人提交。如果主开发者可以自己解决，或者没有冲突，就通过。

8、一般开发者之间解决冲突的方法，开发者之间可以使用pull 命令解决冲突，解决完冲突之后再向主开发者提交补丁。

从主开发者的角度（假设主开发者不用开发代码）看，git有以下功能：

1、查看邮件或者通过其它方式查看一般开发者的提交状态。

2、打上补丁，解决冲突（可以自己解决，也可以要求开发者之间解决以后再重新提交，如果是开源项目，还要决定哪些补丁有用，哪些不用）。

3、向公共服务器提交结果，然后通知所有开发人员。

优点：

适合[分布式开发](https://baike.baidu.com/item/%E5%88%86%E5%B8%83%E5%BC%8F%E5%BC%80%E5%8F%91)，强调个体。

公共服务器压力和数据量都不会太大。

速度快、灵活。

任意两个开发者之间可以很容易的解决冲突。

离线工作。

缺点：

资料少（起码中文资料很少）。

学习周期相对而言比较长。

不符合常规思维。

代码保密性差，一旦开发者把整个库克隆下来就可以完全公开所有代码和版本信息。



## 工作流程

一般工作流程如下：

- 克隆 Git 资源作为工作目录。
- 在克隆的资源上添加或修改文件。
- 如果其他人修改了，你可以更新资源。
- 在提交前查看修改。
- 提交修改。
- 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

下图展示了 Git 的工作流程：

![it-proces](https://ws2.sinaimg.cn/large/006tKfTcly1fpemtr4g6aj30i20m8jsf.jpg)



# 安装Git

**在linux上安装git**

```sh
yum -y install git
```

**在mac上安装git**

一是使用homebrew安装git。

```Sh
brew install git
```

二是去[git官网](https://git-scm.com)下载文件手动安装。

![mage-20180316120201](https://ws2.sinaimg.cn/large/006tKfTcly1fpeixrxbioj30y80o80v9.jpg)

**测试git是否安装成功**

```Sh
$ git --version
git version 2.16.2
```



# 版本库

## 创建版本库

先创建一个空目录：

```Sh
$ mkdir gitest
$ cd gitest/
$ pwd
/Users/junxi/gitest
```

通过`git init`命令把这个目录变成可以管理的仓库：

```Sh
$ git init
Initialized empty Git repository in /Users/junxi/gitest/.git/
```



## 文件添加到版本库

编写一个`readme.md`文件，内容如下：

```Sh
Git is a version control system.
Git is free software.
```

文件必须放在`gitest`目录（或其子目录）下，因为这是一个Git仓库，在仓库对应的目录下才能找到这个文件。

把一个文件放到git仓库只需要两步。

第一步，使用命令`git add`把文件添加到仓库：

用法：`git add file_name1 file_name2 …`

```Sh
git add readme.md 
```

在执行第二步之前可以使用命令`git status`查看状态：

```sh
$ git status -s
A  readme.md
$ git status 
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   readme.md
```

第二步，用命令`git commit`告诉Git，把文件提交到仓库:

```Sh
git commit -m "new creating a readme file"
```



# 时光穿梭

我们之前成功地添加并提交了一个readme.md文件，现在尝试修改一下文件内容：

```Sh
Git is a distributed version control system.
Git is free software.
```

现在运行`git status`命令查看结果：

```Sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")
```

`git status`命令可以让我们时刻掌握仓库当前的状态，上面的命令告诉我们，readme.md被修改过了，但还没有准备提交的修改。

虽然Git告诉我们readme.md被修改了，但是我们想看看具体修改了什么内容。这时候需要用`git diff`命令查看：

```Sh
$ git diff readme.md 
diff --git a/readme.md b/readme.md
index 46d49bf..9247db6 100644
--- a/readme.md
+++ b/readme.md
@@ -1,2 +1,2 @@
-Git is a version control system.
+Git is a distributed version control system.
 Git is free software.
```

`git diff`就是查看差异之处，通过该命令我们可以清楚地看到修改了哪些内容，显示的格式是Unix通用的diff格式。

第二次提交readme.md文件:

```Sh
$ git add readme.md 

$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   readme.md

$ git commit -m "add distributed"
[master b99e891] add distributed
 1 file changed, 1 insertion(+), 1 deletion(-)
 
$ git status
On branch master
nothing to commit, working tree clean
```



## 版本回退

再次修改readme.md文件，内容如下：

```sh
Git is a distributed version control system.
Git is free software distributed under the GPL.
```

然后尝试提交：

```Sh
$ git add readme.md 
$ git commit -m "append GPL"
[master 49d0f9b] append GPL
 1 file changed, 1 insertion(+), 1 deletion(-) 
```

像这样，你不断对文件进行修改，然后不断提交修改到版本库里，就好比玩RPG游戏时，每通过一关就会自动把游戏状态存盘，如果某一关没过去，你还可以选择读取前一关的状态。有些时候，在打Boss之前，你会手动存盘，以便万一打Boss失败了，可以从最近的地方重新开始。Git也是一样，每当你觉得文件修改到一定程度的时候，就可以“保存一个快照”，这个快照在Git中被称为`commit`。一旦你把文件改乱了，或者误删了文件，还可以从最近的一个`commit`恢复，然后继续工作，而不是把几个月的工作成果全部丢失。

现在，我们回顾一下readme.md文件一共有几个版本被提交到Git仓库里了：

版本1：new creating a readme file

```sh
Git is a version control system.
Git is free software.
```

版本2：add distributed

```sh
Git is a distributed version control system.
Git is free software.
```

版本3：append GPL

```sh
Git is a distributed version control system.
Git is free software distributed under the GPL.
```

当然了，在实际工作中，我们脑子里怎么可能记得一个几千行的文件每次都改了什么内容，不然要版本控制系统干什么。版本控制系统肯定有某个命令可以告诉我们历史记录，在Git中，我们用`git log`命令查看：

```sh
$ git log
commit 49d0f9b9bcf30069a3b0ed91ecf5397738a940e6 (HEAD -> master)
Author: junxi <xinlei3166@126.com>
Date:   Fri Mar 16 15:12:38 2018 +0800

    append GPL

commit b99e891f22fcf8cfcdd3aef737a6b7681b100976
Author: junxi <xinlei3166@126.com>
Date:   Fri Mar 16 14:43:09 2018 +0800

    add distributed

commit f2bc5b8abee58de182cce051b3e0e6d1c7431a22
Author: junxi <xinlei3166@126.com>
Date:   Fri Mar 16 14:04:37 2018 +0800

    new creating a readme file
```

`git log`命令显示从最近到最远的提交日志，我们可以看到3次提交，最近的一次是`append GPL`，上一次是`add distributed`，最早的一次是`new creating a readme file`。

如果嫌输出信息太多，看得眼花缭乱的，可以试试加上`--pretty=oneline`参数：

```Sh
$ git log --pretty=oneline
49d0f9b9bcf30069a3b0ed91ecf5397738a940e6 (HEAD -> master) append GPL
b99e891f22fcf8cfcdd3aef737a6b7681b100976 add distributed
f2bc5b8abee58de182cce051b3e0e6d1c7431a22 new creating a readme file
```

现在我们启动时光穿梭机，准备把readme.md回退到上一个版本，也就是“add distributed”的那个版本，怎么做呢？

首先，Git必须知道当前版本是哪个版本，在Git中，用`HEAD`表示当前版本，也就是最新的提交`49d0f9b9bcf30069a3b0ed91ecf5397738a940e6`（注意我的提交ID和你的肯定不一样），上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个`^`比较容易数不过来，所以写成`HEAD~100`。

现在，我们要把当前版本“append GPL”回退到上一个版本“add distributed”，就可以使用`git reset`命令：

```Sh
$ git reset --hard HEAD^
HEAD is now at b99e891 add distributed
```

看看readme.md的内容是不是版本`add distributed`：

```sh
junxi-MacBook:gitest junxi$ cat readme.md 
Git is a distributed version control system.
Git is free software.
```

果然。

还可以继续回退到上一个版本`wrote a readme file`，不过且慢，然我们用`git log`再看看现在版本库的状态：

```Sh
$ git log
commit b99e891f22fcf8cfcdd3aef737a6b7681b100976 (HEAD -> master)
Author: junxi <xinlei3166@126.com>
Date:   Fri Mar 16 14:43:09 2018 +0800

    add distributed

commit f2bc5b8abee58de182cce051b3e0e6d1c7431a22
Author: junxi <xinlei3166@126.com>
Date:   Fri Mar 16 14:04:37 2018 +0800

    new creating a readme file
```

最新的那个版本`append GPL`已经看不到了！好比你从21世纪坐时光穿梭机来到了19世纪，想再回去已经回不去了，肿么办？

办法其实还是有的，只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊，找到那个`append GPL`的`commit id`是`49d0f9...`，于是就可以指定回到未来的某个版本：

```Sh
$ git reset --hard 49d0f9
HEAD is now at 49d0f9b append GPL
```

版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。

再小心翼翼地看看readme.md的内容：

```Sh
$ cat readme.md 
Git is a distributed version control system.
Git is free software distributed under the GPL.
```

果然，回到最新了。

Git的版本回退速度非常快，因为Git在内部有个指向当前版本的`HEAD`指针，当你回退版本的时候，Git仅仅是把HEAD从指向`append GPL`：

![mage-20180316161231](https://ws1.sinaimg.cn/large/006tKfTcly1fpeq6dv0qzj30o20fg0tp.jpg)

改为指向`add distributed`：

![mage-20180316161249](https://ws3.sinaimg.cn/large/006tKfTcly1fpeq6p3ge2j30o20g00tr.jpg)

然后顺便把工作区的文件更新了。所以你让`HEAD`指向哪个版本号，你就把当前版本定位在哪。



现在，你回退到了某个版本，关掉了电脑，第二天早上就后悔了，想恢复到新版本怎么办？找不到新版本的`commit id`怎么办？

在Git中，总是有后悔药可以吃的。当你用`$ git reset --hard HEAD^`回退到`add distributed`版本时，再想恢复到`append GPL`，就必须找到`append GPL`的commit id。Git提供了一个命令`git reflog`用来记录你的每一次命令：

```Sh
$ git reflog
49d0f9b (HEAD -> master) HEAD@{0}: reset: moving to 49d0f9
b99e891 HEAD@{1}: reset: moving to HEAD^
49d0f9b (HEAD -> master) HEAD@{2}: reset: moving to 49d0f9
b99e891 HEAD@{3}: reset: moving to HEAD^
49d0f9b (HEAD -> master) HEAD@{4}: reset: moving to 49d0f9
b99e891 HEAD@{5}: reset: moving to HEAD^
49d0f9b (HEAD -> master) HEAD@{6}: commit: append GPL
b99e891 HEAD@{7}: commit: add distributed
f2bc5b8 HEAD@{8}: commit (initial): new creating a readme file
```



小结：

- `HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
- 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。



## 工作区和暂存区

Git和其他版本控制系统如SVN的一个不同之处就是有暂存区的概念。



**工作区（Working Directory）**

就是你在电脑里能看到的目录，比如我的`gitest`文件夹就是一个工作区：

![mage-20180319100915](https://ws3.sinaimg.cn/large/006tKfTcly1fphwjejyhvj30hm09tmxc.jpg)



**版本库（Repository）**

工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。

Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。

![git-工作区-版本库](https://ws2.sinaimg.cn/large/006tKfTcly1fphwl93tvlj30cq06iaa8.jpg)

分支和`HEAD`的概念我们以后再讲。

前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：

第一步是用`git add`把文件添加进去，实际上就是把文件修改添加到暂存区；

第二步是用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支。

因为我们创建Git版本库时，Git自动为我们创建了唯一一个`master`分支，所以，现在，`git commit`就是往`master`分支上提交更改。

你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。

俗话说，实践出真知。现在，我们再练习一遍，先对`readme.md`做个修改，比如加上一行内容：

```Sh
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
```

然后，在工作区新增一个`LICENSE`文本文件（内容随便写）。

先用`git status`查看一下状态：

```Sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	LICENSE

no changes added to commit (use "git add" and/or "git commit -a")
```

Git非常清楚地告诉我们，`readme.md`被修改了，而`LICENSE`还从来没有被添加过，所以它的状态是`Untracked`。

现在，使用两次命令`git add`，把`readme.md`和`LICENSE`都添加后，用`git status`再查看一下：

```Sh
$ git add readme.md LICENSE 
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   LICENSE
	modified:   readme.md
```

现在，暂存区的状态就变成这样了：

![-](https://ws2.sinaimg.cn/large/006tKfTcly1fphx5yyicrj30cq06iglq.jpg)



所以，`git add`命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行`git commit`就可以一次性把暂存区的所有修改提交到分支。

```Sh
$ git commit -m "understand how stage works"
[master 81673ab] understand how stage works
 2 files changed, 2 insertions(+)
 create mode 100644 LICENSE
```

一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是“干净”的：

```Sh
$ git status
On branch master
nothing to commit, working tree clean
```

现在版本库变成了这样，暂存区就没有任何内容了：

![-](https://ws3.sinaimg.cn/large/006tKfTcly1fphx6holtfj30cv06ijri.jpg)



小结：

暂存区是Git非常重要的概念，弄明白了暂存区，就弄明白了Git的很多操作到底干了什么。

没弄明白暂存区是怎么回事的童鞋，请向上滚动页面，再看一次。



## 管理修改

现在，假定你已经完全掌握了暂存区的概念。下面，我们要讨论的就是，为什么Git比其他版本控制系统设计得优秀，因为Git跟踪并管理的是修改，而非文件。

你会问，什么是修改？比如你新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。

为什么说Git管理的是修改，而不是文件呢？我们还是做实验。第一步，对readme.md做一个修改，比如加一行内容：

```Sh
$ cat readme.md 
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes.
```

然后添加：

```sh
$ git add readme.md 
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   readme.md
```

然后，再修改readme.md：

```Sh
$ cat readme.md 
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
```

提交：

```Sh
$ git commit -m "git tracks changes"
[master fd42bc4] git tracks changes
 1 file changed, 1 insertion(+)
```

提交后，再看看状态：

```Sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")
```

咦，怎么第二次的修改没有被提交？

别激动，我们回顾一下操作过程：

第一次修改 -> `git add` -> 第二次修改 -> `git commit`

你看，我们前面讲了，Git管理的是修改，当你用`git add`命令后，在工作区的第一次修改被放入暂存区，准备提交，但是，在工作区的第二次修改并没有放入暂存区，所以，`git commit`只负责把暂存区的修改提交了，也就是第一次的修改被提交了，第二次的修改不会被提交。

提交后，用`git diff HEAD -- readme.md`命令可以查看工作区和版本库里面最新版本的区别：

```sh
$ git diff HEAD -- readme.md 
diff --git a/readme.md b/readme.md
index 76d770f..a9c5755 100644
--- a/readme.md
+++ b/readme.md
@@ -1,4 +1,4 @@
 Git is a distributed version control system.
 Git is free software distributed under the GPL.
 Git has a mutable index called stage.
-Git tracks changes.
+Git tracks changes of files.
```

可见，第二次修改确实没有被提交。

那怎么提交第二次修改呢？你可以继续`git add`再`git commit`，也可以别着急提交第一次修改，先`git add`第二次修改，再`git commit`，就相当于把两次修改合并后一块提交了：

第一次修改 -> `git add` -> 第二次修改 -> `git add` -> `git commit`

好，现在，把第二次修改提交了，然后开始小结。

小结：

现在，你又理解了Git是如何跟踪修改的，每次修改，如果不`add`到暂存区，那就不会加入到`commit`中。



## 撤销修改

自然，你是不会犯错的。不过现在是凌晨两点，你正在赶一份工作报告，你在`readme.md`中添加了一行：

```Sh
$ cat readme.md 
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.
```

在你准备提交前，一杯咖啡起了作用，你猛然发现了“stupid boss”可能会让你丢掉这个月的奖金！

既然错误发现得很及时，就可以很容易地纠正它。你可以删掉最后一行，手动把文件恢复到上一个版本的状态。如果用`git status`查看一下：

```Sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")
```

你可以发现，Git会告诉你，`git checkout -- file`可以丢弃工作区的修改：

```Sh
$ git checkout -- readme.md
```

命令`git checkout -- readme.md`意思就是，把`readme.md`文件在工作区的修改全部撤销，这里有两种情况：

一种是`readme.md`自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

一种是`readme.md`已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。

总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。

现在，看看`readme.md`的文件内容：

```Sh
$ cat readme.md 
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes.
```

文件内容果然复原了。

`git checkout -- file`命令中的`--`很重要，没有`--`，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到`git checkout`命令。

现在假定是凌晨3点，你不但写了一些胡话，还`git add`到暂存区了：

```Sh
$ cat readme.md 
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks changes of files.
My stupid boss still prefers SVN.
$ git add readme.md 
```

庆幸的是，在`commit`之前，你发现了这个问题。用`git status`查看一下，修改只是添加到了暂存区，还没有提交：

```Sh
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   readme.md
```

Git同样告诉我们，用命令`git reset HEAD file`可以把暂存区的修改撤销掉（unstage），重新放回工作区：

```sh
$ git reset HEAD readme.md 
Unstaged changes after reset:
M	readme.md
```

`git reset`命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用`HEAD`时，表示最新的版本。

再用`git status`查看一下，现在暂存区是干净的，工作区有修改：

```Sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")
```

还记得如何丢弃工作区的修改吗？

```Sh
$ git checkout -- readme.md
$ git status
On branch master
nothing to commit, working tree clean
$ cat readme.md 
Git is a distributed version control system.
Git is free software distributed under the GPL.
Git has a mutable index called stage.
Git tracks change
```

ok.

现在，假设你不但改错了东西，还从暂存区提交到了版本库，怎么办呢？还记得[版本回退](#版本回退)一节吗？可以回退到上一个版本。不过，这是有条件的，就是你还没有把自己的本地版本库推送到远程。还记得Git是分布式版本控制系统吗？我们后面会讲到远程版本库，一旦你把“stupid boss”提交推送到远程版本库，你就真的惨了……



**小结**

场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- file`。

场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD file`，就回到了场景1，第二步按场景1操作。

场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考[版本回退](#版本回退)一节，不过前提是没有推送到远程库。



## 删除文件

在Git中，删除也是一个修改操作，我们实战一下，先添加一个新文件test.txt到Git并且提交：

```Sh
$ cat test.txt 
new createing a test.txt file.

$ git add test.txt 
$ git commit -m "add test.txt"
[master 6aade49] add test.txt
 1 file changed, 2 insertions(+)
 create mode 100644 test.txt
```

一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用`rm`命令删了：

```Sh
$ rm test.txt 
```

这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，`git status`命令会立刻告诉你哪些文件被删除了：

```Sh
$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	deleted:    test.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令`git rm`删掉，并且`git commit`：

```Sh
$ git rm test.txt
rm 'test.txt'
$ git commit -m "remove test.txt"
[master 3f1febc] remove test.txt
 1 file changed, 2 deletions(-)
 delete mode 100644 test.txt
```

现在，文件就从版本库中被删除了。

另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：

```Sh
$ git checkout -- test.txt
```

`git checkout`其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。



**小结**

命令`git rm`用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失**最近一次提交后你修改的内容**。



# 远程仓库

到目前为止，我们已经掌握了如何在Git仓库里对一个文件进行时光穿梭，你再也不用担心文件备份或者丢失的问题了。

可是有用过集中式版本控制系统SVN的童鞋会站出来说，这些功能在SVN里早就有了，没看出Git有什么特别的地方。

没错，如果只是在一个仓库里管理文件历史，Git和SVN真没啥区别。为了保证你现在所学的Git物超所值，将来绝对不会后悔，本章开始介绍Git的杀手级功能之一（注意是之一，也就是后面还有之二，之三……）：远程仓库。

Git是分布式版本控制系统，同一个Git仓库，可以分布到不同的机器上。怎么分布呢？最早，肯定只有一台机器有一个原始版本库，此后，别的机器可以“克隆”这个原始版本库，而且每台机器的版本库其实都是一样的，并没有主次之分。

你肯定会想，至少需要两台机器才能玩远程库不是？但是我只有一台电脑，怎么玩？

其实一台电脑上也是可以克隆多个版本库的，只要不在同一个目录下。不过，现实生活中是不会有人这么傻的在一台电脑上搞几个远程库玩，因为一台电脑上搞几个远程库完全没有意义，而且硬盘挂了会导致所有库都挂掉，所以我也不告诉你在一台电脑上怎么克隆多个仓库。

实际情况往往是这样，找一台电脑充当服务器的角色，每天24小时开机，其他每个人都从这个“服务器”仓库克隆一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交。

完全可以自己搭建一台运行Git的服务器，不过现阶段，为了学Git先搭个服务器绝对是小题大作。好在这个世界上有个叫[GitHub](https://github.com/)的神奇的网站，从名字就可以看出，这个网站就是提供Git仓库托管服务的，所以，只要注册一个GitHub账号，就可以免费获得Git远程仓库。

在继续阅读后续内容前，请自行注册GitHub账号。由于你的本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以，需要一点设置：

第1步：创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有`id_rsa`和`id_rsa.pub`这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：

```Sh
$ ssh-keygen -t rsa -C "xxx@126.com"
$ ll ~/.ssh/
total 56
-rw-------  1 junxi  staff  1679 12 11 09:51 id_rsa
-rw-r--r--  1 junxi  staff   396 12 11 09:51 id_rsa.pub
```

如果一切顺利的话，可以在用户主目录里找到`.ssh`目录，里面有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，不能泄露出去，`id_rsa.pub`是公钥，可以放心地告诉任何人。

第2步：登陆GitHub，打开“Account settings”，“SSH Keys”页面：

然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容：

![mage-20180319113227](https://ws1.sinaimg.cn/large/006tKfTcly1fphyxwbly7j30xy0gu777.jpg)

点“Add Key”，你就应该看到已经添加的Key：

![mage-20180319113324](https://ws3.sinaimg.cn/large/006tKfTcly1fphyyvukhuj30nf07bdgw.jpg)



为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。

当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。

最后友情提示，在GitHub上免费托管的Git仓库，任何人都可以看到喔（但只有你自己才能改）。所以，不要把敏感信息放进去。

如果你不想让别人看到Git库，有两个办法，一个是交点保护费，让GitHub把公开的仓库变成私有的，这样别人就看不见了（不可读更不可写）。另一个办法是自己动手，搭一个Git服务器，因为是你自己的Git服务器，所以别人也是看不见的。这个方法我们后面会讲到的，相当简单，公司内部开发必备。

确保你拥有一个GitHub账号后，我们就即将开始远程仓库的学习。



**小结**

“有了远程仓库，妈妈再也不用担心我的硬盘了。”——Git点读机



## 添加远程库

现在的情景是，你已经在本地创建了一个Git仓库后，又想在GitHub创建一个Git仓库，并且让这两个仓库进行远程同步，这样，GitHub上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。

首先，登陆GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库：

![mage-20180319113715](https://ws2.sinaimg.cn/large/006tKfTcly1fphz2w2zkij30sc0hw76l.jpg)



在Repository name填入`gitest`，其他保持默认设置，点击“Create repository”按钮，就成功地创建了一个新的Git仓库：

![mage-20180319113746](https://ws4.sinaimg.cn/large/006tKfTcly1fphz3f7uyoj30u40hjn05.jpg)



目前，在GitHub上的这个`gitest`仓库还是空的，GitHub告诉我们，可以从这个仓库克隆出新的仓库，也可以把一个已有的本地仓库与之关联，然后，把本地仓库的内容推送到GitHub仓库。

现在，我们根据GitHub的提示，在本地的`gitest`仓库下运行命令：

```Sh
$ pwd
/Users/junxi/gitest
$ git remote add origin git@github.com:junxi3166/gitest.git
```

请千万注意，把上面的`junxi3166`替换成你自己的GitHub账户名，否则，你在本地关联的就是我的远程库，关联没有问题，但是你以后推送是推不上去的，因为你的SSH Key公钥不在我的账户列表中。

添加后，远程库的名字就是`origin`，这是Git默认的叫法，也可以改成别的，但是`origin`这个名字一看就知道是远程库。

下一步，就可以把本地库的所有内容推送到远程库上：

```Sh
$ git push -u origin master
Counting objects: 20, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (15/15), done.
Writing objects: 100% (20/20), 1.63 KiB | 837.00 KiB/s, done.
Total 20 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), done.

To github.com:junxi3166/gitest.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```



把本地库的内容推送到远程，用`git push`命令，实际上是把当前分支`master`推送到远程。

由于远程库是空的，我们第一次推送`master`分支时，加上了`-u`参数，Git不但会把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来，在以后的推送或者拉取时就可以简化命令。

推送成功后，可以立刻在GitHub页面中看到远程库的内容已经和本地一模一样：

![mage-20180319142156](https://ws4.sinaimg.cn/large/006tKfTcly1fpi3u8xfpxj30sw0dnq52.jpg)



从现在起，只要本地作了提交，就可以通过命令：

```Sh
$ git push origin master
```

把本地`master`分支的最新修改推送至GitHub，现在，你就拥有了真正的分布式版本库！



**SSH警告**

当你第一次使用Git的`clone`或者`push`命令连接GitHub时，会得到一个警告：

```Sh
The authenticity of host 'github.com (13.250.177.223)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)?
```

这是因为Git使用SSH连接，而SSH连接在第一次验证GitHub服务器的Key时，需要你确认GitHub的Key的指纹信息是否真的来自GitHub的服务器，输入`yes`回车即可。

Git会输出一个警告，告诉你已经把GitHub的Key添加到本机的一个信任列表里了：

```sh
Warning: Permanently added 'github.com,13.250.177.223' (RSA) to the list of known hosts.
```

这个警告只会出现一次，后面的操作就不会有任何警告了。

如果你实在担心有人冒充GitHub服务器，输入`yes`前可以对照[GitHub的RSA Key的指纹信息](https://help.github.com/articles/what-are-github-s-ssh-key-fingerprints/)是否与SSH连接给出的一致。



**小结**

要关联一个远程库，使用命令`git remote add origin git@server-name:path/repo-name.git`；

关联后，使用命令`git push -u origin master`第一次推送master分支的所有内容；

此后，每次本地提交后，只要有必要，就可以使用命令`git push origin master`推送最新修改；

分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！



## 从远程库克隆

上次我们讲了先有本地库，后有远程库的时候，如何关联远程库。

现在，假设我们从零开发，那么最好的方式是先创建远程库，然后，从远程库克隆。

首先，登陆GitHub，创建一个新的仓库，名字叫`gitskills`：

![mage-20180319142804](https://ws4.sinaimg.cn/large/006tKfTcly1fpi40mv13rj30q60ifq5b.jpg)

我们勾选`Initialize this repository with a README`，这样GitHub会自动为我们创建一个`README.md`文件。创建完毕后，可以看到`README.md`文件：

![mage-20180319142831](https://ws1.sinaimg.cn/large/006tKfTcly1fpi4136fevj30v00dwgn2.jpg)

现在，远程库已经准备好了，下一步是用命令`git clone`克隆一个本地库：

```Sh
$ git clone git@github.com:junxi3166/gitskills.git
Cloning into 'gitskills'...
Warning: Permanently added the RSA host key for IP address '13.229.188.59' to the list of known hosts.
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
$ cd gitskills/
$ ls
README.md
```

注意把Git库的地址换成你自己的，然后进入`gitskills`目录看看，已经有`README.md`文件了。

如果有多个人协作开发，那么每个人各自从远程克隆一份就可以了。

你也许还注意到，GitHub给出的地址不止一个，还可以用`https://github.com/junxi3166/gitskills.git`这样的地址。实际上，Git支持多种协议，默认的`git://`使用ssh，但也可以使用`https`等其他协议。

使用`https`除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放http端口的公司内部就无法使用`ssh`协议而只能用`https`。



**小结**

要克隆一个仓库，首先必须知道仓库的地址，然后使用`git clone`命令克隆。

Git支持多种协议，包括`https`，但通过`ssh`支持的原生`git`协议速度最快。



# 分支管理

分支就是科幻电影里面的平行宇宙，当你正在电脑前努力学习Git的时候，另一个你正在另一个平行宇宙里努力学习SVN。

如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，你既学会了Git又学会了SVN！

![0](https://ws2.sinaimg.cn/large/006tKfTcly1fpi47q042oj30e504ut8r.jpg)

分支在实际中有什么用呢？假设你准备开发一个新功能，但是需要两周才能完成，第一周你写了50%的代码，如果立刻提交，由于代码还没写完，不完整的代码库会导致别人不能干活了。如果等代码全部写完再一次提交，又存在丢失每天进度的巨大风险。

现在有了分支，就不用怕了。你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。

其他版本控制系统如SVN等都有分支管理，但是用过之后你会发现，这些版本控制系统创建和切换分支比蜗牛还慢，简直让人无法忍受，结果分支功能成了摆设，大家都不去用。

但Git的分支是与众不同的，无论创建、切换和删除分支，Git在1秒钟之内就能完成！无论你的版本库是1个文件还是1万个文件。



## 创建与合并分支

在[版本回退](#版本回退)里，你已经知道，每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即`master`分支。`HEAD`严格来说不是指向提交，而是指向`master`，`master`才是指向提交的，所以，`HEAD`指向的就是当前分支。

一开始的时候，`master`分支是一条线，Git用`master`指向最新的提交，再用`HEAD`指向`master`，就能确定当前分支，以及当前分支的提交点：

![-](https://ws3.sinaimg.cn/large/006tKfTcly1fpi4cfz02kj308d0473yd.jpg)

每次提交，`master`分支都会向前移动一步，这样，随着你不断提交，`master`分支的线也越来越长：

![it-](https://ws1.sinaimg.cn/large/006tKfTcly1fpi4obhsssg306o05010w.gif)

当我们创建新的分支，例如`dev`时，Git新建了一个指针叫`dev`，指向`master`相同的提交，再把`HEAD`指向`dev`，就表示当前分支在`dev`上：

![-](https://ws1.sinaimg.cn/large/006tKfTcly1fpi4g6af7fj30a706hwee.jpg)

你看，Git创建一个分支很快，因为除了增加一个`dev`指针，改改`HEAD`的指向，工作区的文件都没有任何变化！

不过，从现在开始，对工作区的修改和提交就是针对`dev`分支了，比如新提交一次后，`dev`指针往前移动一步，而`master`指针不变：

![-](https://ws3.sinaimg.cn/large/006tKfTcly1fpi4g9jyjuj30dq06ha9z.jpg)

假如我们在`dev`上的工作完成了，就可以把`dev`合并到`master`上。Git怎么合并呢？最简单的方法，就是直接把`master`指向`dev`的当前提交，就完成了合并：

![-](https://ws3.sinaimg.cn/large/006tKfTcly1fpi4gcdqzmj30br0663yf.jpg)

所以Git合并分支也很快！就改改指针，工作区内容也不变！

合并完分支后，甚至可以删除`dev`分支。删除`dev`分支就是把`dev`指针给删掉，删掉后，我们就剩下了一条`master`分支：

![-](https://ws2.sinaimg.cn/large/006tKfTcly1fpi4gfm8cdj30br04fdfp.jpg)

真是太神奇了，你看得出来有些提交是通过分支完成的吗？

![it-](https://ws2.sinaimg.cn/large/006tKfTcly1fpi4onbx7sg306o050wnx.gif)

下面开始实战。

首先，我们创建`dev`分支，然后切换到`dev`分支：

```Sh
$ pwd
/Users/junxi/gitskills
$ git checkout -b dev
Switched to a new branch 'dev'
```

`git checkout`命令加上`-b`参数表示创建并切换，相当于以下两条命令：

```Sh
$ git branch dev
$ git checkout dev
Switched to branch 'dev'
```

然后，用`git branch`命令查看当前分支：

```Sh
$ git branch
* dev
  master
```

`git branch`命令会列出所有分支，当前分支前面会标一个`*`号。

然后，我们就可以在`dev`分支上正常提交，比如对`README.md`做个修改，加上一行：

```Sh
Creating a new branch is quick.
```

然后提交：

```Sh
$ git add README.md 
$ git commit -m "branch test"
[dev be2e7c9] branch test
 1 file changed, 1 insertion(+)
```

现在，`dev`分支的工作完成，我们就可以切换回`master`分支：

```sh
$ git checkout master
Switched to branch 'master'
```

切换回`master`分支后，再查看一下README.md文件，刚才添加的内容不见了！因为那个提交是在`dev`分支上，而`master`分支此刻的提交点并没有变：

```sh
$ cat README.md 
# gitskills
gitskills
```



![-](https://ws1.sinaimg.cn/large/006tKfTcly1fpi50swtzkj30bn0663yf.jpg)

现在，我们把`dev`分支的工作成果合并到`master`分支上：

```sh
$ git merge dev
Updating 09f920d..be2e7c9
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
```

`git merge`命令用于合并指定分支到当前分支。合并后，再查看`README.md `的内容，就可以看到，和`dev`分支的最新提交是完全一样的。

```Sh
$ cat README.md 
# gitskills
gitskills
Creating a new branch is quick.
```

注意到上面的`Fast-forward`信息，Git告诉我们，这次合并是“快进模式”，也就是直接把`master`指向`dev`的当前提交，所以合并速度非常快。

当然，也不是每次合并都能`Fast-forward`，我们后面会讲其他方式的合并。

合并完成后，就可以放心地删除`dev`分支了：

```Sh
$ git branch -d dev
Deleted branch dev (was be2e7c9).
```

删除后，查看`branch`，就只剩下`master`分支了：

```sh
$ git branch
* master
```

因为创建、合并和删除分支非常快，所以Git鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在`master`分支上工作效果是一样的，但过程更安全。



**小结**

Git鼓励大量使用分支：

查看分支：`git branch`

创建分支：`git branch <name>`

切换分支：`git checkout <name>`

创建+切换分支：`git checkout -b <name>`

合并某分支到当前分支：`git merge <name>`

删除分支：`git branch -d <name>`

删除远程分支 ：`$ git push origin --delete <BranchName>`



## 解决冲突

人生不如意之事十之八九，合并分支往往也不是一帆风顺的。

准备新的`feature1`分支，继续我们的新分支开发：

```Sh
$ git checkout -b feature1
Switched to a new branch 'feature1'
```

修改`README.md`最后一行，改为：

```Sh
Creating a new branch is quick AND simple.
```

在`feature1`分支上提交：

```Sh
$ git add README.md 
$ git commit -m "AND simple"
[feature1 3a8b438] AND simple
 1 file changed, 1 insertion(+), 1 deletion(-)
```

切换到`master`分支：

```Sh
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
```

Git还会自动提示我们当前`master`分支比远程的`master`分支要超前1个提交。

在`master`分支上把`README.md`文件的最后一行改为：

```Sh
Creating a new branch is quick & simple.
```

提交：

```Sh
$ git add README.md 
$ git commit -m "& simple"
[master 23307ae] & simple
 1 file changed, 1 insertion(+), 1 deletion(-)
```

现在，`master`分支和`feature1`分支各自都分别有新的提交，变成了这样：

![-](https://ws2.sinaimg.cn/large/006tKfTcly1fpi5igh8s9j30bt07k3yc.jpg)

这种情况下，Git无法执行“快速合并”，只能试图把各自的修改合并起来，但这种合并就可能会有冲突，我们试试看：

```Sh
$ git merge feature1
Auto-merging README.md
CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

果然冲突了！Git告诉我们，`README.md`文件存在冲突，必须手动解决冲突后再提交。`git status`也可以告诉我们冲突的文件：

```sh
$ git status
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

	both modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```

我们可以直接查看README.md的内容：

```Sh
$ cat README.md 
# gitskills
gitskills
<<<<<<< HEAD
Creating a new branch is quick & simple.
=======
Creating a new branch is quick AND simple.
>>>>>>> feature1
```

Git用`<<<<<<<`，`=======`，`>>>>>>>`标记出不同分支的内容，我们修改如下后保存：

```Sh
Creating a new branch is quick and simple.
```

再提交：

```Sh
$ git add README.md 
$ git commit -m "conflict fixed"
[master 5f3dff6] conflict fixed
```

现在，`master`分支和`feature1`分支变成了下图所示：

![-](https://ws2.sinaimg.cn/large/006tKfTcly1fpi5y87wt0j30fb07kmx0.jpg)

用带参数的`git log`也可以看到分支的合并情况：

```sh
$ git log --graph --pretty=oneline --abbrev-commit
*   5f3dff6 (HEAD -> master) conflict fixed
|\  
| * 3a8b438 (feature1) AND simple
* | 23307ae & simple
|/  
* be2e7c9 branch test
* 09f920d (origin/master, origin/HEAD) Initial commit
```

最后，删除`feature1`分支：

```Sh
$ git branch -d feature1
Deleted branch feature1 (was 3a8b438).
```

完成。



**小结**

当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。

用`git log --graph`命令可以看到分支合并图。





## 分支管理策略

通常，合并分支时，如果可能，Git会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息。

如果要强制禁用`Fast forward`模式，Git就会在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息。

下面我们实战一下`--no-ff`方式的`git merge`：

首先，仍然创建并切换`dev`分支：

```Sh
$ git checkout -b dev
```

修改README.md文件，并提交一个新的commit：

```Sh
$ # vi README.md 
$ git add README.md
$ git commit -m "fenzhi."
```

现在，我们切换回`master`：

```Sh
$ git checkout master
```

准备合并`dev`分支，请注意`--no-ff`参数，表示禁用`Fast forward`：

```Sh
$ git merge --no-ff -m "merge with no-ff" dev
Merge made by the 'recursive' strategy.
 README.md | 1 +
 1 file changed, 1 insertion(+)
```

因为本次合并要创建一个新的commit，所以加上`-m`参数，把commit描述写进去。

合并后，我们用`git log`看看分支历史：

```Sh
$ git log --graph --pretty=oneline --abbrev-commit
*   535190d (HEAD -> master) merge with no-ff
|\  
| * c5e8566 (dev) fenzhi.
|/  
*   5f3dff6 conflict fixed
|\  
| * 3a8b438 AND simple
* | 23307ae & simple
|/  
* be2e7c9 branch test
* 09f920d (origin/master, origin/HEAD) Initial commit
```

可以看到，不使用`Fast forward`模式，merge后就像这样：

![-1](https://ws1.sinaimg.cn/large/006tKfTcly1fpi6cbb4ssj30dc075web.jpg)

**分支策略**

在实际开发中，我们应该按照几个基本原则进行分支管理：

首先，`master`分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活；

那在哪干活呢？干活都在`dev`分支上，也就是说，`dev`分支是不稳定的，到某个时候，比如1.0版本发布时，再把`dev`分支合并到`master`上，在`master`分支发布1.0版本；

你和你的小伙伴们每个人都在`dev`分支上干活，每个人都有自己的分支，时不时地往`dev`分支上合并就可以了。

所以，团队合作的分支看起来就像这样：

![-1](https://ws2.sinaimg.cn/large/006tKfTcly1fpi6d7lqf1j30du03ha9w.jpg)



**小结**

Git分支十分强大，在团队开发中应该充分应用。

合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。





## Bug分支

软件开发中，bug就像家常便饭一样。有了bug就需要修复，在Git中，由于分支是如此的强大，所以，每个bug都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。

当你接到一个修复一个代号101的bug的任务时，很自然地，你想创建一个分支`issue-101`来修复它，但是，等等，当前正在`dev`上进行的工作还没有提交：

```sh
$ git status
# On branch dev
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   hello.py
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   README.md
```

并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需1天时间。但是，必须在两个小时内修复该bug，怎么办？

幸好，Git还提供了一个`stash`功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：

```Sh
$ git stash
Saved working directory and index state WIP on dev: 6224937 add merge
HEAD is now at 6224937 add merge
```

现在，用`git status`查看工作区，就是干净的（除非有没有被Git管理的文件），因此可以放心地创建分支来修复bug。

首先确定要在哪个分支上修复bug，假定需要在`master`分支上修复，就从`master`创建临时分支：

```sh
$ git checkout master
Already on 'master'
Your branch is ahead of 'origin/master' by 6 commits.
  (use "git push" to publish your local commits)
$ git checkout -b issue-101
Switched to a new branch 'issue-101'
```

现在修复bug，需要把“gitskills”改为“GITSKILLS”，然后提交：

```Sh
$ git add README.md 
$ git commit -m "fix bug 101"
[issue-101 966ad32] fix bug 101
 1 file changed, 1 insertion(+), 1 deletion(-)
```

修复完成后，切换到`master`分支，并完成合并，最后删除`issue-101`分支：

```Sh
$ git checkout master
Switched to branch 'master'
Your branch is ahead of 'origin/master' by 6 commits.
  (use "git push" to publish your local commits)
$ git merge --no-ff -m "merge bug fix 101" issue-101
Merge made by the 'recursive' strategy.
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
$ git branch -d issue-101
Deleted branch issue-101 (was 966ad32)
```

太棒了，原计划两个小时的bug修复只花了5分钟！现在，是时候接着回到`dev`分支干活了！

```Sh
$ git checkout dev
Switched to branch 'dev'
$ git status
# On branch dev
nothing to commit (working directory clean)
```

工作区是干净的，刚才的工作现场存到哪去了？用`git stash list`命令看看：

```Sh
$ git stash list
stash@{0}: WIP on dev: 6224937 add merge
```

工作现场还在，Git把stash内容存在某个地方了，但是需要恢复一下，有两个办法：

一是用`git stash apply`恢复，但是恢复后，stash内容并不删除，你需要用`git stash drop`来删除；

另一种方式是用`git stash pop`，恢复的同时把stash内容也删了：

```Sh
$ git stash pop
# On branch dev
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#       new file:   hello.py
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#       modified:   README.md
#
Dropped refs/stash@{0} (f624f8e5f082f2df2bed8a4e09c12fd2943bdd40)
```

再用`git stash list`查看，就看不到任何stash内容了：

```Sh
$ git stash list
```

你可以多次stash，恢复的时候，先用`git stash list`查看，然后恢复指定的stash，用命令：

```Sh
$ git stash apply stash@{0}
```



**小结**

修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；

当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复bug，修复后，再`git stash pop`，回到工作现场。





## Feature分支

软件开发中，总有无穷无尽的新的功能要不断添加进来。

添加一个新功能时，你肯定不希望因为一些实验性质的代码，把主分支搞乱了，所以，每添加一个新功能，最好新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支。

现在，你终于接到了一个新任务：开发代号为Vulcan的新功能，该功能计划用于下一代星际飞船。

于是准备开发：

```Sh
$ git checkout -b feature-vulcan
```

5分钟后，开发完毕：

```Sh
$ git add vulcan.py 
$ git status
On branch feature-vulcan
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   vulcan.py
	
$ git commit -m "add feature vulcan"
[feature-vulcan 0c7a1a3] add feature vulcan
 1 file changed, 1 insertion(+)
 create mode 100644 vulcan.py
```

切回`dev`，准备合并：

```Sh
$ git checkout dev
```

一切顺利的话，feature分支和bug分支是类似的，合并，然后删除。

但是，

就在此时，接到上级命令，因经费不足，新功能必须取消！

虽然白干了，但是这个分支还是必须就地销毁：

```Sh
$ git branch -d feature-vulcan
error: The branch 'feature-vulcan' is not fully merged.
If you are sure you want to delete it, run 'git branch -D feature-vulcan'.
```

销毁失败。Git友情提醒，`feature-vulcan`分支还没有被合并，如果删除，将丢失掉修改，如果要强行删除，需要使用命令`git branch -D feature-vulcan`。

现在我们强行删除：

```Sh
$ git branch -D feature-vulcan
Deleted branch feature-vulcan (was 0c7a1a3).
```

终于删除成功！



**小结**

开发一个新feature，最好新建一个分支；

如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。





## 多人协作

当你从远程仓库克隆时，实际上Git自动把本地的`master`分支和远程的`master`分支对应起来了，并且，远程仓库的默认名称是`origin`。

要查看远程库的信息，用`git remote`：

```Shell
$ git remote
origin
```

或者，用`git remote -v`显示更详细的信息：

```Sh
$ git remote -v
origin	git@github.com:junxi3166/gitskills.git (fetch)
origin	git@github.com:junxi3166/gitskills.git (push)
```

上面显示了可以抓取和推送的`origin`的地址。如果没有推送权限，就看不到push的地址。



**推送分支**

推送分支，就是把该分支上的所有本地提交推送到远程库。推送时，要指定本地分支，这样，Git就会把该分支推送到远程库对应的远程分支上：

```Sh
$ git push origin master
```

如果要推送其他分支，比如`dev`，就改成：

```Sh
$ git push origin dev
```

但是，并不是一定要把本地分支往远程推送，那么，哪些分支需要推送，哪些不需要呢？

- `master`分支是主分支，因此要时刻与远程同步；
- `dev`分支是开发分支，团队所有成员都需要在上面工作，所以也需要与远程同步；
- bug分支只用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
- feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发。

总之，就是在Git中，分支完全可以在本地自己藏着玩，是否推送，视你的心情而定！



**抓取分支**

多人协作时，大家都会往`master`和`dev`分支上推送各自的修改。

现在，模拟一个你的小伙伴，可以在另一台电脑（注意要把SSH Key添加到GitHub）或者同一台电脑的另一个目录下克隆：

```Sh
$ git clone git@github.com:junxi3166/gitskills.git skills
Cloning into 'skills'...
remote: Counting objects: 3, done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.
$ cd skills/
$ git remote -v
origin	git@github.com:junxi3166/gitskills.git (fetch)
origin	git@github.com:junxi3166/gitskills.git (push)
```

当你的小伙伴从远程库clone时，默认情况下，你的小伙伴只能看到本地的`master`分支。不信可以用`git branch`命令看看：

```Sh
$ git branch
* master
```

现在，你的小伙伴要在`dev`分支上开发，就必须创建远程`origin`的`dev`分支到本地，于是他用这个命令创建本地`dev`分支：

```Sh
$ git checkout -b dev
```

现在，他就可以在`dev`上继续修改，然后，时不时地把`dev`分支`push`到远程：

```Sh
$ # vi hello.py
$ git add hello.py 
$ git commit -m "add two hello"
[dev 5bd8a63] add two hello
 1 file changed, 1 insertion(+)
 create mode 100644 hello.py
$ git push origin dev
Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 280 bytes | 280.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:junxi3166/gitskills.git
 * [new branch]      dev -> dev
```

你的小伙伴已经向`origin/dev`分支推送了他的提交，而碰巧你也对同样的文件作了修改，并试图推送：

```sh
$ # vi hello.py
$ git add hello.py 
$ git commit -m "add coding: _*_ utf-8 _*_"
[dev 003e6ed] add coding: _*_ utf-8 _*_
 1 file changed, 1 insertion(+)
 create mode 100644 hello.py
$ git push origin dev
To github.com:junxi3166/gitskills.git
 ! [rejected]        dev -> dev (fetch first)
error: failed to push some refs to 'git@github.com:junxi3166/gitskills.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

推送失败，因为你的小伙伴的最新提交和你试图推送的提交有冲突，解决办法也很简单，Git已经提示我们，先用`git pull`把最新的提交从`origin/dev`抓下来，然后，在本地合并，解决冲突，再推送：

```Sh
$ git pull
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), done.
From github.com:junxi3166/gitskills
 * [new branch]      ddd        -> origin/ddd
 * [new branch]      dev        -> origin/dev
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> dev
```

`git pull`也失败了，原因是没有指定本地`dev`分支与远程`origin/dev`分支的链接，根据提示，设置`dev`和`origin/dev`的链接：

```Sh
$ git branch --set-upstream-to=origin/dev dev
Branch 'dev' set up to track remote branch 'dev' from 'origin'.
```

再pull：

```Sh
$ git pull
Auto-merging hello.py
CONFLICT (add/add): Merge conflict in hello.py
Automatic merge failed; fix conflicts and then commit the result.
```

这回`git pull`成功，但是合并有冲突，需要手动解决，解决的方法和分支管理中的[解决冲突](#解决冲突)完全一样。解决后，提交，再push：

```Sh
$ # vi hello.py 
$ git add hello.py 
$ git commit -m "merge & fix hello.py"
[dev ac35808] merge & fix hello.py
$ git push origin dev
Counting objects: 21, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (14/14), done.
Writing objects: 100% (21/21), 1.75 KiB | 1.75 MiB/s, done.
Total 21 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), done.
To github.com:junxi3166/gitskills.git
   5bd8a63..ac35808  dev -> dev
```



因此，多人协作的工作模式通常是这样：

1. 首先，可以试图用`git push origin branch-name`推送自己的修改；
2. 如果推送失败，则因为远程分支比你的本地更新，需要先用`git pull`试图合并；
3. 如果合并有冲突，则解决冲突，并在本地提交；
4. 没有冲突或者解决掉冲突后，再用`git push origin branch-name`推送就能成功！

如果`git pull`提示“no tracking information”，则说明本地分支和远程分支的链接关系没有创建，用命令`git branch --set-upstream branch-name origin/branch-name`。

这就是多人协作的工作模式，一旦熟悉了，就非常简单。



**小结**

- 查看远程库信息，使用`git remote -v`；
- 本地新建的分支如果不推送到远程，对其他人就是不可见的；
- 从本地推送分支，使用`git push origin branch-name`，如果推送失败，先用`git pull`抓取远程的新提交；
- 在本地创建和远程分支对应的分支，使用`git checkout -b branch-name origin/branch-name`，本地和远程分支的名称最好一致；
- 建立本地分支和远程分支的关联，使用`git branch --set-upstream branch-name origin/branch-name`；
- 从远程抓取分支，使用`git pull`，如果有冲突，要先处理冲突。





# 标签管理

发布一个版本时，我们通常先在版本库中打一个标签（tag），这样，就唯一确定了打标签时刻的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。

Git的标签虽然是版本库的快照，但其实它就是指向某个commit的指针（跟分支很像对不对？但是分支可以移动，标签不能移动），所以，创建和删除标签都是瞬间完成的。

Git有commit，为什么还要引入tag？

“请把上周一的那个版本打包发布，commit号是6a5819e...”

“一串乱七八糟的数字不好找！”

如果换一个办法：

“请把上周一的那个版本打包发布，版本号是v1.2”

“好的，按照tag v1.2查找commit就行！”

所以，tag就是一个让人容易记住的有意义的名字，它跟某个commit绑在一起。



## 创建标签

在Git中打标签非常简单，首先，切换到需要打标签的分支上：

```Sh
$ git branch
* dev
  master
$ git checkout master
Switched to branch 'master'
```

然后，敲命令`git tag <name>`就可以打一个新标签：

```Sh
$ git tag v1.0
```

可以用命令`git tag`查看所有标签：

```Sh
$ git tag
v1.0
```

默认标签是打在最新提交的commit上的。有时候，如果忘了打标签，比如，现在已经是周五了，但应该在周一打的标签没有打，怎么办？

方法是找到历史提交的commit id，然后打上就可以了：

```Sh
$ git log --pretty=oneline --abbrev-commit
4fef11f (HEAD -> master, tag: v1.0) merge bug fix 101
966ad32 fix bug 101
535190d merge with no-ff
c5e8566 fenzhi.
5f3dff6 conflict fixed
23307ae & simple
3a8b438 AND simple
be2e7c9 branch test
09f920d (origin/master, origin/ddd, origin/HEAD) Initial commit
```

比方说要对`fenzhi.`这次提交打标签，它对应的commit id是`c5e8566`，敲入命令：

```Sh
$ git tag v0.9 c5e8566
```

再用命令`git tag`查看标签：

```Sh
$ git tag
v0.9
v1.0
```

注意，标签不是按时间顺序列出，而是按字母排序的。可以用`git show <tagname>`查看标签信息：

```Sh
$ git show v0.9
commit c5e8566a61a1c889dc3a56f685eaf97dc9b1c2fe (tag: v0.9)
Author: junxi <xinlei3166@126.com>
Date:   Mon Mar 19 15:42:34 2018 +0800

    fenzhi.

diff --git a/README.md b/README.md
index 6e05639..b565a7f 100644
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
 # gitskills
 gitskills
 Creating a new branch is quick and simple.
+fenzhi.
```

可以看到，`v0.9`确实打在`fenzhi.`这次提交上。

还可以创建带有说明的标签，用`-a`指定标签名，`-m`指定说明文字：

```
$ git tag -a v0.1 -m "version 0.1" 09f920d
```

用命令`git show <tagname>`可以看到说明文字：

```sh
$ git show v0.1
tag v0.1
Tagger: junxi <xinlei3166@126.com>
Date:   Tue Mar 20 10:19:47 2018 +0800

version 0.1

commit 09f920d5df09b29d762ab839b516dde1339c36e0 (tag: v0.1, origin/master, origin/ddd, origin/HEAD)
Author: junxi <xinlei3166@126.com>
Date:   Mon Mar 19 14:28:02 2018 +0800

    Initial commit

diff --git a/README.md b/README.md
new file mode 100644
index 0000000..7f15fca
--- /dev/null
+++ b/README.md
@@ -0,0 +1,2 @@
+# gitskills
+gitskills
```

还可以通过`-s`用私钥签名一个标签：

```Sh
$ git tag -s v0.2 -m "version 0.2" be2e7c9
```

签名采用PGP签名，因此，必须首先安装gpg（GnuPG），如果没有找到gpg，或者没有gpg密钥对，就会报错：

```Sh
fatal: cannot run gpg: No such file or directory
error: gpg failed to sign the data
error: unable to sign the tag
```

如果报错，请参考GnuPG[帮助文档](http://blog.csdn.net/chenjh213/article/details/47978199)配置Key。

```Sh
$ brew install gnupg
$ gpg --gen-key
$ gpg --list-keys
$ gpg --list-secret-keys
$ git config --global user.signingkey <GPG-key-id>
```

用命令`git show <tagname>`可以看到PGP签名信息：

```sh
$ git show v0.2
```



**小结**

- 命令`git tag <name>`用于新建一个标签，默认为`HEAD`，也可以指定一个commit id；
- `git tag -a <tagname> -m "blablabla..."`可以指定标签信息；
- `git tag -s <tagname> -m "blablabla..."`可以用PGP签名标签；
- 命令`git tag`可以查看所有标签。



## 操作标签

如果标签打错了，也可以删除：

```Sh
$ git tag -d v0.1
```

因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。

如果要推送某个标签到远程，使用命令`git push origin <tagname>`：

```Sh
$ git push origin v1.0
```

或者，一次性推送全部尚未推送到远程的本地标签：

```Sh
$ git push origin --tags
```

如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：

```Sh
$ git tag -d v0.9
```

然后，从远程删除。删除命令也是push，但是格式如下：

```Sh
$ git push origin :refs/tags/v0.9
```

要看看是否真的从远程库删除了标签，可以登陆GitHub查看。



**小结**

- 命令`git push origin <tagname>`可以推送一个本地标签；
- 命令`git push origin --tags`可以推送全部未推送过的本地标签；
- 命令`git tag -d <tagname>`可以删除一个本地标签；
- 命令`git push origin :refs/tags/<tagname>`可以删除一个远程标签。



# 自定义Git

在[安装Git](#安装Git)一节中，我们已经配置了`user.name`和`user.email`，实际上，Git还有很多可配置项。

比如，让Git显示颜色，会让命令输出看起来更醒目：

![mage-20180320112612](https://ws3.sinaimg.cn/large/006tKfTcly1fpj4dq74slj30m206hq49.jpg)



## Git忽略文件

有些时候，你必须把某些文件放到Git工作目录中，但又不能提交它们，比如保存了数据库密码的配置文件啦，等等，每次`git status`都会显示`Untracked files ...`，有强迫症的童鞋心里肯定不爽。

好在Git考虑到了大家的感受，这个问题解决起来也很简单，在Git工作区的根目录下创建一个特殊的`.gitignore`文件，然后把要忽略的文件名填进去，Git就会自动忽略这些文件。

不需要从头写`.gitignore`文件，GitHub已经为我们准备了各种配置文件，只需要组合一下就可以使用了。所有配置文件可以直接在线浏览：<https://github.com/github/gitignore>

忽略文件的原则是：

1. 忽略操作系统自动生成的文件，比如缩略图等；
2. 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如Java编译产生的`.class`文件；
3. 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。



例子：

忽略Python编译产生的`.pyc`、`.pyo`、`dist`等文件或目录：

```sh
# Python:
*.py[cod]
*.so
*.egg
*.egg-info
dist
build
```

加上你自己定义的文件，最终得到一个完整的`.gitignore`文件，内容如下：

```Sh
# Python:
*.py[cod]
*.so
*.egg
*.egg-info
*$py.class
dist
build
__pycache__
migrations
!migrations/__init__.py


# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py
db.sqlite3

# Jupyter Notebook
.ipynb_checkpoints
# Pycharm
.idea
```

最后一步就是把`.gitignore`也提交到Git，就完成了！当然检验`.gitignore`的标准是`git status`命令是不是说`working directory clean`。

有些时候，你想添加一个文件到Git，但发现添加不了，原因是这个文件被`.gitignore`忽略了：

```Sh
$ git add hello.pyc
The following paths are ignored by one of your .gitignore files:
hello.pyc
Use -f if you really want to add them.
```

如果你确实想添加该文件，可以用`-f`强制添加到Git：

```Sh
$ git add -f hello.pyc
```

或者你发现，可能是`.gitignore`写得有问题，需要找出来到底哪个规则写错了，可以用`git check-ignore`命令检查：

```Sh
$ git check-ignore -v hello.pyc
.gitignore:2:*.py[cod]	hello.pyc
```

Git会告诉我们，`.gitignore`的第3行规则忽略了该文件，于是我们就可以知道应该修订哪个规则。



**小结**

- 忽略某些文件时，需要编写`.gitignore`；
- `.gitignore`文件本身要放到版本库里，并且可以对`.gitignore`做版本管理！



## 配置别名

有没有经常敲错命令？比如`git status`？`status`这个单词真心不好记。

如果敲`git st`就表示`git status`那就简单多了，当然这种偷懒的办法我们是极力赞成的。

我们只需要敲一行命令，告诉Git，以后`st`就表示`status`：

```Sh
$ git config --global alias.st status
```

好了，现在敲`git st`看看效果。

当然还有别的命令可以简写，很多人都用`co`表示`checkout`，`ci`表示`commit`，`br`表示`branch`：

```Sh
$ git config --global alias.co checkout
$ git config --global alias.ci commit
$ git config --global alias.br branch
```

以后提交就可以简写成：

```Sh
$ git ci -m "bala bala bala..."
```

`--global`参数是全局参数，也就是这些命令在这台电脑的所有Git仓库下都有用。

在[撤销修改](#撤销修改)一节中，我们知道，命令`git reset HEAD file`可以把暂存区的修改撤销掉（unstage），重新放回工作区。既然是一个unstage操作，就可以配置一个`unstage`别名：

```sh
$ git config --global alias.unstage 'reset HEAD'
```

当你敲入命令：

```sh
$ git unstage test.py
```

实际上Git执行的是：

```sh
$ git reset HEAD test.py
```

配置一个`git last`，让其显示最后一次提交信息：

```Sh
$ git config --global alias.last 'log -1'
```

这样，用`git last`就能显示最近一次的提交：

```Sh
$ git last
commit ac358082b6694ba923c293828a54b4115c6efcb0 (HEAD -> dev, origin/dev)
Merge: 003e6ed 5bd8a63
Author: junxi <xinlei3166@126.com>
Date:   Mon Mar 19 17:21:02 2018 +0800

    merge & fix hello.py
```

甚至还有人丧心病狂地把`lg`配置成了：

```
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

来看看`git lg`的效果：

![mage-20180320121056](https://ws3.sinaimg.cn/large/006tKfTcly1fpj5o8q3byj30rg09i0vd.jpg)

为什么不早点告诉我？别激动，咱不是为了多记几个英文单词嘛！



**配置文件**

配置Git的时候，加上`--global`是针对当前用户起作用的，如果不加，那只针对当前的仓库起作用。

配置文件放哪了？每个仓库的Git配置文件都放在`.git/config`文件中：

```Sh
$ pwd
/Users/junxi/gitskills
$ cat .git/config 
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
	url = git@github.com:junxi3166/gitskills.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[branch "dev"]
	remote = origin
	merge = refs/heads/dev
```

别名就在`[alias]`后面，要删除别名，直接把对应的行删掉即可。

而当前用户的Git配置文件放在用户主目录下的一个隐藏文件`.gitconfig`中：

```Sh
$ cat ~/.gitconfig 
[user]
	email = xxx@126.com
	name = junxi
	signingkey = 4776DFA6E0FEBB24F9A70A49C722C757D7AF8BF3
[color]
	ui = true
[core]
	autocrlf = input
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[alias]
	st = status
	last = log -1
	lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

配置别名也可以直接修改这个文件，如果改错了，可以删掉文件重新通过命令配置。



**小结**

给Git配置好别名，就可以输入命令时偷个懒。我们鼓励偷懒。



## 删除文件

**如果你想把一个文件从版本控制中移除，并且保留本地的文件，首先需要把这个文件加入到gitignore文件中。然后执行以下命令就可以了。**

```Sh
git rm file_path --cached
```

**以上命令将file_path所代表的文件从版本控制中删除，并保留本地文件，此外还要进行commit操作才能将服务器端的文件删掉。如果想把一个文件夹从版本控制中删除并保留本地的文件，只需在上述命令的基础上加上-r参数，即**

```Sh
git rm -r folder_path --cached
```

**如果想把所有gitignore中的文件从版本控制中删除的话，需要执行以下两个命令，即先移除所有文件，再执行添加所有文件（这次会忽略gitignore中的文件）。**

```Sh
git rm -r . --cached
git add .
```



[回到顶部](#Git常用语法)



**告一段落，官网资料很全。**



**学习参考教程：** [廖大牛](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000), [Git官网](https://git-scm.com/book/zh/v1/起步-关于版本控制)

**Git搭建教程：**[菜鸟教程](http://www.runoob.com/git/git-server.html)

