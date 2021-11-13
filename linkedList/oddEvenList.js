/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    if (!head) {
      return null;
    }
    
    let odds = head
    let evens = head.next;
    let headOfEven = evens;
    
    while (evens && evens.next) {
      odds.next = evens.next;
      odds = odds.next;
      evens.next = odds.next;
      evens = evens.next;
    }
    
    odds.next = headOfEven
    return head;
  };