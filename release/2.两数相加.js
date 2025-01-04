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
    val;
    next = null;
    constructor(val = 0) {
        this.val = val;
    }
}
// @lc code=start
function addTwoNumbers(ln1, ln2) {
    let l1 = ln1;
    let l2 = ln2;
    // 头位置
    let head = null;
    // 游标位置
    let cursor = null;
    // 进位数字
    let carryOver = 0;
    while (l1 || l2) {
        const val1 = l1?.val ?? 0;
        const val2 = l2?.val ?? 0;
        const sum = val1 + val2 + carryOver;
        // 获取个位数字
        const value = sum % 10;
        // 获取进位数字
        carryOver = (sum / 10) >> 0;
        if (head === null) {
            // 记录头的位置
            head = cursor = new ListNode(value);
        }
        else {
            // 创建新节点
            cursor.next = new ListNode(value);
            // 游标移动到新节点
            cursor = cursor.next;
        }
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }
    // 判断是否还需要进位
    if (carryOver > 0) {
        cursor.next = new ListNode(carryOver);
    }
    return head;
}
// @lc code=end
export default addTwoNumbers;
