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
    let l1Stack = [];
    let l2Stack = [];
    
    while (l1 || l2) {
      if (l1) {
        l1Stack.push(l1.val)
        l1 = l1.next;
      }
      
      if (l2) {
        l2Stack.push(l2.val)
        l2 = l2.next;
      }
    }
    
    let l3 = new ListNode(0);
    
    while (l1Stack.length || l2Stack.length) {
      let sum = 0;
      if (l1Stack.length) {
        sum += l1Stack.pop();
      }
      
      if (l2Stack.length) {
        sum += l2Stack.pop();
      }
      
      sum += l3.val;
      l3.val = sum % 10 // carry / remainder
      let head = new ListNode(Math.trunc(sum / 10));
      head.next = l3;
      l3 = head;
    }
    
    return l3.val === 0 ? l3.next : l3;
  };