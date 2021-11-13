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
 
 input head of linkedlist
 output int - middle of linked list
 constraints - theres at least 1 node
 edge - if 2 middles return 2nd middle
 */
 var middleNode = function(head) {
    // set up left pointer at head
    let left = 1;
    // set up right pointer which will go to the tail
    let right = 1;
    // loop through linked list and increment right pointer
    let curr = head;
    while (curr) {
        right++;
        // break out of loop once u hit the tail
        curr = curr.next;
    }
    // you now have the length of the linked list
    console.log(`
left: ${left}
right: ${right}
`)
    let totalNodes = (right - left);
    console.log(`total nodes: ${totalNodes}`)
    let middle = !(totalNodes % 2) ? (totalNodes / 2) + 1 : Math.ceil(totalNodes / 2); 
    // if length is even return right / 2 + 1
    // if odd return right / 2
    console.log(`middle: ${middle}`)
    
    let i = 1;
    curr = head;
    let middleNode;
    while (i <= middle) {
        console.log(curr);
        if (i === middle) {
            middleNode = curr;
            break;
        } 
        curr = curr.next;
        i++;
    }
    return middleNode;
};