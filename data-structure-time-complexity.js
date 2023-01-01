const array = [];
const hashTable = {};
const stack = [];
const queue = [];

// Array
console.time('[Array] Insertion Time Complexity is O(n)');
for (let i = 0; i < 50000; i++) {
    array.splice(i, 0, i);
}
console.timeEnd('[Array] Insertion Time Complexity is O(n)');
console.time('[Array] Search Time Complexity is O(n)');
for (let i = 0; i < 50000; i++) {
    if (array.includes(i)) { }
}
console.timeEnd('[Array] Search Time Complexity is O(n)');
console.time('[Array] Deletion Time Complexity is O(n)');
for (let i = 0; i < 50000; i++) {
    array.splice(0, 1);
}
console.timeEnd('[Array] Deletion Time Complexity is O(n)');

// Hash Table
console.time('[Hash Table] Insertion Time Complexity is O(1)');
for (let i = 0; i < 50000; i++) {
    hashTable[i] = i;
}
console.timeEnd('[Hash Table] Insertion Time Complexity is O(1)');
console.time('[Hash Table] Search Time Complexity is O(1)');
for (let i = 0; i < 50000; i++) {
    if (hashTable.hasOwnProperty(i)) { }
}
console.timeEnd('[Hash Table] Search Time Complexity is O(1)');
console.time('[Hash Table] Deletion Time Complexity is O(1)');
for (let i = 0; i < 50000; i++) {
    delete hashTable[i];
}
console.timeEnd('[Hash Table] Deletion Time Complexity is O(1)');

// Stack
console.time('[Stack] Insertion Time Complexity is O(1)');
for (let i = 0; i < 50000; i++) {
    stack.push(i);
}
console.timeEnd('[Stack] Insertion Time Complexity is O(1)');
console.time('[Stack] Search Time Complexity is O(n)');
for (let i = 0; i < 50000; i++) {
    if (stack.includes(i)) { }
}
console.timeEnd('[Stack] Search Time Complexity is O(n)');
console.time('[Stack] Deletion Time Complexity is O(1)');
for (let i = 0; i < 50000; i++) {
    stack.pop();
}
console.timeEnd('[Stack] Deletion Time Complexity is O(1)');

// Queue
console.time('[Queue] Insertion Time Complexity is O(1)');
for (let i = 0; i < 50000; i++) {
    queue.push(i); // equal enqueue
}
console.timeEnd('[Queue] Insertion Time Complexity is O(1)');
console.time('[Queue] Search Time Complexity is O(n)');
for (let i = 0; i < 50000; i++) {
    if (queue.includes(i)) { }
}
console.timeEnd('[Queue] Search Time Complexity is O(n)');
console.time('[Queue] Deletion Time Complexity is O(1)');
for (let i = 0; i < 50000; i++) {
    queue.shift(); // Actually, Time Complexity of shift is not O(1), but O(n). However, Time Complexity: dequeue < shift < splice. So, sometimes using shift is no problem
}
console.timeEnd('[Queue] Deletion Time Complexity is O(1)');

// [Array] Insertion Time Complexity is O(n): 6.525ms
// [Array] Search Time Complexity is O(n): 1.694s
// [Array] Deletion Time Complexity is O(n): 925.122ms

// [Hash Table] Insertion Time Complexity is O(1): 1.681ms
// [Hash Table] Search Time Complexity is O(1): 1.704ms
// [Hash Table] Deletion Time Complexity is O(1): 4.14ms

// [Stack] Insertion Time Complexity is O(1): 2.979ms
// [Stack] Search Time Complexity is O(n): 1.612s
// [Stack] Deletion Time Complexity is O(1): 1.701ms

// [Queue] Insertion Time Complexity is O(1): 3.396ms
// [Queue] Search Time Complexity is O(n): 1.546s
// [Queue] Deletion Time Complexity is O(1): 454.669ms