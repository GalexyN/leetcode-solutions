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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    let ans = [];
    let nodes = [root]
    
    while (nodes.length) {
      let nodesOnLevel = nodes.length;
      let sum = 0;
      
      for (let i = 0; i < nodesOnLevel; i++) {
        let currentNode = nodes.shift();
        sum += currentNode.val;
        if (currentNode.left) {
          nodes.push(currentNode.left)
        }
        
        if (currentNode.right) {
          nodes.push(currentNode.right);
        }
      }
      ans.push(sum / nodesOnLevel);
    }
    
    return ans;
  };
  
  
  