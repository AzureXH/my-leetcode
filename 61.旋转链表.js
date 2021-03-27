/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null || k == 0) return head;
    let len = 0;
    let cur = head
    while (cur) {
        cur = cur.next;
        len++;
    }
    let trueK = k % len
    if (trueK === 0) return head;

    let slow = head;
    let fast = head;
    let times = trueK;
    while (times > 0) fast = fast.next, times--;

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = head;
    let resNode = slow.next;
    slow.next = null;
    return resNode;

};
// @lc code=end

