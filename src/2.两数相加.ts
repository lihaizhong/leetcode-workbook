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
  l1: ListNode | null,
  // @ts-ignore
  l2: ListNode | null
  // @ts-ignore
): ListNode | null {
  let head = null;
  let cursor = null;
  let carryOver = 0;

  while (l1 || l2) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;
    const sum = val1 + val2 + carryOver;
    const value = sum % 10;

    carryOver = sum / 10 >> 0;

    if (head === null) {
      // @ts-ignore
      head = cursor = new ListNode(value);
    } else {
      // @ts-ignore
      cursor.next = new ListNode(value);
      cursor = (cursor as any)?.next ?? cursor;
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
