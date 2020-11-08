# Week 1

## 数据结构

- 一维
  - 基础：数组 array (string), 链表 linked list
  - 高级：栈 stack, 队列 queue, 双端队列 deque, 集合 set, 映射 map (hash or map), etc
- 二维
  - 基础：树 tree, 图 grap
  - 高级：二叉搜索树 binary search tree (red-black tree, AVL), 堆 heap, 并查集 disjoint set, 字典树 trie, etc
- 特殊
  - 位运算 Bitwise, 布隆过滤器 BloomFilter
  - LRU Cache

## 算法

- if-else, switch --> branch
- for, while --> iteration
- 递归 Recursion (Divide & Conquer, Backtrace)
- 搜索 Search：深度优先搜索 Depth first search, 广度优先搜索 Breadth first search, A\*, etc
- 动态规划 Dynamic Programming
- 二分查找 Binary Search
- 贪心 Greedy
- 数学 Math, 几何 Geometry

注意：在头脑中回想以上算法的思想和代码模板。

## 切题四件套

- Clarification --- 确保对题目的理解是正确的
- Possible solutions --- 想所有可能的解法
- compare (time/space)
  - optimal
  - Coding --- 多写
- Test cases --- 测试样例

## 五毒神掌

1. 第一遍：
   - 五分钟：读题+思考
   - 直接看解法：注意！多解法，比较解法优劣
   - 背诵默写好的解法
2. 第二遍：
   - 马上自己写 --> LeetCode 提交
   - 多种解法比较、体会 ---> 优化
3. 第三遍：
   - 一天后，再重复做题
   - 不同解法的熟练程度，专项练习
4. 第四遍：
   - 一周后，反复回来练习相同题目
5. 第五遍：
   - 面试前一周恢复性练习

听完这节课，1 我对于数据结构的种类以及不同数据结构之间如何由浅入深学习有了进一步认识，同时知道了一些未闻其名的数据结构；2 在算法以及 leetcode 解题有了新的了解，即大多数问题都基于条件、循环、递归解题，其中递归相对神秘，期待后面揭开神秘面纱和有更深的认识，另外还知道了一些常考的算法题类型，算是预先心理建设；3 切题四件套，我确实在这部分存在误区，读题不明、有解法即可思维、一遍过就停止等换习惯，希望转成好的习惯利己；4 知道了宣传已久的五毒神掌，之前刷题只过一遍，再回头看的时候有很多当时的解题思想已经记不起来了。

## 数组、链表、跳表的基本实现和特性

### Array

申请数组时，在计算机在内存中开辟连续的地址，每一个地址可直接通过内存管理器访问，但是增删操作会引起群移，这是数组的一个缺点。
操作的时间复杂度：

- prepend --- O(1)
- append --- O(1)
- lookup --- O(1)
- insert --- O(n)
- delete --- O(n)

### Linked List

链表数据结构存在 next 指针指向下一个元素，如果存在 previous 指针那就是双向链表。弥补数组数据结构的缺点，链表的增删不会引起群移。

操作的时间复杂度：

- prepend --- O(1)
- append --- O(1)
- lookup --- O(n)
- insert --- O(1)
- delete --- O(1)

### Skip List

基于链表，但只能用于链表元素有序的情况。跳表对标平衡二叉树（AVL）和二分查找，它的查找/插入/删除操作时间复杂度均是 nlog(n)。
升维思想，空间换时间。

## 总结

本周课程刚开始适应学习节奏，有时候会跟不上课程或群里大家的学习节奏，一些时候会着急。在刷题方面，已经慢慢有一点气色了，习惯每天下班回家打开电脑刷刷 leetcode 或 在公司任务不多的情况下也看看大家的题解。但是也有个问题，我们的课程仿佛就是看视频做作业，课程中宣传的其他特色一点没有在我这里体现出来，让我开始犹豫是否有买这门课的必要性了。
