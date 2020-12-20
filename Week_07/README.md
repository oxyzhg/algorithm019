# Week 7

## Trie 树的基本实现和特性

模拟实现了 Trie，但不太理解 endOfWord 是什么意义。

代码模板：

```javascript
class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = '$';
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      node[ch] = node[ch] || {};
      node = node[ch];
    }
    node[this.endOfWord] = this.endOfWord;
  }

  search(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return (node[this.endOfWord] = this.endOfWord);
  }

  startsWith(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node[ch]) return false;
      node = node[ch];
    }
    return true;
  }
}
```

实战题目：

- 实现 Trie 前缀树，这里参考代码实现，还需再了解一下。
- 单词搜索 II，有点难，没看懂。

### 并查集

适用场景：

- 组团、配对问题
- Group or not ?

基本操作：

- makeSet(s)：建立一个新的并查集，其中包含 s 个单元素集合。
- unionSet(s)：把元素 x 和元素 y 所在的集合合并，要求 x 和 y 所在的集合不相交，如果相交则不合并。
- find(s)：找到元素 x 所在的集合的代表，该操作也可以用于判断两个元素是否位于同一个集合，只要将他们各自的代表比较一下就可以了。

代码模板：

```javascript
class unionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(p) {
    let root = p;
    while (parent[root] !== root) {
      root = parent[root];
    }
    // 压缩路径
    while (parent[p] !== p) {
      let x = p;
      p = this.parent[p];
      this.parent[x] = root;
    }
    return root;
  }

  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
    this.count--;
  }
}
```

相关题目：

- 朋友圈
- 岛屿数量
- 被围绕的区域

## 高级搜索

优化方式：

- 不重复
- 剪枝

搜索方式：

- DFS：深度优先搜索
- BFS：广度优先搜索

双线搜索、启发式搜索

深度优先搜索代码模板：

```javascript
// 递归写法
const visited = new Set();
const dfs = (node) => {
	if (visited.has(node) return;
	visited.add(node);
  dfs(node.left);
  dfs(node.right);
}

// 遍历写法
const dfs = (node) => {
	if (node === null) return [];

  const visited = new Set();
  const stack = [];

  stack.push(root);

  while (stack.length) {
  	const node = stack.pop();
    if (visited.has(node) continue;
		visited.add(node);
    for (let child of node.children) {
    	stack.push(child);
    }
  }

  return;
}
```

广度优先搜索代码模板：

```javascript
// 遍历写法
const bfs = (node) => {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const n = queue.length;

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

剪枝操作例题：

- 爬楼梯
- 括号生成
- 八皇后问题（未写）
- 有效的数独
