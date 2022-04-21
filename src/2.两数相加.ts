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
  val: number;
  next: ListNode | null;
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// @lc code=start
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let head: ListNode | null = null;
  let cursor: ListNode | null = null;
  let carryOver: number = 0;

  while (l1 || l2) {
    const val1: number = l1?.val ?? 0;
    const val2: number = l2?.val ?? 0;
    const sum: number = val1 + val2 + carryOver;
    const value: number = sum % 10;

    carryOver = (sum / 10) >> 0;

    if (head === null) {
      head = cursor = new ListNode(value);
    } else {
      // @ts-ignore
      cursor.next = new ListNode(value);
      cursor = (cursor as unknown as ListNode).next;
    }

    if (l1 !== null) {
      l1 = l1.next;
    }

    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  if (carryOver > 0) {
    (cursor as unknown as ListNode).next = new ListNode(carryOver);
  }

  return head;
}
// @lc code=end

export default addTwoNumbers;
