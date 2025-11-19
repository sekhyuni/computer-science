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

function getDecimalValue(head: ListNode | null): number {
  let result = 0;
  while (head !== null) {
    result *= 2;
    result += head.val;
    head = head.next;
  }
  return result;
}

console.log(getDecimalValue(createLinkedList([1, 0, 1])));
console.log(getDecimalValue(createLinkedList([0])));
console.log(
  getDecimalValue(
    createLinkedList([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])
  )
);

function getDecimalValueMySolution(head: ListNode | null): number {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] === 1 ? Math.pow(2, arr.length - 1 - i) : 0;
  }

  return result;
}

console.log(getDecimalValueMySolution(createLinkedList([1, 0, 1])));
console.log(getDecimalValueMySolution(createLinkedList([0])));
console.log(
  getDecimalValueMySolution(
    createLinkedList([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])
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
