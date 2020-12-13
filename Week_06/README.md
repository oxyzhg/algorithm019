# Week 6

分治+回溯+递归+动态规划


递归代码模板：
```javascript
const recursion = (level, params) => {
	// recursion terminator
  if (level > MAX_LEVEL) {
    process_result
    return
  }

  // process current level
  process(level, data)

  // drill down
  recursion(level+1, params);

  // reverse the status if needed
}
```
分治代码模板：
```javascript
const divideConquer = (problem, params) => {
	// recursion terminator
  if (problem === null) {
  	process_result
    return
  }
  
  // process current problem
  subproblem = split_problem(problem, data)
  subresult1 = divideConquer(subproblem[0], p0);
  subresult2 = divideConquer(subproblem[1], p1);
  subresult3 = divideConquer(subproblem[2], p2);
  ...
  
  // merge
  result = processs_result(subresult1, subresult2, subresult3);
  
  // revert the status
}
```
避免人肉递归，但看到问题找不到解决方法的时候，还是会人肉递归找一下规律。


- 找到最近最简方法，将其拆解为可重复解决的子问题
- 数学归纳法



动态规划（Dynamic Programming）定义：

- 分治+最优子结构
- 可理解为动态递推



动态规划和分治算法的共性：找重复子问题
动态规划和分治算法的差异性：最优子结构，中途可以淘汰次优解


动态规划关键点：

1. 最优子结构 opt[n] = best_of(opt[n-1], opt[n-2], ...)
1. 储存中间状态
1. 递推公式
   1. 斐波那契：Fib = opt[n-1] + opt[n-2]
   1. 二维路径：opt[i, j] = opt[i, j+1] + opt[i+1, j]



关键点：

1. 如何构建动态方程（有点难，练的几道题一般想不到方程）
1. 填充二维数组，m/m+1 选择问题（暂时没找到什么规律，好像跟使用的便利性有关）