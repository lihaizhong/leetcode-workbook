import addTwoNumbers, { ListNode } from "./2.两数相加";

function deserializer(list: number[] = []): ListNode {
  let head: ListNode | null = null;
  let cursor: ListNode | null = null;

  for (let i: number = 0; i < list.length; i++) {
    const val: number = list[i];

    if (cursor === null) {
      head = cursor = new ListNode(val);
    } else {
      cursor.next = new ListNode(val);
      cursor = cursor.next;
    }
  }

  return head as ListNode;
}

function serializer(l1: ListNode | null, l2: ListNode | null): number[] {
  const s: number[] = [];
  let node: ListNode | null = addTwoNumbers(l1, l2);

  while (node !== null) {
    s.push(node.val);
    node = node.next;
  }

  return s;
}

describe("两数相加", () => {
  it("[2,3], [1,3,6]", () => {
    const l1: ListNode = deserializer([2, 3])
    const l2: ListNode = deserializer([1, 3, 6])

    expect(serializer(l1, l2)).toEqual([3, 6, 6])
  })

  it("[9,9,9,9,9,9,9], [9,9,9,9]", () => {
    const l1: ListNode = deserializer([9, 9, 9, 9, 9, 9, 9]);
    const l2: ListNode = deserializer([9, 9, 9, 9]);

    expect(serializer(l1, l2)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });

  it("[0], [0]", () => {
    const l1: ListNode = deserializer([0]);
    const l2: ListNode = deserializer([0]);

    expect(serializer(l1, l2)).toEqual([0]);
  });

  it("[2,4,3], [5,6,4]", () => {
    const l1: ListNode = deserializer([2, 4, 3]);
    const l2: ListNode = deserializer([5, 6, 4]);

    expect(serializer(l1, l2)).toEqual([7, 0, 8]);
  });
});
