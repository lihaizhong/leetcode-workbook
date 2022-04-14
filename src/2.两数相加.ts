/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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
      // @ts-ignore
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
