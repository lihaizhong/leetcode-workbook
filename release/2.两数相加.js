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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListNode = void 0;
    class ListNode {
        val;
        next;
        constructor(val = 0, next = null) {
            this.val = val;
            this.next = next;
        }
    }
    exports.ListNode = ListNode;
    // @lc code=start
    function addTwoNumbers(ln1, ln2) {
        let l1 = ln1;
        let l2 = ln2;
        let head = null;
        let cursor = null;
        let carryOver = 0;
        while (l1 || l2) {
            const val1 = l1?.val ?? 0;
            const val2 = l2?.val ?? 0;
            const sum = val1 + val2 + carryOver;
            const value = sum % 10;
            carryOver = (sum / 10) >> 0;
            if (head === null) {
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
    exports.default = addTwoNumbers;
});
//# sourceMappingURL=2.%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0.js.map