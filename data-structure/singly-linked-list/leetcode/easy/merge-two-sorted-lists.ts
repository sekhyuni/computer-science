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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let curr = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      curr.next = list2;

      list2 = list2.next;
    } else {
      curr.next = list1;

      list1 = list1.next;
    }

    curr = curr.next;
  }

  curr.next = list1 !== null ? list1 : list2;

  return dummy.next;
}

console.log(
  `[${linkedListToArray(
    mergeTwoLists(createLinkedList([1, 2, 4]), createLinkedList([1, 3, 4]))
  )}]`
);
console.log(
  `[${linkedListToArray(
    mergeTwoLists(createLinkedList([]), createLinkedList([]))
  )}]`
);
console.log(
  `[${linkedListToArray(
    mergeTwoLists(createLinkedList([]), createLinkedList([0]))
  )}]`
);

function mergeTwoListsMySolution(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let result = null;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      const newListNode = new ListNode(list2.val);

      if (result) {
        let curr = result;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newListNode;
      } else {
        result = newListNode;
      }

      list2 = list2.next;
    } else {
      const newListNode = new ListNode(list1.val);

      if (result) {
        let curr = result;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newListNode;
      } else {
        result = newListNode;
      }

      list1 = list1.next;
    }
  }

  if (list1 !== null) {
    if (result) {
      let curr = result;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = list1;
    } else {
      result = list1;
    }
  }
  if (list2 !== null) {
    if (result) {
      let curr = result;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = list2;
    } else {
      result = list2;
    }
  }

  return result;
}

console.log(
  `[${linkedListToArray(
    mergeTwoListsMySolution(
      createLinkedList([1, 2, 4]),
      createLinkedList([1, 3, 4])
    )
  )}]`
);
console.log(
  `[${linkedListToArray(
    mergeTwoListsMySolution(createLinkedList([]), createLinkedList([]))
  )}]`
);
console.log(
  `[${linkedListToArray(
    mergeTwoListsMySolution(createLinkedList([]), createLinkedList([0]))
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
