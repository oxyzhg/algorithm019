# Week 4

## 第 4 周 第 9 课 深度优先搜索和广度优先搜索

对节点的访问顺序不同，可分为：深度优先搜索（DFS）、广度优先搜索（BFS）。

### 算法模板

深度优先搜索算法模板：

```javascript
// 递归写法
const visited = new Set();
const dfs = (node) => {
  if (visited.has(node)) return;
  visited.add(node);
  dfs(node.left);
  dfs(node.right);
};

// 非递归写法
const dfs = (node) => {
  if (node === null) return [];

  const visited = new Set();
  const stack = [];

  stack.push(node);

  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);
    for (let child of node.children) {
      stack.push(stack);
    }
  }

  return;
};
```

广度优先搜索算法模板：

```javascript
const bfs = (root) => {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const n = queue.length; // variable n is necessary

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }

  return result;
};
```

区别：深度优先使用递归，广度优先使用队列。【不理解】

**广度优先算法使用队列实现**，队列的特点是**先入先出**，要保证树按广度优先搜索进行，就要保证进入队列的顺序是一层一层的，这样能保证每次从队列中取值也是按层取值。而**深度优先搜索算法使用栈实现**，栈的特点是**后入先出**，在树结构中即保证优先遍历子节点，然后再操作兄弟节点。以上就是 DFS 和 BFS 关于栈和队列的实现区别，不同搜索方式的特点对应不同数据结构的性质，即特点取决于性质。

记忆方面，队列实现的 BFS 每次清空队列可以理解为按层清理（因此在追加前记录的变量 n 非常重要，否则乱序）、按层追加，遍历是清空当前层的节点，如果有子节点队列中又会追加新的节点，直到没有子节点追加，队列自然而然执行结束。而栈实现的 DFS 每次优先处理子节点，有时会看到栈会越来越长，等逐步出栈后，树才会遍历完成。

## 第 4 周 第 10 课 贪心算法

贪心算法（Greedy）：是指在每一步都采取当前状态下最好或最优的的选择，从而希望结果是全局最好或最优的算法。贪心算法和动态会规划不同，贪心算法对每个子问题的解决方案都做出选择，不能回退；动态规划则会保存之前的计算结果，并根据以前的运算结果对当前结果进行选择，有回退功能。

贪心算法：当下做局部最优判断
回溯算法：能够回退
动态规划：最有判断+回退

贪心算法可以解决一些最优问题，如：求图中的最小生成树、求哈夫曼编码等。然而对于生活中的问题，贪心算法一般不能满足所求答案。一旦一个问题能够用贪心算法解决，那么贪心算法一般是这个问题的最优解。由于贪心算法的高效性以及其所求结果比较接近最优解，贪心算法也可用作辅助算法或直接解决一些要求结果不是特别精确的问题。

试用贪心算法的场景：

问题能够分解成子问题解决，子问题的最优解能递推到最终结果的最优解，这种子问题成为最有子结构。

通过做题发现，贪心算法太难了，实际运用有点困难，一些题要么思路不清晰，要么看完题解选择了其他解题方法!!!

## 第 4 周 第 11 课 二分查找

二分查找的前提：

1. 目标函数的单调性（存在单调递增或单调递减，通过单调性排出一部分元素）
1. 存在上下界（bounded）
1. 能够通过索引访问（index accessible）

二分查找模板：

```javascript
let left = 0;
let right = len(array) - 1;
while (left <= right) {
  let mid = (left + right) >> 1;
  if (array[mid] === target) return;
  // find the target
  else if (array[mid] < target) left = mid + 1;
  else right = mid - 1;
}
```
