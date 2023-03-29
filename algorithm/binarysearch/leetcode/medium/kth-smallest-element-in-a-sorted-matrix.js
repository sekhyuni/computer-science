/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// 1. 문제 이해
// 1-1. 입력
//      - matrix: number[][], 1 <= matrix.length <= 300, -10^9 <= matrix[i][j] <= 10^9
//      - k: number, 1 <= k <= matrix.length * matrix.length
// 1-2. 출력
//      - kthSmallestNumber: number
// 1-3. 제약
// 2. 구현 방식
//      1) binary search
//        - matrix 배열의 범위 [matrix[0][0], matrix[matrix.length - 1][matrix.length - 1]]에서 binary search 탐색
//        - matrix 배열의 범위 [(0, 0), (matrix.length - 1, matrix.length - 1)]에서 2중 loop로 순회
//        - if matrix[i][j] <= mid ? count++;
//        - count < k ? start = mid + 1 : end = mid - 1;
//        - return start;
//      2) min heap
//        - matrix 배열의 범위 [(0, 0), (matrix.length - 1, matrix.length - 1)]에서 2중 loop로 순회
//        - matrix[i][j]를 minHeap에 추가
//        - k - 1번 minHeap.remove();
//        - return minHeap.peek();
const kthSmallest = function (matrix, k) {
  let start = matrix[0][0];
  let end = matrix[matrix.length - 1][matrix.length - 1];

  // Time Complexity: O(logn), n === 2 * 10^9 - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    let count = 0;
    // Time Complexity: O(m^2), m === 300
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] <= mid) {
          count++;
        } else {
          break;
        }
      }
    }

    if (count < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  // Total Time Complexity: O(m^2 * logn), n === 2 * 10^9, m === 300, logn은 대략 30, O(m^2 * logn)은 대략 270만
  // Total Space Complexity: O(1)
  return start;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  // Removing an element will reomve the
  // top element with highest priority then
  // heapifyDown will be called
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) < this.leftChild(index)
      ) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
}

const kthSmallestUseHeap = function (matrix, k) {
  const minHeap = new MinHeap();

  // Time Complexity: O(n^2 * logn^2), n === 300
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      minHeap.add(matrix[i][j]);
    }
  }

  // Time Complexity: O(n^2 * logn^2), n === 300
  for (let i = 0; i < k - 1; i++) {
    minHeap.remove();
  }

  // Total Time Complexity: O(n^2 * logn^2), n === 300 + O(n^2 * logn^2), n === 300, 2 * O(n^2 * logn^2)은 대략 288만
  // Total Space Complexity: O(n^2)
  return minHeap.peek();
};

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    8
  )
);
console.log(kthSmallest([[-5]], 1));

console.time("size of n is the biggest, binary search");
console.log(
  kthSmallest(
    [
      [-1000000000, -99999, 1],
      [2, 500000000, 500000001],
      [600000000, 750000000, 1000000000],
    ],
    8
  )
);
console.timeEnd("size of n is the biggest, binary search");
console.time("size of n is the biggest, min heap");
console.log(
  kthSmallestUseHeap(
    [
      [-1000000000, -99999, 1],
      [2, 500000000, 500000001],
      [600000000, 750000000, 1000000000],
    ],
    8
  )
);
console.timeEnd("size of n is the biggest, min heap");

console.time("size of n is the smallest, binary search");
console.log(
  kthSmallest(
    [
      [-1, 0, 1],
      [2, 3, 4],
      [5, 6, 10],
    ],
    3
  )
);
console.timeEnd("size of n is the smallest, binary search");
console.time("size of n is the smallest, min heap");
console.log(
  kthSmallestUseHeap(
    [
      [-1, 0, 1],
      [2, 3, 4],
      [5, 6, 10],
    ],
    3
  )
);
console.timeEnd("size of n is the smallest, min heap");

const matrix = Array.from({ length: 300 }, (_, rowIdx) => {
  const listOfRowItem = [];
  for (let i = 0; i < 300; i++) {
    listOfRowItem.push(i + rowIdx);
  }
  return listOfRowItem;
});
console.time("size of m is the biggest, binary search");
console.log(kthSmallest(matrix, 800));
console.timeEnd("size of m is the biggest, binary search");
console.time("size of m is the biggest, min heap");
console.log(kthSmallestUseHeap(matrix, 800));
console.timeEnd("size of m is the biggest, min heap");
