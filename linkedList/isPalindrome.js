/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let curr = head;
  
  const traverse = node => {
    if (!node) {
      return true;
    }
    
    const prevNodeIsSame = traverse(node.next);
    const currNodeIsSame = curr.val === node.val;
    curr = curr.next;
    return prevNodeIsSame && currNodeIsSame
  }
  
  return traverse(head);
};