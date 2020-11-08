/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // if (n <= 2) return n;
  // let p = 1;
  // let q = 1;
  // let r;
  // for (let i = 3; i < nums.length; i++) {
  //   r = p + 1;
  //   p = q;
  //   q = r;
  // }
  // return q;

  return help(n, new Map());
};

const help = (n, map) => {
  if (map.has(n)) return map.get(n);

  if (n <= 2) {
    map.set(n, n);
  } else {
    map.set(n, help(n - 1, map) + help(n - 2, map));
  }

  return map.get(n);
};
// @lc code=end
