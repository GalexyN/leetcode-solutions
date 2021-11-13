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
 var deleteDuplicates = function(head) {
    if (!head) {
      return head;
    }
  
  let slow = head;
  
  while (slow && slow.next) {
    if (slow.val === slow.next.val) {
      slow.next = slow.next.next;
    } else {
      slow = slow.next;
    }
  }
  
  return head;
};