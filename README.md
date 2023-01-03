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
    - HashTable vs HashMap
        - HashTable은 Thread-Safe하고, HashMap은 그렇지 않다. 따라서, Multi-Thread 환경이 아니라면, HashTable은 HashMap보다 성능이 떨어진다는 단점이 있음
    - V8 Engine에서 Map은 Hash Table로 구현되어 있음
    - V8 Engine에서 Object는 Hash Table로 구현되어 있지 않은 것으로 알려짐
    - Time Complexity:
        |Data Structure|Access|Search|Insertion|Deletion|
        |:---:|:---:|:---:|:---:|:---:|
        |Hash Table|N/A|O(1)|O(1)|O(1)|
        ```javascript
            const hashTableByObject = {};
            console.time('[Hash Table By Object] Insertion Time Complexity is O(1)');
            for (let i = 0; i < 50000; i++) {
                hashTableByObject[i] = i;
            }
            console.timeEnd('[Hash Table By Object] Insertion Time Complexity is O(1)');
            console.time('[Hash Table By Object] Search Time Complexity is O(1)');
            for (let i = 0; i < 50000; i++) {
                if (hashTableByObject.hasOwnProperty(i)) { }
            }
            console.timeEnd('[Hash Table By Object] Search Time Complexity is O(1)');
            console.time('[Hash Table By Object] Deletion Time Complexity is O(1)');
            for (let i = 0; i < 50000; i++) {
                delete hashTableByObject[i];
            }
            console.timeEnd('[Hash Table By Object] Deletion Time Complexity is O(1)');

            const hashTableByMap = new Map();
            console.time('[Hash Table By Map] Insertion Time Complexity is O(1)');
            for (let i = 0; i < 50000; i++) {
                hashTableByMap.set(i, i);
            }
            console.timeEnd('[Hash Table By Map] Insertion Time Complexity is O(1)');
            console.time('[Hash Table By Map] Search Time Complexity is O(1)');
            for (let i = 0; i < 50000; i++) {
                if (hashTableByMap.has(i)) { }
            }
            console.timeEnd('[Hash Table By Map] Search Time Complexity is O(1)');
            console.time('[Hash Table By Map] Deletion Time Complexity is O(1)');
            for (let i = 0; i < 50000; i++) {
                hashTableByMap.delete(i);
            }
            console.timeEnd('[Hash Table By Map] Deletion Time Complexity is O(1)');
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
                queue.shift(); // Actually, Time Complexity of shift is not O(1), but O(n). However, Time Complexity: dequeue < shift < splice. So, sometimes using shift is no problem
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
        ```javascript
            const binarySearch = (array, target) => {
                let start = 0;
                let end = array.length - 1;

                while (start <= end) {
                    const mid = Math.floor((start + end) / 2);

                    if (array[mid] === target) {
                        return mid;
                    } else if (array[mid] > target) {
                        end = mid - 1;
                    } else {
                        start = mid + 1;
                    }
                }

                return -1;
            };
        ```
1. Sorting
    - A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure.
    - stable vs not stable
        - stable 정렬은 중복된 key 값이 있을 때 이를 순서대로 정렬하는 정렬 알고리즘이고, not stable 정렬은 순서대로 정렬되지 않는 정렬 알고리즘
    - in-place vs not in-place 
        - in-place 정렬은 원소들의 개수에 비해 충분히 무시할만한 저장 공간만을 더 사용하는 정렬 알고리즘이고, not in-place 정렬은 원소들의 개수에 비례하여 저장 공간을 더 사용하는 정렬 알고리즘
        - stable, in-place 정렬로는 Bubble Sort (Time Complexity: O(n^2), Space Complexity: O(1))가 있음
        - not stable, in-place 정렬로는 Selection Sort (Time Complexity: O(n^2), Space Complexity: O(1))가 있음
        - stable, not in-place 정렬로는 Merge Sort (Time Complexity: O(nlogn), Space Complexity: O(n))가 있음
1. Recursion
    - The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function.
1. Dynamic Programming
    - Update later..
1. BFS & DFS
    - Update later..
1. Backtracking
    - Update later..