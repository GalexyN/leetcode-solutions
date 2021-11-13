/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 
 input head of linked list
 output linkedlist - nth node
 constraint at least 1 node in input linkedlist
 edge nth node *from the end*
 */
 var removeNthFromEnd = function(head, n) {
    // set up left pointer
    let left = 1;
    // set up right pointer
    let right = 1;
    // loop through input linked list and increment right pointer to get last node
    let curr = head;
    while (curr) {
        right++;
        curr = curr.next;
    }
    // determine length of linked list
    let length = right - left;
    // calculate nth node to remove by taking length - input nth
    let nodeToBeRemoved = length - n + 1;
    
    console.log(`
left: ${left}
right: ${right}
length: ${length}
nodeToBeRemoved: ${nodeToBeRemoved}
`)
    
    let answer = head;
    let i = 1;
    curr = head;      
    while (curr) {
        // checks if we're removing head 
        if (nodeToBeRemoved === 1) {
            answer = head.next;
            break;
        } else { 
            // since we're not removing head we can loop through linked list and reset the prior node to the node to be removed
            if (i === nodeToBeRemoved - 1) {
                curr.next = curr.next.next;
                break;
            } else {
                i++;
                curr = curr.next;
            }
        }
    }
        

        
    console.log('curr')
    console.log(curr);
    console.log('answer');
    console.log(answer);
    return answer;
};