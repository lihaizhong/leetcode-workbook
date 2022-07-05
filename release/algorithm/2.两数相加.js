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
function addTwoNumbers(l1, l2) {
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
exports.default = addTwoNumbers;
//# sourceMappingURL=2.%E4%B8%A4%E6%95%B0%E7%9B%B8%E5%8A%A0.js.map