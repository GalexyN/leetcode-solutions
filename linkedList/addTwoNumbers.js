/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let carry = 0;
    let answer = new ListNode();
    let curr = answer;
    
    while (l1 || l2 || sum > 0) {
      if (l1) {
        sum += l1.val;
        l1 = l1.next;
      }
      
      if (l2) {
        sum += l2.val;
        l2 = l2.next;
      }
      
      if (sum >= 10) {
        sum -= 10;
        carry = 1;
      }
      
      curr.next = new ListNode(sum);
      curr = curr.next;
      sum = carry;
      carry = 0;
    }
    
    return answer.next;
  };