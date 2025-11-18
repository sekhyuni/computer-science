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

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow?.next ?? null;
    fast = fast.next.next;
  }
  return slow;
}

console.log(
  `[${linkedListToArray(middleNode(createLinkedList([1, 2, 3, 4, 5])))}]`
);
console.log(
  `[${linkedListToArray(middleNode(createLinkedList([1, 2, 3, 4, 5, 6])))}]`
);

function middleNodeByMySolution(head: ListNode | null): ListNode | null {
  const arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  let count = 0;
  while (head !== null && count !== Math.floor(arr.length / 2)) {
    head = head.next;
    count++;
  }

  return head;
}

console.log(
  `[${linkedListToArray(
    middleNodeByMySolution(createLinkedList([1, 2, 3, 4, 5]))
  )}]`
);
console.log(
  `[${linkedListToArray(
    middleNodeByMySolution(createLinkedList([1, 2, 3, 4, 5, 6]))
  )}]`
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
