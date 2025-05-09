---
title: ByteDance支付部门实习面试
date: 2025-03-08 22:11:44
tags:
    - ByteDance
    - Backend
    - Interview
description: 在被鹅厂拒了之后转投字节的怀抱
---

[Home](https://we-are-zed.github.io) >> Zed's Blog

写在前面：在此非常非常感谢罗嘉诚学长的帮助，无私给我分享了非常多面试经验，提供了自己的录音供我学习。还有其他非常非常多学长前辈的帮助，可能这是我在走出象牙塔前接受的第一次来自校友圈的帮助。

------

## 一面（八股面） 2.27

全程没有问任何项目，基本上主打一个考察你计算机基本功：

1.进程和线程的区别
2.进程通信和线程通信的区别
3.动态数组和list的区别（我直接拿arraylist和linkedlist举例子了）
4.stack和queue的区别
5.如何用两个stack模拟一个queue
6.说几个常见的http状态码
7.http和https的区别（我讲了很多ssl证书以及加密的细节）
8.写一个sql：给一个全年级成绩表，查出其中五班里成绩排名前五的学生

算法题1:给定一个目标数字比如24349，和一个数字集合比如[2,3,9]，用集合中的数字去拼凑一个最接近目标数字但是小于的数，比如这里就是23999。其实我这里思路错了，我直接用的贪心，把集合sort之后从小到大开始去和目标数字的每一位比较，但是实际上找不到那个“分界点”，分界点后的数直接选集合最大就行。
字节很看重算法题的结果，我当时超级慌张，这种情绪下再想新思路不太可能了。不过面试官真的很给面子，直接给我换了个新题，而且还直接说比这个简单。（估计是看我八股部分答得还不错）

算法题2:如何用一次遍历，找出一个链表中倒数第k个数。很简单的一个两步走问题，用两个指针，一个先走k步，然后跟另一个指针一起走，直到指针1走到链表最后一个元素。（其实这里也有个小插曲，我直接默认链表长度比k大，就没做特判，但是面试官真的很给面子，就直接跟我明说了）

面评：面试官说我的计算机基础很扎实（也许吧，短期内背八股真的快速知识入脑），但是说我的算法部分可能比较薄弱，让我二面之前赶紧再活跃一下手感。对的，这里面完就直接告诉我有二面了。我还反问了一句为什么都不问项目，因为没有实习经历的项目都没什么好问的😢

## 二面（主管面-项目） 3.3

全程没怎么问八股知识，基本只问项目（个人认为这部分面试完全没准备过，个人觉得被问的很懵，被压力闷了）

上来让我讲一个你觉得最值得说的项目，而且全程只问了这个项目。我上来先讲项目的前端设计，后端设计，数据库设计，为什么要用这些技术栈，以及CAS系统的接入过程和jwt维护过程。

讲完的那一刻身心舒畅，但是第一个问题就问懵了。面试官问我假如这个系统有500个人同时投票，这个系统的qps有多大。完全没预料过的问题。第二个大问题：假如这个系统要向全国的高校进行推广，你第一步应该做什么（答的真的很差劲，我讲了首先扩展单点数据库，有一定的抗风险能力；其次就是做数据库分库分表；然后用redis做一个一级缓存和分布式锁，确保性能的同时确保数据的一致性。但是面试官总觉得我没说到他点子上）

见前两个问题都只能说个七七八八，面试官索性就不问我项目了，问我了不了解设计模式，让我随便讲两个。还好上学期刚学完ooad，我直接背诵了一大通。面试官直接问我为什么不考虑在设计系统的时候就用上设计模式，这里其实就看我个人的表达能力和临场发挥了，我说学生的思维里这些设计模式有一定的借鉴意义，但是那更像是前辈总结出来的经验，我们没实际感受过它的方便所以可能不觉得设计模式很重要。

算法题：给定一个0和1组成的m*n的表格，1为陆地，0为海，请数清图中有几个大陆板块。也不算一个很难的题，思路最直接的就是一个isVisited数组+BFS。遇到1的时候就直接把1上下左右的方格都加入到检索queue里，直到这个“感染过程”结束，就是一个完整的陆地，然后把所有路过的点都标记成isVisited=true。继续寻找下一个没有被访问过且为1的方格重复这个过程。

可能是看我算法做的比较顺利+一面面评还不错（我个人觉得最重要的一点还是我说我最近在学go，因为我知道字节即使面试用java，但是部门还是在转go，刚好二面面我的是深圳的主管），总之二面还是顺利通过了。

## 三面 （leader面-个人经历）3.5

（等我更新，要回去打LOL了喵）

