/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    let queue = [root, root];
    
    while (queue.length > 0) {
      let node1 = queue.shift()
      let node2 = queue.shift();
      
      if (!node1 && !node2) {
        continue;
      }
      
      if (!node1 || !node2) {
        return false;
      }
      
      if (node1.val !== node2.val) {
        return false
      }
      
      queue.push(node1.left, node2.right, node1.right, node2.left);
    }
    
    return true;
  };