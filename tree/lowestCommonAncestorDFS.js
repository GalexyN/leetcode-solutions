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
 var lowestCommonAncestor = function(root, p, q) {
    /*
    its a binary search tree so we know its structured as such
    we check if the current node is less than both the p and q vals
      if so then we know that the current node is too small so we need to start searching right
    if the current node is greater than both p q then we know that the current node is too big so we have to check the left
    if the current node is in between the p and q then we found a sweet spot and we can return the current node
    */
    
    if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
    }
    
    if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
    }
    
    return root;
  };