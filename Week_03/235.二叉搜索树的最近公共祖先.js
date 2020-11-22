/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const max = Math.max(p.val, q.val);
  const min = Math.min(p.val, q.val);

  const find = (root) => {
    if (root.val < min) {
      return find(root.right);
    } else if (root.val > max) {
      return find(root.left);
    } else {
      return root;
    }
  };

  return find(root);
};
// @lc code=end
