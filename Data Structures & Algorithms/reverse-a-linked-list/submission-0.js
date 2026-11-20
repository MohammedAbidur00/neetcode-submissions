/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previous = null;
        let pointer = head;

        while (pointer !== null) {
            let next = pointer.next;

            pointer.next = previous;

            previous = pointer;
            pointer = next;
        }
        head = previous;
        return head
    }
}
