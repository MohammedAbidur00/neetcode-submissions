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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const list3 = new ListNode();
        let pointer1 = list1;
        let pointer2 = list2;
        let pointer3 = list3;

        if (pointer1 === null) return list2;
        if (pointer2 === null) return list1;

        while (pointer1 !== null && pointer2 !== null) {
            if (pointer1.val <= pointer2.val) {
                pointer3.next = new ListNode(pointer1.val);
                pointer1 = pointer1.next
            } else if (pointer1.val > pointer2.val) {
                pointer3.next = new ListNode(pointer2.val);
                pointer2 = pointer2.next
            }
            pointer3 = pointer3.next
        }

        if (pointer1 !== null) {
            pointer3.next = pointer1;
        } else if (pointer2 !== null) {
            pointer3.next = pointer2;
        }

        return list3.next
    }
}
