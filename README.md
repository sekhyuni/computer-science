# Data Structure
1. Array
    - An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).
    - Time Complexity:
        |Data Structure|Access|Search|Insertion|Deletion|
        |:---:|:---:|:---:|:---:|:---:|
        |Array|O(1)|O(n)|O(n)|O(n)|
        ```javascript
            const array = [];

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
        ```
1. Hash Table
    - Hashing is a technique or process of mapping keys, and values into the hash table by using a hash function. It is done for faster access to elements. The efficiency of mapping depends on the efficiency of the hash function used.
    - Time Complexity:
        |Data Structure|Access|Search|Insertion|Deletion|
        |:---:|:---:|:---:|:---:|:---:|
        |Hash Table|N/A|O(1)|O(1)|O(1)|
        ```javascript
            const hashTable = {};

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
        ```
1. Stack
    - Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
    - Time Complexity:
        |Data Structure|Access|Search|Insertion|Deletion|
        |:---:|:---:|:---:|:---:|:---:|
        |Stack|O(n)|O(n)|O(1)|O(1)|
        ```javascript
            const stack = [];

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
        ```
1. Queue
    - A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.
    - Time Complexity:
        |Data Structure|Access|Search|Insertion|Deletion|
        |:---:|:---:|:---:|:---:|:---:|
        |Stack|O(n)|O(n)|O(1)|O(1)|
        ```javascript
            const queue = [];

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
                queue.shift(); // Time Complexity: dequeue < shift < splice, but, sometimes using shift is no problem
            }
            console.timeEnd('[Queue] Deletion Time Complexity is O(1)');
        ```
1. Heap
    - Update later..
1. Linked List
    - Update later..
1. Tree & Graph
    - Update later..

# Algorithm
1. Binary Search
    - Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 
1. Sorting
    - A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.
1. Recursion
    - The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.
1. Dynamic Programming
    - Update later..
1. BFS & DFS
    - Update later..
1. Backtracking
    - Update later..