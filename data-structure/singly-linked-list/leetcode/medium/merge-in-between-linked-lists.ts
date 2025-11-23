/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let prevANodeOfList1: ListNode | null = list1;
  for (let i = 0; prevANodeOfList1 !== null && i < a - 1; i++) {
    prevANodeOfList1 = prevANodeOfList1.next;
  }

  let nextBNodeOfList1: ListNode | null = list1;
  for (let i = 0; nextBNodeOfList1 !== null && i <= b; i++) {
    nextBNodeOfList1 = nextBNodeOfList1.next;
  }

  let lastNodeOfList2: ListNode | null = list2;
  while (lastNodeOfList2 !== null && lastNodeOfList2.next !== null) {
    lastNodeOfList2 = lastNodeOfList2.next;
  }

  if (prevANodeOfList1) prevANodeOfList1.next = list2;
  if (lastNodeOfList2) lastNodeOfList2.next = nextBNodeOfList1;

  return list1;
}

console.log(
  linkedListToArray(
    mergeInBetween(
      createLinkedList([10, 1, 13, 6, 9, 5]),
      3,
      4,
      createLinkedList([1000000, 1000001, 1000002])
    )
  )
);
console.log(
  linkedListToArray(
    mergeInBetween(
      createLinkedList([0, 1, 2, 3, 4, 5, 6]),
      2,
      5,
      createLinkedList([1000000, 1000001, 1000002, 1000003, 1000004])
    )
  )
);

function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}
