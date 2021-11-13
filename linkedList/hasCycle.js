/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let curr = head;
    let fastCurr = head;
    
    while (fastCurr && fastCurr.next && fastCurr.next.next) {
      curr = curr.next;
      fastCurr = fastCurr.next.next;
      if (curr === fastCurr) {
        return true;
      }
    }
    return false;
  };