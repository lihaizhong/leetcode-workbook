"use strict";
/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */
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
function addTwoNumbers(
// @ts-ignore
l1, 
// @ts-ignore
l2
// @ts-ignore
) {
    var _a, _b, _c;
    let head = null;
    let cursor = null;
    let carryOver = 0;
    while (l1 || l2) {
        const val1 = (_a = l1 === null || l1 === void 0 ? void 0 : l1.val) !== null && _a !== void 0 ? _a : 0;
        const val2 = (_b = l2 === null || l2 === void 0 ? void 0 : l2.val) !== null && _b !== void 0 ? _b : 0;
        const sum = val1 + val2 + carryOver;
        const value = sum % 10;
        carryOver = sum / 10 >> 0;
        if (head === null) {
            // @ts-ignore
            head = cursor = new ListNode(value);
        }
        else {
            // @ts-ignore
            cursor.next = new ListNode(value);
            cursor = (_c = cursor === null || cursor === void 0 ? void 0 : cursor.next) !== null && _c !== void 0 ? _c : cursor;
        }
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }
    if (carryOver > 0) {
        // @ts-ignore
        cursor.next = new ListNode(carryOver);
    }
    return head;
}
// @lc code=end
