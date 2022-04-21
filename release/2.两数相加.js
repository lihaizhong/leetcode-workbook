/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/solution/liang-shu-xiang-jia-by-leetcode-solution/
 *
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 方法一：模拟
 */
export class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   val: number;
 *   next: ListNode | null;
 *   constructor(val?: number, next?: ListNode | null) {
 *     this.val = val === undefined ? 0 : val;
 *     this.next = next === undefined ? null : next;
 *   }
 * }
 */
function addTwoNumbers(l1, l2) {
    var _a, _b;
    let head = null;
    let cursor = null;
    let carryOver = 0;
    while (l1 || l2) {
        const val1 = (_a = l1 === null || l1 === void 0 ? void 0 : l1.val) !== null && _a !== void 0 ? _a : 0;
        const val2 = (_b = l2 === null || l2 === void 0 ? void 0 : l2.val) !== null && _b !== void 0 ? _b : 0;
        const sum = val1 + val2 + carryOver;
        const value = sum % 10;
        carryOver = (sum / 10) >> 0;
        if (head === null) {
            // @ts-ignore
            head = cursor = new ListNode(value);
        }
        else {
            // @ts-ignore
            cursor.next = new ListNode(value);
            cursor = cursor.next;
        }
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }
    if (carryOver > 0) {
        cursor.next = new ListNode(carryOver);
    }
    return head;
}
// @lc code=end
export default addTwoNumbers;
